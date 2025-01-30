import DefaultLayout from '@/layouts/DefaultLayout.vue'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/apocript',
  name: 'apocript',
  component: DefaultLayout,
  children: [
    {
      path: '',
      name: 'index',
      component: () => import('@/views/apocript/IndexView.vue'),
    },
  ],
}

export default routes
