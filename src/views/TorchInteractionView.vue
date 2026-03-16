<script setup>
  import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div class="torch-interaction-page">
    <div class="torch-back">
      <RouterLink to="/torch">
        ← Back to Torch overview
      </RouterLink>
    </div>

    <header class="torch-interaction-header">
      <h1 class="torch-header-center">Torch Survival Game</h1>
      <h1 class="torch-interaction-title">
        Building a Scalable Interaction Framework
      </h1>
      <p class="torch-interaction-tags">
        Unreal Engine 5 • C++ • Blueprint
      </p>
    </header>

    <main class="torch-interaction-content">
      <!-- Overview -->
      <section class="torch-section" id="overview">
        <h2>Overview</h2>

        <p>
          This post covers the design and implementation of a component‑based interaction framework built
          for a survival game in Unreal Engine 5. The system was built to solve a recurring problem: as
          the game grew to include many interactable actors — items, tools, trees, dig spots,
          ladders, bridges, and more — managing interaction logic through one‑off input bindings and
          tightly coupled character code became unscalable.
        </p>

        <p>
          The solution is a two‑component architecture built on a C++ interface. Any actor in the world
          can become interactable by simply adding a component and binding a delegate, with zero changes
          required to the player character or HUD.
        </p>

        <a href="https://github.com/beckytheslumberer/torch-interaction-framework"
           target="_blank"
           rel="noopener noreferrer"
           class="torch-deep-link">
          View interaction framework source on GitHub →
        </a>
      </section>

      <!-- Design Goals -->
      <section class="torch-section" id="design-goals">
        <h2>Design Goals</h2>

        <p>
          Before writing any code, the goals were to make interactions flexible, decoupled, and easy to
          author entirely in Blueprint once the C++ layer was in place.
        </p>

        <ul class="torch-list">
          <li>Any actor should be interactable without subclassing a specific base class.</li>
          <li>Interaction logic should live on the interactable actor, not the player.</li>
          <li>Adding a new interactable should require no changes to existing systems.</li>
          <li>The system should support at least two interaction types: primary (interact) and secondary (action).</li>
          <li>The UI should automatically reflect whatever the player is looking at.</li>
          <li>The system should work entirely from Blueprint after the C++ layer is compiled.</li>
        </ul>
      </section>

      <!-- Architecture -->
      <section class="torch-section" id="architecture">
        <h2>Architecture</h2>

        <p>
          The system consists of three C++ types that work together as a backbone: an interface that
          defines the contract for interaction, a component that lives on world actors, and a component
          that lives on the player to drive tracing and input.
        </p>

        <!-- Core Classes -->
        <h3>Core Classes</h3>

        <p>
          These classes split responsibilities cleanly between “who can be interacted with” and “who is
          doing the interacting.”
        </p>

        <table class="torch-table">
          <thead>
            <tr>
              <th>Class</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>IInteractable</code></td>
              <td>
                Interface defining the contract for all interactable actors, including focus, primary
                interaction, and secondary action hooks.
              </td>
            </tr>
            <tr>
              <td><code>UInteractableComponent</code></td>
              <td>
                Added to world actors; implements <code>IInteractable</code> and exposes Blueprint
                delegates for designers to bind interaction behaviour.
              </td>
            </tr>
            <tr>
              <td><code>UInteractorComponent</code></td>
              <td>
                Added to the player; handles tracing, focus management, and dispatching input to the
                currently focused interactable.
              </td>
            </tr>
          </tbody>
        </table>

        <!-- The IInteractable Interface -->
        <h3>The IInteractable Interface</h3>

        <p>
          The interface defines two parallel sets of functions: one for primary interaction (Interact) and one for secondary interaction (Action).
          This distinction was important for the survival game because some actors needed two distinct behaviours —
          for example, a brazier that can be both filled and ignited, or a tree that only supports one action (chop) with no primary interaction.
        </p>

        <figure class="torch-figure torch-code-figure">
          <pre class="torch-code-block"><code>
  <span class="code-comment">// Focus events — fired by the InteractorComponent's trace</span>
  void OnFocused(AActor* Interactor);
  void OnUnfocused(AActor* Interactor);

  <span class="code-comment">// Primary interaction — bound to IA_Interact input</span>
  void OnInteract(AActor* Interactor);
  bool CanInteract(AActor* Interactor) const;

  <span class="code-comment">// Secondary interaction — bound to IA_Action input</span>
  void OnAction(AActor* Interactor);
  bool CanAction(AActor* Interactor) const;
          </code></pre>

          <figcaption class="torch-figure-caption">
            All interface functions are BlueprintNativeEvent — they must always be called via their
            <code>Execute_</code> wrapper (e.g. <code>IInteractable::Execute_OnInteract</code>)
            rather than directly. This ensures Blueprint overrides are dispatched correctly in UE5.
          </figcaption>
        </figure>

        <!-- UInteractableComponent -->
        <h3>UInteractableComponent</h3>

        <p>
          This component is the core of the system from a designer's perspective. It implements
          IInteractable and immediately re-exposes everything as Blueprint-assignable delegates.
          This means a designer can drop the component onto any actor and wire up behavior entirely in
          Blueprint without writing any C++.
        </p>

        <figure class="torch-figure torch-code-figure">
          <pre class="torch-code-block"><code>
  <span class="code-comment">// Delegates exposed to Blueprint</span>
  FOnInteractSignature OnInteracted;
  FOnInteractSignature OnActioned;
  FOnFocusSignature OnFocusGained;
  FOnFocusSignature OnFocusLost;

  <span class="code-comment">// Config — set in the Details panel per actor</span>
  bool bIsInteractable = true;
  bool bIsActionable = false;
          </code></pre>

          <figcaption class="torch-figure-caption">
            Notably, <code>bIsActionable</code> defaults to false. This means actors only opt into
            the secondary action when they need it, keeping things clean for simple interactables like
            item pickups that only need OnInteracted.
          </figcaption>
        </figure>

        <!-- UInteractorComponent -->
        <h3>UInteractorComponent</h3>

        <p>
          This component sits on the player character and is responsible for the trace and input dispatch.
          Each tick it performs a sphere sweep from the player's camera along their look direction, using
          a custom interaction trace channel so that only relevant actors are considered.
        </p>

        <h4>Character-Anchored Interaction Range</h4>

        <p>
          One problem specific to third person games is that camera-based tracing causes the interaction range
          to vary with spring arm zoom level — zooming out effectively decreases reach, while zooming in increases it.
          To fix this inconsistency, the end point of the trace is anchored to the character's world location rather
          than the camera:
        </p>

        <figure class="torch-figure torch-code-figure">
          <pre class="torch-code-block"><code>
  <span class="code-comment">// Trace starts at the camera (the player's view) with a slight offset
  // to avoid immediately hitting any geometry behind the camera</span>
  TraceStart = CachedCamera->GetComponentLocation() + TraceDirection * 30.f;

  <span class="code-comment">// Trace ends relative to the Character, which gives consistent reach regardless of zoom</span>
  const FVector TraceEnd = Owner->GetActorLocation() + (TraceDirection * InteractionRange);
          </code></pre>
        </figure>

        <h4>Focus State Management</h4>

        <p>
          The component maintains a pointer to the currently focused <code>UInteractableComponent</code>. When
          the focused actor changes, it dispatches <code>OnFocused</code> and <code>OnUnfocused</code> through the interface,
          then broadcasts <code>OnFocusedInteractableChanged</code> so the HUD can update. An early-out
          prevents redundant broadcasts when focus hasn't changed between frames.
        </p>

        <figure class="torch-figure torch-code-figure">
          <pre class="torch-code-block"><code>
  void UInteractorComponent::SetFocusedInteractable(UInteractableComponent* NewInteractable)
  {
    <span class="code-comment">// Disregard if focus hasn't changed — avoids redundant delegate broadcasts.</span>
    if (NewInteractable == FocusedInteractable) return;

    <span class="code-comment">// Notify the previous interactable that it has lost focus.</span>
    if (FocusedInteractable)
    {
    IInteractable::Execute_OnUnfocused(FocusedInteractable, GetOwner());
    }

    FocusedInteractable = NewInteractable;

    <span class="code-comment">// Notify the new interactable that it has gained focus.</span>
    if (FocusedInteractable)
    {
    IInteractable::Execute_OnFocused(FocusedInteractable, GetOwner());
    }

    <span class="code-comment">// Notify external listeners that the focused interactable has changed.</span>
    OnFocusedInteractableChanged.Broadcast(FocusedInteractable);
  }
          </code></pre>
        </figure>
      </section>

      <!-- Blueprint Integration -->
      <section class="torch-section" id="blueprint-integration">
        <h2>Blueprint Integration</h2>

        <p>
          While the core logic lives in C++, the work of wiring objects together and
          tuning behavior happens in Blueprint. All of the interaction entry points are exposed as
          BlueprintImplementable or BlueprintNative events, so designers can extend behavior
          without touching code.
        </p>

        <h3>Example Interaction Setup</h3>

        <h4>Player Character Setup</h4>

        <p>
          On the Character Blueprint, two input actions are bound to the interactor component's callable functions:
        </p>

        <figure class="torch-figure">
          <img src="/InteractInput.png"
               alt="Blueprint graph showing IA_Interact -> InteractorComponent -> TryInteract"
               class="torch-figure-image" />

          <img src="/ActionInput.png"
               alt="Blueprint graph showing IA_Action -> InteractorComponent -> TryAction"
               class="torch-figure-image" />

          <figcaption class="torch-figure-caption">
            Notably, the Try Interact and Try Action calls are only made if the player's current state is acceptable.
            The player state check ensures that the player isn't performing unwanted interacts or actions during other states.
            For example, the player can't be jumping and start performing an action, but if the player is interacting with something,
            then a jumping state is acceptable.
          </figcaption>
        </figure>

        <h4>Interactable Actors</h4>

        <p>
          Each interactable actor has an <code>InteractableComponent</code> with an interaction interface, toggleable input, and optional
          gameplay tags that define requirements. Blueprint graphs implement what happens when the
          interaction fires—often branching on tags or internal state to play the correct animation or
          spawn effects.
        </p>

        <table class="torch-table">
          <thead>
            <tr>
              <th>Actor</th>
              <th>Interact</th>
              <th>Action</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>BP_Brazier</code></td>
              <td>Consume wood from inventory; fill brazier.</td>
              <td>Ignite brazier; set checkpoint.</td>
              <td>Checks for required fuel and torch tool before allowing interact and action.</td>
            </tr>
            <tr>
              <td><code>BP_ToolPickup</code></td>
              <td>Pickup tool and add to inventory; update HUD.</td>
              <td>N/A</td>
              <td>Fully Blueprint‑driven; no C++ changes needed for new tool types.</td>
            </tr>
            <tr>
              <td><code>BP_ItemPickup</code></td>
              <td>Pickup item(s) and add to inventory; update HUD.</td>
              <td>N/A</td>
              <td>Only picks up item(s) if there is room in the inventory.</td>
            </tr>
            <tr>
              <td><code>BP_Ladder</code></td>
              <td>Climb Up or Down</td>
              <td>N/A</td>
              <td>Teleports the player to the top or bottom of the ladder according to furthest distance.</td>
            </tr>
            <tr>
              <td><code>BP_BrokenBridge</code></td>
              <td>Fix Bridge</td>
              <td>N/A</td>
              <td>Fixes the bridge if the player has enough logs.</td>
            </tr>
            <tr>
              <td><code>BP_Tree</code></td>
              <td>N/A</td>
              <td>Chop Tree</td>
              <td>Checks for axe tool before allowing action.</td>
            </tr>
            <tr>
              <td><code>BP_DigSpot</code></td>
              <td>N/A</td>
              <td>Dig</td>
              <td>Checks for shovel tool before allowing action.</td>
            </tr>
          </tbody>
        </table>

        <figure class="torch-figure">
          <img src="/BrazierOnInteract.png"
               alt="Blueprint graph showing Brazier's OnInteracted Wiring"
               class="torch-figure-image" />

          <img src="/BrazierOnAction.png"
               alt="Blueprint graph showing Brazier's OnActioned Wiring"
               class="torch-figure-image" />

          <figcaption class="torch-figure-caption">
            Notably, the OnInteracted, upon filling the brazier, sets bIsActionable equal to true.
            This makes it a requirement for the brazier to be filled, before it can receive an OnActioned call.
          </figcaption>
        </figure>
      </section>

      <!-- Debug Tooling -->
      <section class="torch-section" id="debug-tooling">
        <h2>Debug Tooling</h2>
        <p>
          I built lightweight debug views on top of Unreal’s existing tools so I could see exactly
          what the interaction system thought was happening, and how it was interacting with other systems.
          This was essential once there were many interactables in the scene and multiple overlapping rules and systems.
        </p>

        <!-- Interaction Trace & Focus -->
        <h3>Interaction Trace & Focus</h3>

        <p>
          The interactor performs a sphere sweep each tick from the camera along the look direction using
          a custom interaction trace channel, then anchors the end point to the character’s world
          location so interaction range stays consistent regardless of camera zoom. This debug visualization
          tool provides a way to immediately see the interaction system at work.
        </p>

        <figure class="torch-figure">
          <div class="torch-figure-grid">
            <img src="/TraceHitTrue.png"
                 alt="Interaction trace debug visualization with a valid hit"
                 class="torch-figure-image" />
            <img src="/TraceHitFalse.png"
                 alt="Interaction trace debug visualization with no valid hit"
                 class="torch-figure-image" />
          </div>

          <figcaption class="torch-figure-caption">
            <strong>Trace Debug Visualization - Line, Sphere, & Impact Normal.</strong>
            The trace is shown hitting an interactable and hitting no interactable.
          </figcaption>
        </figure>

        <figure class="torch-figure">
          <div class="torch-figure-grid">
            <img src="/TraceHitTrueZoomedOut.png"
                 alt="Interaction trace debug visualization with a valid hit from a zoomed-out camera"
                 class="torch-figure-image" />
            <img src="/TraceHitFalseZoomedOut.png"
                 alt="Interaction trace debug visualization with no valid hit from a zoomed-out camera"
                 class="torch-figure-image" />
          </div>

          <figcaption class="torch-figure-caption">
            <strong>Trace Debug Visualization - Line & Impact Point.</strong>
            The trace is shown hitting an interactable and hitting no interactable from a zoomed-out camera perspective. The interaction radius from the player character stays consistent.
          </figcaption>
        </figure>

        <h3>Logging & Gameplay Debugger</h3>

        <p>
          I created a Logging & Gameplay Debugger widget which allowed me to see the systems at work. Combined with
          the trace debug visualization tool, debugging is comprehensive and allows for quick iteration and testing.
        </p>

        <figure class="torch-figure">
          <div class="torch-figure-grid">
            <img src="/GameplayDebuggerTraceHit.png"
                 alt="Debugger Widget showing an item trace hit"
                 class="debugger-figure-image" />

            <img src="/GameplayDebuggerChopping.png"
                 alt="Debugger Widget showing a tree hit while in the chopping state"
                 class="debugger-figure-image" />
          </div>

          <img src="/GameplayDebuggerInventory.png"
               alt="Debugger Widget showing inventory log and inventory widget"
               class="debugger-figure-image" />

          <figcaption class="torch-figure-caption">
            The debugger widget helps pinpoint problems in the systems and their interactions.
            It shows the trace hit result alongside the player state and inventory.
            In the second image, the debugger shows the Interactable Actor: None.
            This might seem incorrect at first when comparing it to the trace hit result Actor: Tree.
            However, the player state is currently Chopping. In the tree chopping logic, it is set to not
            be interactable while the player is in the middle of chopping it. 
          </figcaption>
        </figure>
      </section>

      <!-- Key Design Decisions -->
      <section class="torch-section" id="key-decisions">
        <h2>Key Design Decisions</h2>
        <p>
          The main trade‑offs were between flexibility and complexity. I leaned on interfaces and
          components over inheritance so the system could grow horizontally—more actors, more
          behaviors—without interaction class hierarchies.
        </p>
        <ul class="torch-list">
          <li>Use a component + interface pattern instead of a monolithic “interactable” base class.</li>
          <li>Keep the player character agnostic: it knows how to ask, but not what each object does.</li>
          <li>Expose all authoring‑critical settings as Blueprint‑editable properties.</li>
        </ul>
      </section>

      <!-- Results & Takeaways -->
      <section class="torch-section" id="results">
        <h2>Results &amp; Takeaways</h2>
        <p>
          With the interaction framework in place, adding new world objects became mostly a content
          problem instead of a code problem. I could prototype new interactions in minutes, and
          the same system now supports items, tools, inventory, braziers, and resource nodes without
          forking the character code.
        </p>
        <p>
          The biggest lesson was that even small prototypes benefit from clear boundaries between
          input, detection, and execution. By investing in a simple but well‑defined interaction
          layer, the rest of the game’s features became easier to reason about, debug, and extend.
        </p>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
  .torch-header-center {
    padding-top: 0.5rem;
    flex: 1;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
    margin: 0;
    color: #ffffff;
  }

  .torch-interaction-page {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .torch-interaction-header {
    text-align: center;
    margin: 0;
  }

  .torch-interaction-title {
    margin: 0;
    font-size: 2rem;
    font-weight: 600;
    color: #ffffff;
  }

  .torch-interaction-tags {
    margin: 0.2rem 0 1.0rem;
    font-size: 1.0rem;
    letter-spacing: 0.10em;
    text-transform: uppercase;
    color: #aeb5d0;
  }

  .torch-interaction-content {
    max-width: 960px;
    margin: 0 auto;
    padding: 1.5rem 1.25rem 3rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .torch-section h2 {
    margin: 0 0 0.75rem;
    font-size: 1.3rem;
    font-weight: 600;
    color: #ffffff;
  }

  .torch-section h3 {
    margin: 1.25rem 0 0.5rem;
    font-size: 1.1rem;
    font-weight: 550;
    color: #c5d0fc;
  }

  .torch-section h4 {
    margin: 1rem 0 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: #f5d1a5;
  }

  .torch-section p {
    margin: 0 0 0.75rem;
    font-size: 0.95rem;
    line-height: 1.5;
    color: #dddfe8;
  }

  .torch-list {
    margin: 0.25rem 0 0;
    padding-left: 1.1rem;
    color: #dddfe8;
    font-size: 0.96rem;
    line-height: 1.6;
  }

  /* Tables */
  .torch-table {
    width: 100%;
    border-collapse: collapse;
    margin: 0.75rem 0 1.25rem;
    font-size: 0.9rem;
  }

    .torch-table th,
    .torch-table td {
      border: 1px solid rgba(255, 255, 255, 0.15);
      padding: 0.5rem 0.6rem;
      text-align: left;
      vertical-align: top;
    }

    .torch-table th {
      background: rgba(255, 255, 255, 0.04);
      font-weight: 500;
      color: #ffffff;
    }

    .torch-table tr:nth-child(even) td {
      background: rgba(255, 255, 255, 0.02);
    }

    .torch-table code {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }


  .torch-section th,
  .torch-section td {
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 0.5rem 0.6rem;
    text-align: left;
  }

  .torch-section th {
    background: rgba(255, 255, 255, 0.04);
    font-weight: 500;
    color: #ffffff;
  }

  .torch-section tr:nth-child(even) td {
    background: rgba(255, 255, 255, 0.02);
  }

  .torch-figure {
    margin: 1rem 0 1.25rem;
    padding: 0.75rem;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  .torch-code-block {
    margin: 0;
    padding: 0.75rem 0.9rem;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.9);
    overflow-x: auto;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 0.85rem;
    line-height: 1.5;
    color: #f5f5f5;
  }

    .torch-code-block code {
      white-space: pre;
    }

  .code-comment {
    color: #7dd87d;
    opacity: 0.9;
  }


  .torch-figure-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.5rem;
  }

  .torch-figure-image {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
    border-radius: 8px;
  }

  .debugger-figure-image {
    width: 100%;
    height: 420px;
    object-fit: contain;
    display: block;
    border-radius: 8px;
  }

  .torch-figure-caption {
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: 350;
    line-height: 1.3;
    color: #dddfe8;
  }

  .torch-back {
    max-width: 960px;
    padding: 0.5rem 0 0 0;
  }

  @media (min-width: 1024px) {
    .torch-figure-image {
      height: 260px;
    }
    .debugger-figure-image {
      height: 480px;
    }
  }

  @media (max-width: 700px) {
    .torch-figure-grid {
      grid-template-columns: 1fr; /* stack on narrow screens */
    }
  }
</style>
