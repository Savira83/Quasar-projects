<template>
    <form @submit.prevent="logIn">
        <h3>login</h3>
        <div clas="form-group">
            <label>Email</label>
            <input type="email" v-model="email" placeholder="Email">
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" v-model="password" placeholder="Password">
        </div>
        
        <div v-if = "status ==='error'"> {{login_error}} </div>
        <button> Sign in</button>
       
    </form>
</template>
<script>
import { mapActions } from 'vuex'
import { mapState } from 'vuex'

export default {
    name: 'LogIn',
    data() {
        return {
            
            email: '',
            password: ''
        }
    },
    computed:{
        ...mapState(['status', 'login_error'])
    },
    methods: {
        ...mapActions([ 'login' ]),
        logIn() {
            let data ={ 
                email: this.email,
                password: this.password}
        this.login(data) 
       // .then((resp) =>{
       //  if(resp.status == 200){
       //  this.$router.push('/MyPage')
       //  }
       // })
       .catch(err => console.log(err))
      }

    }
}
</script>