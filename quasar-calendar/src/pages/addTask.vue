<template>
	
	<div><q-input color="purple-12" v-model="task" label="Task">
      <template v-slot:prepend>
        <q-icon name="task" />
      </template>
      <template v-slot:append>
        <q-btn @click="addTaskToDate()" round dense flat icon="add" />
      </template>
    </q-input></div>
     
</template>

<script>
  import { defineComponent } from 'vue'
  import { mapActions, mapGetters } from 'vuex'
	export default defineComponent({
  data() {
  return {
      task:" ",
      calendarId: null
        }
  },  
  props:['id'], 
  computed:{
    ...mapGetters(['getTaskIdByDate']),
  },


  methods:{
    ...mapActions(['getTaskById', 'addTask']),

  	addTaskToDate(id) {
     let dateId = this.calendar.find((i) => i.date === this.q_date).id
      this.addTask({ task: this.task, calendarId: dateId})
      this.task = ""

     this.task=""
     console.log(tasksId)
   }
  
},
 mounted() {
    this.getTaskIdByDate()
  },


})	
</script>