<template>
  <q-page>
    <div>
      <q-splitter v-model="splitterModel" style="height: 450px">
        {{q_date}}
        <template v-slot:before>
          <div class="q-pa-md">
            <q-date v-model="q_date" @click='addDateForTask' :events="eventsFn" event-color="orange" />
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
import { mapState, mapActions, mapGetters } from 'vuex'
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
  watch: {
    q_date(date) {
       return date
    }

  },
  computed: {
    ...mapState([
      'calendar', 'tasks'
    ]),
    ...mapGetters(['getCalendarIdByDate']),
    todayDate() {
      const timeStamp = Date.now()
      return date.formatDate(timeStamp, 'DD MMMM YYYY')
    },
  },

  methods: {
    ...mapActions(['getCalendarDate', 'getTaskById','addTaskDate']),

    eventsFn(date) {
      let events = []
      for (const data of this.calendar) {
        events.push(data.date)
      }
      console.log(events)
      return events.includes(date)
    },
    addDateForTask(){
      // let existDate= this.getCalendarIdByDate(this.q_date).date
      // console.log(existDate)
      this.addTaskDate({date:this.q_date})
    },

  },
  mounted() {
    this.getCalendarDate()


  },


})

</script>
