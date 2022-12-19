import {createRouter, createWebHistory} from 'vue-router'
import NewRegistration from './components/NewRegistration.vue'
import LogIn from './components/LogIn.vue'
import HomePage from './components/HomePage.vue'

const router =createRouter({
	history: createWebHistory(),
	routes:[
		{path: '/NewRegistration', name:'registration', component: NewRegistration},
		{path: '/LogIn', name:'login', component: LogIn},
		{path: '/HomePage', name:'home', component: HomePage},

	
		]
	
})

export default router