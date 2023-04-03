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
          path: '/',
          name: 'Home',
          alias: '/home',
          component: () => import('../views/HomeView.vue'),
          meta: { roles: [ 'admin', 'user' ] }
        },
        {
          path: '/about',
          name: 'About',
          component: () => import('../views/AboutView.vue'),
          meta: { roles: [ 'admin', 'user' ] }
        },
        {
          path: '/products',
          name: 'Products',
          component: () => import('../views/Products/PProducts.vue'),
          meta: { roles: [ 'admin', 'user' ] }
        },
        {
          path: '/products/:ProductId(\\d+)',
          name: 'ProductSingle',
          component: () => import('../views/Products/PProductSingle.vue'),
          meta: { roles: [ 'admin' ] }
        },
        { path: '/user-:afterUser(.*)',
          name: 'User',
          component: () => import('../views/User/PUserInfo.vue'),
          meta: { roles: [ 'admin' ] }
        },
      ]
    },
    {
      path: '/login', // 404
      name: 'Login',
      component: () => import('../views/Login/PLogin.vue')
    },
    // {
    //     path: '/:pathMatch(.*)*', // 404
    //     name: 'NotFound',
    //     component: () => import('../views/NotFound.vue')
    // }

  ]
})
router.beforeEach((to, from, next) => {
  const userRole = 'admin'
    if (to.meta.roles && !to.meta.roles.includes(userRole)) {
        next({ name: 'Login' })
        return;
    }
  next()
  return;
})

export default router
