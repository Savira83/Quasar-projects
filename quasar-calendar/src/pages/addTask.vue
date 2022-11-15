<template>
	
	<div><q-input color="purple-12" v-model="task" label="Task">
      <template v-slot:prepend>
        <q-icon name="task" />
      </template>
      <template v-slot:append>
        <q-btn @click="addTaskToDate(id)" round dense flat icon="add" />
      </template>
    </q-input></div>
     
</template>

<script>
  import { defineComponent } from 'vue'
  import { mapActions } from 'vuex'
	export default defineComponent({
  data() {
  return {
      

        task:" "}
        
  
  },  
  props:['id'], 

  methods:{
    ...mapActions(['addTask']),

  	addTaskToDate(id) {
     
     
     this.addTask({task:this.task, id:id})
     this.task=""
     console.log('tasksId')
   }
  
}


})	
</script>