<template>
  <div class="fix bg-purple-3-blue-grey-4" >
    <q-img class="absolute-full" src="images/flower.webp" />
    <q-card class=" sign-form q-pa-none fixed-center bg-grey-1" style="max-width: 400px; height: 420px; width: 280px">
      <q-form @submit.prevent="logIn"  class="qolumn q-pa-md shadow-2 auth-form row item-center justify-center">
        <div class="text-center text-h5 bg-secondary q-pa-md " style="height:60px; width: 416px">Sign in</div>
        <q-input filled v-model="email" label="e-mail" class=" q-mt-lg q-mb-md bg-accent" style="height:60px; width: 416px" />
        <q-input filled type="password" v-model="password" label="password" class="q-mb-lg q-mt-md" style="height:60px; width: 416px" />
        <div class="q-pa-xl just
        ify-center">
          <q-btn label="Sign in" type="submit" class="sign-btn" color="primary" />
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