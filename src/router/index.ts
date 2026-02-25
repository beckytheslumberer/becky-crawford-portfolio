import { createRouter, createWebHashHistory } from 'vue-router'
import WorkView from '../views/WorkView.vue'
import MusicView from '../views/MusicView.vue'
import AboutView from '../views/AboutView.vue'
import ResumeView from '../views/ResumeView.vue'
import ModelingView from '../views/ModelingView.vue'
import TorchView from '@/views/TorchView.vue'
import BunnyWunnyView from '@/views/BunnyWunnyView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'work',
      component: WorkView,
      meta: { title: 'Becky Crawford - Work' }
    },
    {
      path: '/music',
      name: 'music',
      component: MusicView,
      meta: { title: 'Becky Crawford - Music' }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { title: 'Becky Crawford - About' }
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView,
      meta: { title: 'Becky Crawford - Resume' }
    },
    {
      path: '/modeling',
      name: 'modeling',
      component: ModelingView,
      meta: { title: 'Becky Crawford - Modeling' }
    },
    {
      path: '/torch',
      name: 'torch',
      component: TorchView,
      meta: { title: 'Becky Crawford - Torch' }
    },
    {
      path: '/bunnywunny',
      name: 'bunnywunny',
      component: BunnyWunnyView,
      meta: { title: 'Becky Crawford - Bunny and Wunny Escape!' }
    },
  ],
})

router.afterEach((to) => {
  const base = 'Becky Crawford'
  if (to.meta.title) {
    document.title = String(to.meta.title)
  } else {
    document.title = base
  }
})

export default router
