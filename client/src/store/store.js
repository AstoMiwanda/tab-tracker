import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    token: null,
    user: null,
    isUserLogedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLogedIn = true
      } else {
        state.isUserLogedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    setToken: {
      setToken ({
        commit
      }, token) {
        commit('setToken', token)
      }
    },
    setUser: {
      setUser ({
        commit
      }, user) {
        commit('setUser', user)
      }
    }
  }
})
