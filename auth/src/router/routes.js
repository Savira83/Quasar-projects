const routes = [{
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/LogIn',
        component: () => import('pages/LogIn.vue')
      },
      {
        path: '/SignUp',
        component: () => import('pages/SignUp.vue')
      },
      {
        path: '/NewFile',
        component: () => import('pages/NewFile.vue')
      },
      {
        path: '/MyPage',
        component: () => import('pages/MyPage.vue')
      },
      {
        path: '/ErrorPage',
        component: () => import('pages/ErrorPage.vue')
      },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes