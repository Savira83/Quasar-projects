<template>
   
    <div class="bg-success p-1" style="bs-bg-opacity: .5;">
    <q-img src="images/pink.jpg"/>
    </div>
      
      <div  class="q-pa-none fixed-center bg-grey-1 rounded" style="max-width: 400px; height: 400px; width: 230px">
        <div style="border-radius: 30px">

    <q-form
      @submit="logIn"
      @reset="onReset"
      class="q-gutter-md rounded filled"
      
    >
    <div class="text-center text-h5 bg-blue-grey-2 q-pa-md " style="height:60px; max-width: 400px">Sign in</div>
      <q-input
        filled
        v-model="email"
        label="e-mail"
        hint="Your e-mail and password"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type e-mail']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="password"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your password',
          val => val > 0 && val < 100 || 'Please typ'
        ]"
        class="q-mb-lg"
      />

      <div class="q-pa-xl justify-center">
        <q-btn label="Sign in" type="submit" color="primary"/>
      </div>
    </q-form>
    </div>
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
