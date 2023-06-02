import nodesApi from '@/api/nodes';

const state = {
  data: null,
  isLoading: false,
  error: false
};

export const mutationTypes = {
  getNodesStart: '[nodes] Get nodes start',
  getNodesSuccess: '[nodes] Get nodes success',
  getNodesFailure: '[nodes] Get nodes failure',

  addNodesStart: '[nodes] Add nodes start',
  addNodesSuccess: '[nodes] Add nodes success',
  addNodesFailure: '[nodes] Add nodes failure',

  evacuateNodesStart: '[nodes] Evacuate nodes start',
  evacuateNodesSuccess: '[nodes] Evacuate nodes success',
  evacuateNodesFailure: '[nodes] Evacuate nodes failure',

  modifyNodesStart: '[nodes] Modify nodes start',
  modifyNodesSuccess: '[nodes] Modify nodes success',
  modifyNodesFailure: '[nodes] Modify nodes failure'
};

export const actionTypes = {
  getNodes: '[nodes] Get nodes',
  addNodes: '[nodes] Add nodes',
  evacuateNodes: '[nodes] Evacuate nodes',
  modifyNodes: '[nodes] Modify nodes'
};

const mutations = {
  [mutationTypes.getNodesStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getNodesSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getNodesFailure](state) {
    state.isLoading = false;
  },

  [mutationTypes.addNodesSuccess](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.addNodesStart](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.addNodesFailure](state) {
    state.isLoading = false;
  },

  [mutationTypes.evacuateNodesStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.evacuateNodesSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.evacuateNodesFailure](state) {
    state.isLoading = false;
  },

  [mutationTypes.modifyNodesStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.modifyNodesSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.modifyNodesFailure](state) {
    state.isLoading = false;
  }
};

const actions = {
  [actionTypes.getNodes](context, { apiUrl }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getNodesStart);
      nodesApi.getNodes(apiUrl)
        .then(responce => {
          context.commit(mutationTypes.getNodesSuccess, responce.data);
          resolve(responce.data);
        })
        .catch(() => {
          context.commit(mutationTypes.getNodesFailure);
        });
    });
  },
  [actionTypes.addNodes](context, { apiUrl }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.addNodesStart);
      nodesApi.addNodes(apiUrl)
        .then(responce => {
          context.commit(mutationTypes.addNodesSuccess, responce.data);
          resolve(responce.data);
        })
        .catch(() => {
          context.commit(mutationTypes.addNodesFailure);
        });
    });
  },
  [actionTypes.evacuateNodes](context, { apiUrl }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.evacuateNodesStart);
      nodesApi.evacuateNodes(apiUrl)
        .then(responce => {
          context.commit(mutationTypes.evacuateNodesSuccess, responce.data);
          resolve(responce.data);
        })
        .catch(() => {
          context.commit(mutationTypes.evacuateNodesFailure);
        });
    });
  },
  [actionTypes.modifyNodes](context, { apiUrl }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.modifyNodesStart);
      nodesApi.modifyNodes(apiUrl)
        .then(responce => {
          context.commit(mutationTypes.modifyNodesSuccess, responce.data);
          resolve(responce.data);
        })
        .catch(() => {
          context.commit(mutationTypes.modifyNodesFailure);
        });
    });
  }
};

export default {
  state,
  actions,
  mutations
};
