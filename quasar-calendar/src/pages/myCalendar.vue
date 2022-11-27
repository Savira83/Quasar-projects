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
                <add-task :id="day.id"></add-task>
              <div class="text-h4 q-mb-md">{{day.date}}
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
    addTask
  },
  data() {
    return {
      date: "",
      q_date: null,
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
      return events
    },
  },
  methods: {
    ...mapActions(['getCalendarDate', 'getTaskById', 'addDate']),

    handleDate(date) {
      if (this.q_date == null) {
        return
      }
      let id = this.calendar.find((i) => i.date === this.q_date).id
      this.getTaskById({ id: id })
    },
  },
  mounted() {
    this.getCalendarDate()

  },
})

</script>
