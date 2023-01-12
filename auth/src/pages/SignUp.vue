<template>
    <div class="fix">
    <q-img class="absolute-full" src="images/flower.webp" />
    
    <q-card
         flat bordered class ="my-card q-pa-none fixed-center bg-grey-1 rounded" 
         style="max-width: 400px; height: 420px; width: 280px">
	  <q-form
      @submit="registration"
       class="  qolumn q-pa-md shadow-2 auth-form row item-center justify-center"
    >
    <div class="text-center text-h5 bg-secondary q-pa-md " style="height:60px; width: 416px">Sign up</div>
     <q-input
        filled
        type="text"
        v-model="first_name"
        label="First Name"
        class=" q-mt-lg q-mb-md bg-accent" 
        style="height:60px; width: 416px"
      />
       <q-input
        filled
        type="text"
        v-model="last_name"

        label="Last Name"
         class=" q-mt-lg q-mb-md bg-accent" 
        style="height:60px; width: 416px"
      />
      <q-input
        filled
        type="text"
        v-model="user_name"
        label="UserName"
         class=" q-mt-lg q-mb-md bg-accent" 
        style="height:60px; width: 416px"
      />
      <q-input
        filled
        type="e-mail"
        v-model="email"
        label="e-mail"
        lazy-rules :rules="[ val => val && val.length > 0 || 'Please type e-mail']" 
         class=" q-mt-lg q-mb-md bg-accent" 
        style="height:60px; width: 416px"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="password" 
         class=" q-mt-lg q-mb-md bg-accent" 
        style="height:60px; width: 416px" 
      />
      <div>
        <q-btn label="Sign Up" 
        type="login"
         color="primary"
         style="width: 150px"/>
      </div>
   </q-form>
    </q-card>

   </div>
  
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
            user_name:'',
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
                user_name: this.user_name,
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