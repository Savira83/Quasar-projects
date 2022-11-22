<template>
  <q-page>
    <div>
      <q-splitter v-model="splitterModel" style="height: 450px">
        {{q_date}}
        <template v-slot:before>
          <div class="q-pa-md">
            <q-date v-model="q_date" @click="handleDate(date)" :events="events" event-color="orange" />
          </div>
        </template>
        <template v-slot:after>
          <q-tab-panels v-model="q_date" animated transition-prev="jump-up" transition-next="jump-up">
            <q-tab-panel :name="day.date" v-for="day in calendar" :key="day.date">
              <q-input color="purple-12" v-model="task" label="Task">
                  <template v-slot:prepend>
                    <q-icon name="task" />
                  </template>
                  <template v-slot:append>
                    <q-btn @click="addTaskToDate(id)" round dense flat icon="add" />
                  </template>
                </q-input>
              <div class="text-h4 q-mb-md">{{day.date}}
                <!-- <add-task :id="day.id"></add-task> -->
              </div>
              <p v-for="(text, id) in tasks" :key="id">{{text.task}}</p>
            </q-tab-panel>
            <q-tab-panel v-if="!events.includes(q_date)" :name="q_date">
              <div class="text-h4 q-mb-md">{{q_date}}
                <p>This date is not in your calendar. Do you want to add new date?</p>
                <q-btn @click="addDate({date: q_date})" color="primary" label="Add Date" />
              </div>
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
    // addTask
  },
  data() {
    return {
      date: "",
      q_date: null,
      calendarId: null,
      task: ""
    }
  },

  computed: {
    ...mapState([
      'calendar', 'tasks'
    ]),
    ...mapGetters(['getTaskIdByDate']),
    todayDate() {
      const timeStamp = Date.now()
      return date.formatDate(timeStamp, 'DD MMMM YYYY')
    },
    events() {
      let events = []
      for (const data of this.calendar) {
        events.push(data.date)
      }
      // console.log(events)
      return events
    },

  },

  methods: {
    ...mapActions(['getCalendarDate', 'getTaskById', 'addDate', 'addTask']),
    ...mapGetters(['getTaskIdByDate']),

    handleDate(date) {
      if (this.q_date == null) {
        return
      }
      let id = this.calendar.find((i) => i.date === this.q_date).id
      this.getTaskById({ id: id })
    },
    addTaskToDate(id) {
      let dateId = this.calendar.find((i) => i.date === this.q_date).id
      this.addTask({id:id},{ task: this.task, calendarId: dateId})
      this.task = ""

    }
  },
  mounted() {
    this.getCalendarDate()

  },
})

</script>
