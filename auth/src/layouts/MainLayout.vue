<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          My form
        </q-toolbar-title>
        <q-list class="row ">
        <q-item class="q-mr-sm" to="/LogIn" exact>
          LogIn
        </q-item>
        <q-item class="q-mr-sm" to="/SignUp" exact>
          Sign Up
        </q-item>
        </q-list>
      </q-toolbar>
      
    </q-header>

    <q-page-container>
      
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          
          
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
    <router-view />

  </q-layout>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { mapGetters, mapActions } from 'vuex'



export default defineComponent({
  name: 'MainLayout',

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
})

</script>