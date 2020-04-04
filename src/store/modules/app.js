/* eslint no-shadow: ["error", { "allow": ["state"] }] */
const state = {
  sidebar: false,
};

const mutations = {
  TOGGLE_SIDEBAR: (state) => {
    state.sidebar = !state.sidebar;
  },
};

const actions = {
  toogleSidebar({ commit }) {
    commit('TOGGLE_SIDEBAR');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
