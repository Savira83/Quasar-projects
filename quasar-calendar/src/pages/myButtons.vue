<template>
	<div>
		<q-btn color="grey"
		 text-color="black" 
		 label="Calendar" 
		 to = "/calendar"/>
	</div>
</template>
<script>
	import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
	data(){
		return{
			useData:false,
			useWifi:false
		}
	}
})
</script>