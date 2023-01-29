const state = {
  isSubmitting: false
};

const mutations = {
  loginStart(state) {
    state.isSubmitting = true;
  }
};

export default {
  state,
  mutations
};
