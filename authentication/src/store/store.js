import { createStore } from 'vuex'
import axios from 'axios'
// axios.defaults.headers.post['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`

const store = createStore({
    state: {
        login_error: '',
        token: localStorage.getItem('accessToken'),
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
        login({ commit }, data) {
            axios
                .post('http://localhost:3000/login', data)
                .then(resp => {
                    // if (data.accessToken)
                    const token = resp.data.accessToken
                    const user = resp.data.user
                    localStorage.setItem('token', token)

                    commit('auth_success', token, user)
                    console.log(resp)

                })
                .catch(err => {
                    // debugger
                    commit('auth_error', err)
                    localStorage.removeItem('accessToken')

                })

        },
        logout({ commit }) {

            commit('logout')
            localStorage.removeItem('accessToken')
            delete axios.defaults.headers.common['Authorization']

        }


    },
    mutations: {

        auth_success(state, token, user) {
            state.status = 'success'
            state.token = token
            state.user = user
            // console.log(state)
        },
        auth_error(state, err) {
            console.log(err)
            state.status = 'error'
            state.login_error = err.response.data
            console.log(state.login_error)
        },
        logout(state) {
            state.status = ''
            state.token = ''
        },



    },

})

export default store;