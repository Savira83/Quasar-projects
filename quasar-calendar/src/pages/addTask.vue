<template>
  
  <div><q-input color="purple-12" v-model="taskText" label="Task">
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
  import { mapActions, mapGetters } from 'vuex'
  export default defineComponent({
  data() {
  return {
     taskText: "",
      calendarId: null,
      sratus:false
        }
  },  
  props:['id'], 
  computed:{
    ...mapGetters(['getTaskIdByDate', 'getTasksById']),
  },
  methods:{
    ...mapActions(['getTaskById', 'addTask']),

     addTaskToDate(id) {
      let dateId=this.getTasksById(id)
      let task= {task:this.taskText, status:false}
      this.addTask({ task: task, calendarId: dateId})
      this.taskText = ""
    } 
  },
})  
</script>