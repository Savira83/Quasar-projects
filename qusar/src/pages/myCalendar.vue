<template>
  <q-page>
   <div>
    <q-splitter
      v-model="splitterModel"
      style="height: 450px"
    >

      <template v-slot:before>
        <div class="q-pa-md">
          <q-date
            v-model="date"
            :events="events"
            event-color="orange"
          />
        </div>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="date"
          animated
          transition-prev="jump-up"
          transition-next="jump-up"
          @click="addTask"
        >
          <q-tab-panel name="2022/11/11" >
            <div class="text-h4 q-mb-md">2022/11/111</div>
            <p v-for="(task, id) in tasks" :key="id">{{task.title}}</p>
          </q-tab-panel>

          <q-tab-panel name="2022/11/10">
            <div class="text-h4 q-mb-md">2022/11/10</div>
            <p>Serhii Pytyovra's Birthday</p>
          </q-tab-panel>

          <q-tab-panel name="2022/11/02" >
            <div class="text-h4 q-mb-md">2022/11/02</div>
            <p>Ihor Marhitych' Birthday</p>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
  <q-input color="purple-12" v-model="newTask" label="Task">
        <template v-slot:prepend>
          <q-icon name="task" />
        </template>
         <template v-slot:append>
          <q-btn 
          @click="addTask"
          round 
          dense 
          flat 
          icon="add" />
        </template>
      </q-input>

  </q-page>
</template>
<script>
import { date } from 'quasar'
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default defineComponent({
     data(){
     return{
      newTask:'',
      tasks:[]
    }
     	
     },
     setup () {
    return {
      splitterModel: ref(50),
      date: ref('2022/11/11'),
      events: [ '2022/11/11' , '2022/11/10', '2022/11/02' ]
    }},

     computed:{
     	todayDate(){
      const timeStamp = Date.now()
      return date.formatDate(timeStamp, 'DD MMMM YYYY')
     },
     
  },
     methods:{
     	addTask(){
     		this.tasks.push({
          title: this.newTask})
        this.newTask = ""

     	}
     }
     
   
      })

</script>
