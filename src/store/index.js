import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment-timezone';
import Axios from 'axios';


Vue.use(Vuex);
moment.tz.setDefault('UTC');

export default new Vuex.Store({
        state: {
          currentYear: 2019,
          currentMonth: 1,
          eventFormPositionX: 0,
          eventFormPositionY: 0,
          eventFormActive: false,
          events: [
                {description: 'Random event 1', date: moment('2019-01-18', 'YYYY-MM-DD') },
                {description: 'Random event 2', date: moment('2019-02-18', 'YYYY-MM-DD') },
                {description: 'Random event 3', date: moment('2019-01-15', 'YYYY-MM-DD') },
          ],
          eventFormDate: moment(),
        },

        mutations: {
            setCurrentMonth(state, payload) {
                state.currentMonth = payload;
            },
            setCurrentYear(state, payload) {
                state.currentYear = payload;
            },
            eventFormPosition(state, payload) {
                state.eventFormPositionX = payload.x
                state.eventFormPositionY = payload.y
            },
            eventFormActive(state, payload) {
                state.eventFormActive = payload;
            },
            addEvent(state, payload) {
               let obj = {
                    description: payload,
                    date: state.eventFormDate
                };
                state.events.push(obj)
                Axios.post('/add_event', obj)
            },
            eventFormDate(state, payload) {
                state.eventFormDate = payload;
            }
        }
      });