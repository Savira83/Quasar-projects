import { createStore } from 'vuex'
import axios from 'axios'
// axios.defaults.headers.post['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`

const store = createStore({
    state: {
        users:[],
        login_error: '',
        token: localStorage.getItem('token'),
        id: localStorage.getItem('id') || '',
        user: {},
        status: ''

    },
    actions: {
        register({ commit }, data) {
            axios
                .post('http://localhost:3000/register', data)
                .then(resp => {
                    commit('auth_success', resp.data)
                    // console.log(resp)

                })
            // .catch(err => {
            //     commit('auth_error', err)
            //     localStorage.removeItem('token')

            // })
        },
        login({ commit, dispatch}, data) {
            dispatch('getUser')
            return new Promise((resolve, reject) => {
            

                axios
                    .post('http://localhost:3000/login', data)
                    .then(resp => {
                        // if (data.accessToken)
                        const token = resp.data.accessToken
                        const id = resp.data.user.id
                        const user = resp.data.user
                        localStorage.setItem('token', token)
                        localStorage.setItem('id', id)
                        commit('auth_success', {token, user, id})
                        resolve(resp)
                        // console.log(resp)
                    })
                    .catch(err => {
                        commit('auth_error', err)
                        localStorage.removeItem('token')
                        reject(err)
                        // console.log(err)
                    })
            })
        },
        logout({ commit}) {
            commit('log_out')
            localStorage.removeItem('token')
            localStorage.removeItem('id')

            delete axios.defaults.headers.common['Authorization']
        },
        getUser({commit, getters}){
            let id = getters.isLoggedIn
            axios
            .get(`http://localhost:3000/users/${id}`)
            .then(resp=>{
                commit('set_user', resp.data)
              console.log(resp.data)
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
            // console.log(err)
            state.status = 'error'
            state.login_error = err.response.data
            // console.log(state.login_error)
        },
        log_out(state) {
            state.status = ''
            state.token = ''
            state.id = ''

        },
         set_user(state, user) {
           
            state.users = user;
        },

    },
     getters:{
 
        isLoggedIn(state){
             
            return  state.id
         // console.log(state.id)

        },
        logIn(state){
            return state.id !==null
        },
        getUser(state){
            return  state.user
    }
}

})

export default store;