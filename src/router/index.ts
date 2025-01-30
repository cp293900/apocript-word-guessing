import { createRouter, createWebHashHistory } from 'vue-router'
import HelloView from '@/layouts/HelloView.vue'
// import DefaultLayout from '@/layouts/DefaultLayout.vue'
import apocriptRoutes from '@/router/modules/apocript'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/aaa',
      name: 'helloView',
      component: HelloView,
      children: [
        {
          path: '',
          name: 'home',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/views/HomeView.vue'),
        },
        {
          path: 'about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/views/AboutView.vue'),
        },
      ],
    },
    // {
    //   path: '/apocript',
    //   name: 'apocript',
    //   component: DefaultLayout,
    //   children: [
    //     {
    //       path: '',
    //       name: 'index',
    //       component: () => import('@/views/apocript/IndexView.vue'),
    //     },
    //   ],
    // },
    apocriptRoutes,
  ],
})

export default router
