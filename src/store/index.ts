import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    myState: 0
  },
  mutations: {
    setMyState (state: any, value: number) {
      state.myState = value
    }
  },
  actions: {
  },
  modules: {
  }
})
