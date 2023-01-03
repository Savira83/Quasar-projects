<template>
    <router-link to="/MyPage"> </router-link>
    <router-link to="/"></router-link>
    <router-view></router-view>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'App',
    computed: {
        ...mapGetters(['isId'])
    },
    methods: {
        ...mapActions(['getUser']),
    },
    mounted() {
        this.getUser()
        console.log(this.isId)
        if (this.isId) {
            this.$router.push("/MyPage")
        }
    },
}
</script>
<style>
</style>