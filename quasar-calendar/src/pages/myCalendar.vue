<template>
  <q-page>
    <div>
      <q-splitter v-model="splitterModel" style="height: 450px">
        {{q_date}}
        <template v-slot:before>
          <div class="q-pa-md">
            <q-date v-model="q_date"  :events="eventsFn"  event-color="orange" />
          </div>
          
        </template>
        <template v-slot:after>
          <q-tab-panels v-model="q_date" animated transition-prev="jump-up" transition-next="jump-up">
            <q-tab-panel :name="day.date" v-for="day in calendar" :key="day.date">
              <div class="text-h4 q-mb-md">{{day.date}}
               
                <add-task :id="day.id"></add-task>
              </div>
              <p v-for="(text, id) in tasks" :key="id">{{text.task}}</p>
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </div>
  </q-page>
  <keep-alive>
    <router-view />
  </keep-alive>
</template>
<script>
import addTask from 'pages/addTask.vue'
import { date } from 'quasar'
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { mapState, mapActions } from 'vuex'
import axios from 'axios'

export default defineComponent({
  components: {
    addTask
  },
  data() {
    return {
      date: "",
      q_date: null,
    }
  },
watch:{

  q_date(date){
    // debugger
    if(date.lenght<1){
      return
    }
    let id = this.$store.state.calendar.find((i) => i.date === date).id // i found this, but it is the same thet this.calendar
    
    this.getTaskById({id:id})
  }

},
  computed: {
    ...mapState([
      'calendar', 'tasks'
    ]),
    // if(q_date.id){
    //   
    // }
   

    todayDate() {
      const timeStamp = Date.now()
      return date.formatDate(timeStamp, 'DD MMMM YYYY')
    },
  },

  methods: {
    ...mapActions(['getCalendarDate', 'getTaskById']),

    eventsFn(date) {
      let events = []
      for (const data of this.calendar) {
        events.push(data.date)
      }
      console.log(events)
      return events.includes(date)
    },
     fetchData(){

      alert('function')
      return false
    },
   
  },
  mounted() {
    this.getCalendarDate()
    
  },


})

</script>
