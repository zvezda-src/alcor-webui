import authApi from '@/api/auth';

const state = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null
};

export const mutationTypes = {
  loginStart: '[auth] Login start',
  loginSuccess: '[auth] Login success',
  loginFailure: '[auth] Login failure',

  getCurrentUserStart: '[auth] getCurrentUserStart',
  getCurrentUserSuccess: '[auth] getCurrentUserSuccess',
  getCurrentUserFailure: '[auth] getCurrentUserFailure'
};

export const actionTypes = {
  login: '[auth] login',
  getCurrentUser: '[auth] Get current user'
};

const mutations = {
  [mutationTypes.loginStart](state) {
    state.isSubmitting = true;
    state.validationErrors = null;
  },
  [mutationTypes.loginSuccess](state, payload) {
    state.isSubmitting = false;
    state.currentUser = payload;
    state.isLoggedIn = true;
  },
  [mutationTypes.loginFailure](state, payload) {
    state.isSubmitting = false;
    state.validationErrors = payload;
  },

  [mutationTypes.getCurrentUserStart](state) {
    state.isLoading = true;
  },
  [mutationTypes.getCurrentUserSuccess](state, payload) {
    state.isLoading = false;
    state.currentUser = payload;
    state.isLoggedIn = true;
  },
  [mutationTypes.getCurrentUserFailure](state) {
    state.isLoading = false;
    state.isLoggedIn = false;
    state.currentUser = null;
  }
};

const actions = {
  [actionTypes.login](context, credentials) {
    return new Promise(resolve => {
      context.commit(mutationTypes.loginStart);
      authApi
        .login(credentials)
        .then(response => {
          context.commit(mutationTypes.loginSuccess, response.data.user);
          resolve(response.data.user);
        })
        .catch(result => {
          context.commit(mutationTypes.loginFailure, result.response.data.errors);
        });
    });
  },
  [actionTypes.getCurrentUser](context) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getCurrentUserStart);
      authApi
        .getCurrentUser()
        .then(response => {
          context.commit(mutationTypes.getCurrentUserSuccess, response.data.user);
          resolve(response.data.user);
        })
        .catch(() => {
          context.commit(mutationTypes.getCurrentUserFailure);
        });
    });
  }
};

export default {
  state,
  mutations,
  actions
};
