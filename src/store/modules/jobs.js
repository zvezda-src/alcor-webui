import jobsApi from '@/api/jobs';

const state = {
  data: null,
  isLoading: false,
  error: false
};

export const mutationTypes = {
  getJobsStart: '[jobs] Get jobs start',
  getJobsSuccess: '[jobs] Get jobs success',
  getJobsFailure: '[jobs] Get jobs failure'
};

export const actionTypes = {
  getJobs: '[jobs] Get jobs'
};

const mutations = {
  [mutationTypes.getJobsStart](state) {
    state.isLoading = true;
    state.data = null;
    state.error = false;
  },
  [mutationTypes.getJobsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getJobsFailure](state) {
    state.isLoading = false;
    state.error = true;
  }
};

const actions = {
  [actionTypes.getJobs](context, { apiUrl }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getJobsStart);
      jobsApi.getJobs(apiUrl)
        .then(responce => {
          context.commit(mutationTypes.getJobsSuccess, responce.data);
          resolve(responce.data);
        })
        .catch(() => {
          context.commit(mutationTypes.getJobsFailure);
        });
    });
  }
};

export default {
  state,
  actions,
  mutations
};
