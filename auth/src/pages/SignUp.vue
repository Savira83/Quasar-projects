<template>
	  <q-form
      @submit="registration"
      class="q-gutter-md"
    >
     <q-input
        filled
        type="text"
        v-model="first_name"
        label="First Name"
      />
       <q-input
        filled
        type="text"
        v-model="last_name"
        label="Last Name"
      />
      <q-input
        filled
        type="e-mail"
        v-model="email"
        label="e-mail"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="password"  
      />
      <div>
        <q-btn label="Sign Up" type="login" color="primary"/>
      </div>
   </q-form>
  
</template>
<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { mapActions } from 'vuex'

export default {
  name:'SignUp',
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
        registration () {
            let data = {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                password: this.password,
            }
        this.register(data)
       .then(() => this.$router.push('/'))
       .catch(err => console.log(err))
      }
    }


}
</script>