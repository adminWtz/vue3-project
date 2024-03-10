import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: '/',
  routers: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Root.vue'),
      redirect: { name: Pages.discover },
    }
  ]
})