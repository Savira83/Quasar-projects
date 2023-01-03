import { createStore } from 'vuex'
import axios from 'axios'
import AuthService from '../services/auth.service.js'


const store = createStore({
    state: {
        
        login_error: '',
        token: localStorage.getItem('token'),
        id: localStorage.getItem('id') || '',
        user: {},
        status: ''

    },
    actions: {
        register({ commit }, resp) {
            AuthService.register(resp)
            .then(resp=>{
                commit('auth_success', resp.data)
            })
             .catch(err => {
                commit('auth_error', err)
                localStorage.removeItem('token')
            })
        },
        login({commit}, resp) {
             return new Promise((resolve, reject) => {
              AuthService.login(resp)
              // console.log(resp)
                .then( resp=>{
                   commit('auth_success', resp.data)
                   resolve(resp)})
                   .catch( err=>{
                        commit('auth_error', err);
                        console.log(err)
                         reject(err)
                    })
                 })
        },
        logout({ commit}) {
            AuthService.logout()
            commit('log_out') 
        },
        getUser({commit, getters}){
            let id = getters.userId
            axios
            .get(`http://localhost:3000/users/${id}`)
            .then(resp=>{
                commit('set_user', resp.data)
              console.log(resp.data)
            })
              .catch(err => {
                 commit('auth_error', err)
                    })
        }
    },
    mutations: {

        auth_success(state, {token, user, id}) {
            state.status = 'success'
            state.token = token
            state.id = id
            state.user = user
            // console.log(state)
        },
        auth_error(state, err) {
            console.log(err)
            state.status = 'error'
            state.login_error = err.response.data
            console.log(state.login_error)
        },
        log_out(state) {
            state.status = ''
            state.token = ''
            state.id = ''
            state.user=''

        },
         set_user(state, user) {
            state.user = user;
        },

    },
     getters:{
        userId(state){
            return  state.id
         // console.log(state.id)
        },
        isId(state){
            return !!state.id
             // !==null does't work
        },
        getUserInfo(state){
            return  state.user
    }
}

})

export default store;