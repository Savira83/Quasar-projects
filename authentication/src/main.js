import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store/store.js'

// Vue.prototype.$http = Axios

// const token = localStorage.getItem('token')
// if (token) {
//   Vue.prototype.$http.defaults.headers.common['Authorization'] = token
// }

const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')
