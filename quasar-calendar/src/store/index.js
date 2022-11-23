import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import axios from 'axios'

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function( /* { ssrContext } */ ) {
  const Store = createStore({
    state: {

      calendar: [{
        date: "",
      }],
      tasks: [{
        calendarId: null
      }]
    },
    actions: {
      getCalendarDate({ commit }) {
        axios
          .get('http://localhost:3000/calendar')
          .then(response => {
            commit('SET_CALENDAR_DATES', response.data)
          })
      },
      addDate({ commit }, data) {
        axios
          .post('http://localhost:3000/calendar/', data)
          .then(response => {
            commit('ADD_CALENDAR_DATE', response.data)
          })
      },
      addTask({ commit }, data) {
        axios
          .post(`http://localhost:3000/calendar/${data.calendarId}/tasks`, data.task)
          .then(response => {
            commit('ADD_TASK', response.data)
          })
      },
      getTaskById({ commit }, data) {
        axios
          .get(`http://localhost:3000/calendar/${data.id}/tasks`)
          .then(response => {
            commit('SET_TASKS', response.data)
          })
      }
    },

    mutations: {
      SET_CALENDAR_DATES(state, calendar) {
        state.calendar = calendar;
      },
      ADD_CALENDAR_DATE(state, date) {
        state.calendar.push(date);
      },
      ADD_TASK(state, data) {
        // const index = this.state.calendar.findIndex((i) => i.id === data.id);
        // let id = this.getDateId(data)
        state.tasks.push(data)
        // console.log(state)
      },
      SET_TASKS(state, tasks) {
        state.tasks = tasks
      },
    },

    getters: {
      getTasksById: (state) => (id) => {
        return state.calendar.find((i) => i.id === id).id
      },
      getDateIndex: (state) => (date) => {
        return state.calendar.findIndex((i) => i.date === date)
      },
      getTaskIdByDate: (state) => (date) => {
        return state.tasks.find((i) => i.date === date)
      },
    },


    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
