import clusterApi from '@/api/cluster';

const state = {
  data: null,
  isLoading: false,
  error: false
};

export const mutationTypes = {
  getClusterStart: '[cluster] Get cluster start',
  getClusterSuccess: '[cluster] Get cluster success',
  getClusterFailure: '[cluster] Get cluster failure'
};

export const actionTypes = {
  getCluster: '[cluster] Get cluster'
};

const mutations = {
  [mutationTypes.getClusterStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getClusterSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getClusterFailure](state) {
    state.isLoading = false;
  }
};

const actions = {
  [actionTypes.getCluster](context) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getClusterStart);
      clusterApi.getCluster()
        .then(responce => {
          context.commit(mutationTypes.getClusterSuccess, responce.data);
          resolve(responce.data);
        })
        .catch(() => {
          context.commit(mutationTypes.getClusterFailure);
        });
    });
  }
};

export default {
  state,
  actions,
  mutations
};
