import {createRouter, createWebHistory} from 'vue-router'
import NewRegistration from './components/NewRegistration.vue'
import LogIn from './components/LogIn.vue'
import HomePage from './components/HomePage.vue'
import MyPage from './components/MyPage.vue'
import ErrorPage from './components/ErrorPage.vue'



const router =createRouter({
	history: createWebHistory(),
	routes:[
		{path: '/', name:'home', component: HomePage},
		{path: '/NewRegistration', name:'registration', component: NewRegistration},
		{path: '/LogIn', name:'login', component: LogIn},
		{path: '/MyPage', name:'myPage', component: MyPage},
		{path: '/ErrorPage', name:'ErrorPage', component: ErrorPage}
	
		]
	
})

export default router