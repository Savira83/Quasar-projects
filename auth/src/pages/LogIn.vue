<template>
   
    <div class="bg-success p-1" style="--bs-bg-opacity: .5;">
    <q-img src="images/pink.jpg"/>
    </div>
 
   <div class="absolute-center text-center">
  <q-form @submit.prevent="logIn" class="q-gutter-md">
    <section class="vh-100" style="background-color: #e6e6fa;">
      <div class="w-30 p-3" >
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-12 col-lg-12 col-xl-12">
            <div class="card shadow-2-strong" style="border-radius: 1rem;">
              <div class="card-body p-5 text-center">
                <h3 class="mb-5">Sign in</h3>

                <div class="form-outline mb-4">
                  <q-input filled type="email" id="typeEmailX-2" v-model="email" class="form-control form-control-lg" label="e-mail" />
              </div>

            <div class="form-outline mb-4">
                  <q-input filled type="password" id="typePasswordX-2" v-model="password" label="password" class="form-control form-control-lg" />
              </div>

                  <div>
                    <q-btn label="Login" type="login" color="primary"  class="btn btn-primary btn-lg btn-block"/>
                  </div>
                

                
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  </q-form>
</div>
  <!-- <form>
    <div class="absolute-center text-center">
     
      <div class="form-outline mb-4">
        <input type="email" id="form2Example1" class="form-control" />
        <label class="form-label" for="form2Example1">Email address</label>
      </div>
      
      <div class="form-outline mb-4">
        <input type="password" id="form2Example2" class="form-control" />
        <label class="form-label" for="form2Example2">Password</label>
      </div>
     
      <div class="row mb-4">
        <
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="form2Example34" checked />
            <label class="form-check-label" for="form2Example34"> Remember me </label>
          </div>
        </div>
        <div class="col">
         
          <a href="#!">Forgot password?</a>
        </div>
      </div>
    
      <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
   
      <div class="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
        <p>or sign up with:</p>
        <button type="button" class="btn btn-secondary btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
        </button>
        <button type="button" class="btn btn-secondary btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>
        <button type="button" class="btn btn-secondary btn-floating mx-1">
          <i class="fab fa-twitter"></i>
        </button>
        <button type="button" class="btn btn-secondary btn-floating mx-1">
          <i class="fab fa-github"></i>
        </button>
      </div>
    </div>
  </form> -->
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
