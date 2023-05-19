export default {
  namespaced: true,

  state() {
    return {
      // здесь хранятся юзеры
      users: [],
    };
  },
  actions: {
    updateUsers({ commit }, users) {
      commit("updateUsers", users);
    },
  },

  mutations: {
    updateUsers(state, users) {
      state.users = users;
    },
  },
};
