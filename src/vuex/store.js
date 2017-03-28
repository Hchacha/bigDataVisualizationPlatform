import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    dataJson: false
  },
  mutations: {
    set (state,msg) {
      state.dataJson = msg;
    }
  }
})



export default store