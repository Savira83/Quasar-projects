<template>
    <form   @submit.prevent="handleSubmit">
        <h3>Sign up</h3>
        <div clas="form-group">
            <label>First Name</label>
            <input type="text" v-model="first_name" placeholder="First Name">
        </div>
        <div clas="form-group">
            <label>Last Name</label>
            <input type="text" v-model="last_name" placeholder="Last Name">
        </div>
        <div clas="form-group">
            <label>Email</label>
            <input type="email" v-model="email" placeholder="email">
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" v-model="password" placeholder="Password">
        </div>
        <button> Sign Up</button>
    </form>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'NewRegistration',
    data() {
        return {
            first_name: '',
            last_name: '',
            email: '',
            password: '',  
        }
    },
    methods: {
        ...mapActions([ 'register' ]),

        handleSubmit() {
            let user = {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                password: this.password,
            }
            this.register(user)
            this.first_name = ''
            this.last_name = ''
            this.email = ''
            this.password = ''
            this.$router.push("/HomePage")
           
        }

    }
   } 
</script>