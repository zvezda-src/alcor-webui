import clusterApi from '@/api/cluster';

const state = {
  data: null,
  isLoading: false,
  error: false
};

export const mutationTypes = {
  getClusterStart: '[cluster] Get cluster start',
  getClusterSuccess: '[cluster] Get cluster success',
  getClusterFailure: '[cluster] Get cluster failure',

  modifyClusterStart: '[cluster] Modify cluster start',
  modifyClusterSuccess: '[cluster] Modify cluster success',
  modifyClusterFailure: '[cluster] Modify cluster failure'
};

export const actionTypes = {
  getCluster: '[cluster] Get cluster',
  modifyCluster: '[cluster] Modify Cluster'
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
  },

  [mutationTypes.modifyClusterStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.modifyClusterSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.modifyClusterFailure](state) {
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
  },
  [actionTypes.modifyCluster](context) {
    return new Promise(resolve => {
      context.commit(mutationTypes.modifyClusterStart);
      clusterApi.modifyCluster()
        .then(responce => {
          context.commit(mutationTypes.modifyClusterSuccess, responce.data);
          resolve(responce.data);
        })
        .catch(() => {
          context.commit(mutationTypes.modifyClusterFailure);
        });
    });
  }
};

export default {
  state,
  actions,
  mutations
};
