<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <router-link to ="/NewRegistration">Sign Up</router-link>
  <br/>
  <router-link to ="/LogIn">Login</router-link>
  <router-view></router-view>
</template>

<script>
// import NewRegistration from './components/NewRegistration.vue'

export default {
  name: 'App',
  components: {
    // NewRegistration
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
