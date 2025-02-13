import netlifyIdentity from "netlify-identity-widget";
if (process.browser) {
  netlifyIdentity.init();
}

const currentUser = netlifyIdentity?.currentUser() || null;

export const state = () => ({
  currentUser: currentUser
});

export const mutations = {
  SET_USER(state, currentUser) {
    state.currentUser = currentUser;
  }
};

export const actions = {
  setUser: ({ commit }, payload) => {
    commit('SET_USER', payload)
  }
};