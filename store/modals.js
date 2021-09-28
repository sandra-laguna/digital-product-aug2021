export const state = () => ({
  index: 0,
  items: []
});

export const getters = {};

export const mutations = {
  RESET(state) {
    state.index = 0;
    state.items = [];
  },
  ADD(state, modal) {
    modal.id = state.index += 1;
    modal.active = true;
    state.items.push(modal);
  },
  REMOVE(state, modal) {
    const index = state.items.findIndex(({ id }) => modal.id === id);
    state.items.splice(index, 1);
  },
  ACTIVATE(state, modal) {
    modal.active = true;
  },
  DEACTIVATE(state, modal) {
    modal.active = false;
  }
};

export const actions = {
  reset({ commit }) {
    commit("RESET");
  },
  open({ commit }, { component, props, events }) {
    const modal = { component, props, events };
    commit("ADD", modal);
  },
  close({ commit }, modal) {
    commit("DEACTIVATE", modal);

    setTimeout(() => {
      commit("REMOVE", modal);
    }, 300);
  },
  activate({ commit }, modal) {
    commit("ACTIVATE", modal);
  },
  deactivate({ commit }, modal) {
    commit("DEACTIVATE", modal);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
