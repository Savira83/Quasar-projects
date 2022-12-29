<template>
	<nav>
	<div class="sign"> <router-link to="/NewRegistration">Sign Up</router-link></div>
    
    <div class="sign"><router-link to="/LogIn">Login</router-link></div>
	</nav>
    <router-view></router-view>
	<h3>This Is Home Page</h3>
</template>
<script>
	
</script>
<style>
h3 {
	text-align: center;

}

.nav{
	display: inline-block;
    vertical-align: baseline;
    margin: 2px;
    float: right;
}

</style>