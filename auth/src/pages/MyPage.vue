<template>
	<button  @click="LogOut" class="nav">Log Out</button>
	
	<div class="nav"><h5>{{user.first_name}}</h5></div>
	<div class="nav"><h5>{{user.last_name}}</h5></div>
	
	
	<div class="blog">
		<a href="" class="link">Google</a>
		<div class="blog_text"> 
			
			<span>This  Is My Page </span> </div>
</div>
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