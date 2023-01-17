<template>

  <body>
  	<div class="container">
    <div class="info row" >
      <img class="portret-picture" src="images/iryna.jpg" alt="Beautiful photo" />
      <q-item class="q-pr-none">{{user.first_name}}</q-item>
      <q-item class="q-pl-sm">{{user.last_name}}</q-item>
    </div>
    <h4>This is my page</h4>
    <div class="social">
    <h5>My social media</h5>
    <a href="https://www.facebook.com/profile.php?id=100004941134630" target="_blank" style="collor:primary">Facebook</a>
    <hr>
    </div>
    <div class="box-model">
    	<div></div>
    	<div></div>
    	<div></div>
    	<div></div>
    </div>
    <div style="margin-bottom: 500px"></div>
    </div>
  </body>
</template>
<script>
import {mapState} from 'vuex'
import {mapActions} from 'vuex'
export default{
	name:'MyPage',
	computed:{
		...mapState(['user'])
	},
	methods:{
		...mapActions(['logout']),
		LogOut(){
			this.logout()
			this.$router.push('/')
		}
	}
}
	
</script>
<style>
h3 {
	text-align: center;
}
.name{
	display: inline-block;
    vertical-align: baseline;
    margin: 2px;
    float: right;
}
</style>