<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-primary text-white" style="height:70px">
      <q-toolbar>
        <q-toolbar-title>
          My form
        </q-toolbar-title>
        <div>
        <q-list v-show="!isId" class="row ">
          <q-item class="q-mr-sm" to="/NewFile" exact>
          New File
        </q-item>
        <q-item class="q-mr-sm" to="/LogIn" exact>
          LogIn
        </q-item>
        <q-item  class="q-mr-sm" to="/SignUp" exact>
          Sign Up
        </q-item>
        </q-list>

        <q-list v-show="isId" class="row ">
          
          <img class="icon-picture q-xl-none q-mx-none q-mt-sm  " src="images/iryna1.jpg" alt="Beautiful photo"  />
       
          <q-item class="q-mx-none q-px-sm q-pt-md">
          {{user.user_name}}
        </q-item>
        <q-item clickable v-ripple  @click="LogOut" class="q-ml-none q-pl-none q-pt-md">
          Logout
      </q-item>
      </q-list>
      </div>
        
        
      </q-toolbar>
    </q-header>

    <q-page-container class="q-pt-none q-ma-auto">

    <router-view />
      
    </q-page-container>

    <q-footer reveal elevated class="bg-primary text-white" style="height:70px">
      <q-toolbar>
        <q-toolbar-title>
          
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
   

  </q-layout>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { mapGetters, mapActions, mapState } from 'vuex'
export default defineComponent({
  name: 'MainLayout',
  computed: {
    ...mapGetters(['isId']),
    ...mapState(['user']),
    
  },
  methods: {
    ...mapActions(['getUser']),
    ...mapActions(['logout']),
    LogOut(){
      this.logout()
      this.$router.push('/')
    }
  },
  mounted() {
    this.getUser()
    console.log(this.isId)
    if (this.isId) {
      this.$router.push("/MyPage")
    }
  },
})
</script>