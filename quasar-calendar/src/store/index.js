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
            date:"",
            id:"",
            }],
            tasks: []
          },
          actions: {
            getCalendarDate({ commit }) {
              axios
                .get('http://localhost:3000/calendar')
                .then(response => {
                  commit('SET_CALENDAR_DATE', response.data)
                })
            },
            addTask({ commit }, data) {
              axios
                .put(`http://localhost:3000/calendar/${data.id}`, data)
                .then(response => {
                  commit('EDD_TASK', response.data)
                })
              // commit('EDD_TASK', data)
            },
            getTaskById({ commit }, data) {
              axios
                .get(`http://localhost:3000/calendar/${data.id}/tasks`)
                .then(response => {
                    commit('SET_TASKS', response.data)
                  })

                },
                addTaskDate({ commit }, data){axios
                .post('http://localhost:3000/calendar', data)
                .then(response => {
                  commit('ADD_TASK_DATE', response.data)
                })

                }
            },

            mutations: {
              SET_CALENDAR_DATE(state, calendar) {
                state.calendar = calendar;
              },

              EDD_TASK(state, data) {
                // let calendarTasks = this.getters.getTasksById(data.id)
                // calendarTasks.tasks = state.calendar.tasks.push(task)
                const index = this.state.calendar.findIndex((i) => i.id === data.id);
                state.calendar[index].tasks.push({ task: data.task })
                console.log(state)
              },
              SET_TASKS(state, tasks) {
                state.tasks = tasks

              },
              ADD_TASK_DATE(state, date){
                state.calendar.push(date)
              }
            },

            getters: {

              getTasksById: (state) => (id) => {
                return state.calendar.find((i) => i.id === id)
              },
              getCalendarIdByDate: (state) => (date) => {
                return state.calendar.find(function(i) {
                  return i.date === date})
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
