import Vue from 'vue'
import Vuex from 'vuex'
// import { fetchItem, fetchItems, fetchIdsByType, fetchUser } from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todayList: [],
    pastList: [],
    tagsList: [],
    about: {},
    popupCurrent: {},
    currentImgSet: [],
    showImagePopup: false,
    imagePopupData: {},
    globalLoading: false
  },

  actions: {

    IMAGE_POPUP_STATUS: ({ commit, dispatch, state }, { bool }) => {
      return commit('SET_IMAGE_POPUP_STATUS', { bool })
    },

    IMAGE_POPUP_DATA: ({ commit, dispatch, state }, { data, index }) => {
      return commit('SET_IMAGE_POPUP_DATA', { data, index })
    },

    IMAGE_POPUP_CURRENT: ({ commit, dispatch, state }, { data }) => {
      return commit('IMAGE_POPUP_CURRENT', { data })
    },

    GLOBAL_LOADING: ({ commit, dispatch, state }, { data }) => {
      return commit('SET_GLOBAL_LOADING', { data })
    }

  },

  mutations: {

    SET_IMAGE_POPUP_STATUS: (state, { bool }) => {
      state.showImagePopup = bool
    },

    SET_IMAGE_POPUP_DATA: (state, { data, index }) => {
      state.imagePopupData = { data: data, index: index }
    },

    IMAGE_POPUP_CURRENT: (state, { data }) => {
      state.popupCurrent = { data }
    },

    SET_GLOBAL_LOADING: (state, { bool }) => {
      state.globalLoading = bool
    }

  },

  getters: {

    showImagePopup (state) {
      const { showImagePopup } = state
      return showImagePopup
    },

    imagePopupData (state) {
      const { imagePopupData } = state
      // console.log('getters.imagePopupData: ', imagePopupData)
      return imagePopupData
    },

    popupCurrent (state) {
      const { popupCurrent } = state
      return popupCurrent
    },

    globalLoading (state) {
      const { globalLoading } = state
      return globalLoading
    }

  }
})

export default store
