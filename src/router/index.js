import { createRouter, createWebHistory } from 'vue-router'
import Task_list from '../views/Task_list.vue'
import Home from '../views/Home.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/tasklist',
      name: 'tasklist',
      component: Task_list,
    },
     {
      path: '/taskform/',
      name: 'taskform',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Task_form.vue'),
    }, 
  ],
})

export default router
