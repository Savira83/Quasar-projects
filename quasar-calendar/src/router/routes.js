
const routes = [{
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/myDepartment.vue') },
      { path: '/help', component: () => import('pages/myHelp.vue') },
      { path: '/buttons', name: 'Buttons', component: () => import('pages/myButtons') },
       { path: '/calendar', name: 'Calendar', component: () => import('pages/myCalendar') }
    ],
  },
  {path: '/addNewTask', name:'newTask', component:()=>import('pages/addTask.vue')},
  {path: '/inputForm', name: 'inputForm', component:()=> import('components/inputForm.vue')}
     ,


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
