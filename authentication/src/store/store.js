import { createStore} from 'vuex'
import axios from 'axios'

const store = createStore({
	state:{
		users:[]
	},
	actions:{
		register({commit}, user){
            axios
                .post('http://localhost:3000/users', user)
                .then(response => {
                    commit('NEW_USER_ReGISTER_DATA', response.user)
                })
        },

	},
	mutations:{
		NEW_USER_ReGISTER_DATA(state, user) {
            this.state.users.user = state.users.push(user)
            


        },

	}
})

export default store;