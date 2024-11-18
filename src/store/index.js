import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shoppingList: [],
    notifications: []
  },
  mutations: {
    addItem(state, item) {
      state.shoppingList.push(item);
    },
    updateItem(state, { id, updatedItem }) {
      const index = state.shoppingList.findIndex(item => item.id === id);
      if (index !== -1) state.shoppingList.splice(index, 1, updatedItem);
    },
    deleteItem(state, id) {
      state.shoppingList = state.shoppingList.filter(item => item.id !== id);
    },
    toggleMarkOff(state, id) {
      const item = state.shoppingList.find(item => item.id === id);
      if (item) item.completed = !item.completed;
    }
  },
  actions: {
    addItem({ commit }, item) {
      commit('addItem', item);
    },
    updateItem({ commit }, payload) {
      commit('updateItem', payload);
    },
    deleteItem({ commit }, id) {
      commit('deleteItem', id);
    },
    toggleMarkOff({ commit }, id) {
      commit('toggleMarkOff', id);
    }
  },
  getters: {
    shoppingList: state => state.shoppingList,
    incompleteItems: state => state.shoppingList.filter(item => !item.completed)
  }
});
