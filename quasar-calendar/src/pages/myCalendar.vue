<template>
  <q-page>
    <div>
      <q-splitter v-model="splitterModel" style="height: 450px">
        {{q_date}}
        <template v-slot:before>
          <div class="q-pa-md">
            <q-date v-model="q_date" @click="handleDate(date)"  :events="eventsFn" event-color="orange" />
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
  // watch:{

  //   q_date(date){
  //     if(date.lenght<1){
  //       return
  //     }
  //     // this.handleDate({date:this.date})
  //     // let existDate = this.calendar.find((i) => i.date === date).date


  //     // if(existDate==date){
  //     //   alert('You already add this day ')
  //     //   return
  //     // }
  //     // let id = this.calendar.find((i) => i.date === date).id
  //     // console.log(id)
  //     // console.log(this.q_date)
  //     console.log(date)
      // this.getTaskById({id:id})
  //     return date

  //   }

  // },
  computed: {
    ...mapState([
      'calendar', 'tasks'
    ]),



    todayDate() {
      const timeStamp = Date.now()
      return date.formatDate(timeStamp, 'DD MMMM YYYY')
    },
  },

  methods: {
    ...mapActions(['getCalendarDate', 'getTaskById', 'addDate']),

    eventsFn(date) {
      let events = []
      for (const data of this.calendar) {
        events.push(data.date)
      }
      // console.log(events)
      return events.includes(date)
    },

    handleDate(date) {
      if(this.q_date==null){
        return
      }
      console.log(this.calendar)

      console.log(this.q_date)
     let id = this.calendar.find((i) => i.date === this.q_date).id
      this.getTaskById({id:id})





      // this.addDate({date:date})

      // let existDate = this.calendar.find((i) => i.date === date).date
      // console.log(existDate)

      //  if(existDate==date){
      // alert('You already add this day ')
      // return
      //   }

      // },
      console.log(this.q_date)

    },
  },
  mounted() {
    this.getCalendarDate()

  },


})

</script>
