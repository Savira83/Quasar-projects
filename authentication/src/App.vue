<template>
    <div v-if="logIn" >
    <router-link to="/MyPage"></router-link>
    </div>
    <!-- <button @click='isLogged'></button> -->
    <router-link to="/"></router-link>
 
    <router-view></router-view>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'App',
    computed:{
        ...mapGetters(['logIn'])
    }, 
    methods:{
        ...mapActions(['getUser']),
        // isLogged(){
        //      let id = this.logIn()
        //     console.log(id)
        // }
    }, 
    mounted() {
        this.getUser()
    },
  }
</script>

<style>
</style>