export default {
  namespaced: true,

  state() {
    // здесь лежат выбранные селекты
    return {
      filters: {
        country: null,
        score: null,
      },
    };
  },

  actions: {
    updateFilters({ commit }, payload) {
      commit("updateFilters", payload);
    },
    // обновляем состояние фильтров
    updateCountry({ commit, state }, country) {
      const filters = {
        ...state.filters,
        country,
      };

      commit("updateFilters", filters);
    },

    updateScore({ commit, state }, score) {
      const filters = {
        ...state.filters,
        score,
      };

      commit("updateFilters", filters);
    },
  },

  mutations: {
    updateFilters(state, payload) {
      state.filters = payload;
    },
  },
};
