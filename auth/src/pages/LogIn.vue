<template>
  <div class="fix">
    <q-img class="absolute-full" src="images/flower.webp" />
    <q-card class="q-pa-none fixed-center bg-grey-1 rounded" style="max-width: 400px; height: 420px; width: 280px">
      
      <q-form
         @submit="logIn" @reset="onReset" 
          class="qolumn q-pa-md shadow-2 auth-form row item-center justify-center">

        <div class="text-center text-h5 bg-secondary q-pa-md " style="height:60px; width: 416px">Sign in</div>

        <q-input filled 
          v-model="email" label="e-mail" 
          class=" q-mt-lg q-mb-md bg-accent" 
          style="height:60px; width: 416px"/>

        <q-input filled 
         type="password" 
         v-model="password" label="password" 
          class="q-mb-lg q-mt-md" 
         style="height:60px; width: 416px" />

        <div class="q-pa-xl justify-center">
          <q-btn 
          label="Sign in" 
          type="submit" 
          color="primary" 
          style="width: 150px" />
        </div>
      </q-form>
    </q-card>
  </div>
</template>
<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { mapActions, mapState } from 'vuex'


export default {
  name: 'LogIn',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    ...mapState(['status', 'login_error'])
  },
  methods: {
    ...mapActions(['login']),
    logIn() {
      let data = {
        email: this.email,
        password: this.password
      }
      this.login(data)
        .then((resp) => {
          console.log(resp)
          if (resp.status === 200) {
            this.$router.push('/MyPage')
          }
        })
        .catch(err => {
          console.log(err)
          if (err) {
            this.$router.push('/ErrorPage')
          }
        })
    }
  }

}

</script>
