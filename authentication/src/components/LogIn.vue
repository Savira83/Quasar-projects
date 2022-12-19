<template>
    <form @submit.prevent="handlSignIn">
        <h3>login</h3>
        <div clas="form-group">
            <label>Email</label>
            <input type="email" v-model="login" placeholder="Email">
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" v-model="password" placeholder="Password">
        </div>
        <button> Sign in</button>
    </form>
</template>
<script>
export default {
    name: 'LogIn',
    data() {
        return {
            login: '',
            password: ''
        }
    },
    methods: {
        handlSignIn() {

        }

    }
}
</script>