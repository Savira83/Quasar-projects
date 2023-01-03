<template>
	<h3>{{login_error}}</h3>
	<button @click = "goHome">Home</button>
</template>
<script >
	import { mapState } from 'vuex'
export default{
	name: 'ErrorPage',
	computed:{
		...mapState(['login_error'])
	},
	methods:{
		goHome(){
			this.$router.push('/')
		}
	}
}
</script>