import { createStore } from 'vuex'
import CoachModule from './coaches/index.js';
import RequestModule from './requests/index.js';

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    coaches: CoachModule,
    requests: RequestModule
  }
})
