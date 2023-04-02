import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Default',
      component: () => import('@/layouts/LDefault.vue'),
      redirect: { name: 'Home' },
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/about',
          name: 'About',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/products',
          name: 'Products',
          component: () => import('../views/Products/PProducts.vue')
        },
        {
          path: '/products/:ProductId',
          name: 'ProductSingle',
          component: () => import('../views/Products/PProductSingle.vue')
        },
        { path: '/user-:afterUser(.*)',
          name: 'User',
          component: () => import('../views/User/PUserInfo.vue')
        },
      ]
    },
    // {
    //     path: '/:pathMatch(.*)*', // 404
    //     name: 'NotFound',
    //     component: () => import('../views/NotFound.vue')
    // }

  ]
})
router.beforeEach((to, from, next) => {
  // ...
  // explicitly return false to cancel the navigation
  next()
  return;
})

export default router
