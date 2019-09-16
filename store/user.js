export const state = () => ({
  currentUser: window.localStorage.getItem('user')
});

export const mutations = {
  SET_USER(state, currentUser) {
    if (!currentUser) {
      state.currentUser = null;
      window.localStorage.removeItem('user');
      return;
    }
    let theUser = JSON.stringify(currentUser);
    state.currentUser = currentUser;
    window.localStorage.setItem('user', theUser);
  }
};

export const actions = {
  setUser: ({ commit }, payload) => {
    commit('SET_USER', payload)
  }
};