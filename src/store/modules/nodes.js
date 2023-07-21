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
  modifyNodesFailure: '[nodes] Modify nodes failure',

  migrateNodesStart: '[nodes] Migrate nodes start',
  migrateNodesSuccess: '[nodes] Migrate nodes success',
  migrateNodesFailure: '[nodes] Migrate nodes failure'
};

export const actionTypes = {
  getNodes: '[nodes] Get nodes',
  addNodes: '[nodes] Add nodes',
  evacuateNodes: '[nodes] Evacuate nodes',
  modifyNodes: '[nodes] Modify nodes',
  migrateNodes: '[nodes] Migrate nodes'
};

const mutations = {
  [mutationTypes.getNodesStart](state) {
    state.isLoading = true;
    state.data = null;
    state.error = false;
  },
  [mutationTypes.getNodesSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getNodesFailure](state) {
    state.isLoading = false;
    state.error = true;
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

  [mutationTypes.evacuateNodesStart]() {},
  [mutationTypes.evacuateNodesSuccess]() {},
  [mutationTypes.evacuateNodesFailure]() {},

  [mutationTypes.modifyNodesStart]() {},
  [mutationTypes.modifyNodesSuccess]() {},
  [mutationTypes.modifyNodesFailure]() {},

  [mutationTypes.migrateNodesStart]() {},
  [mutationTypes.migrateNodesSuccess]() {},
  [mutationTypes.migrateNodesFailure]() {}
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
  [actionTypes.addNodes](context, { apiUrl, data }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.addNodesStart);
      nodesApi.addNodes(apiUrl, data)
        .then(() => {
          context.commit(mutationTypes.addNodesSuccess);
          resolve();
        })
        .catch(() => {
          context.commit(mutationTypes.addNodesFailure);
        });
    });
  },
  [actionTypes.evacuateNodes](context, { apiUrl, nodeName }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.evacuateNodesStart);
      nodesApi.evacuateNodes(apiUrl, nodeName)
        .then(() => {
          context.commit(mutationTypes.evacuateNodesSuccess);
          resolve();
        })
        .catch(() => {
          context.commit(mutationTypes.evacuateNodesFailure);
        });
    });
  },
  [actionTypes.modifyNodes](context, { apiUrl, nodeName, data }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.modifyNodesStart);
      nodesApi.modifyNodes(apiUrl, nodeName, data)
        .then(() => {
          context.commit(mutationTypes.modifyNodesSuccess);
          resolve();
        })
        .catch(() => {
          context.commit(mutationTypes.modifyNodesFailure);
        });
    });
  },
  [actionTypes.migrateNodes](context, { apiUrl, nodeName, data }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.migrateNodesStart);
      nodesApi.migrateNodes(apiUrl, nodeName, data)
        .then(() => {
          context.commit(mutationTypes.migrateNodesSuccess);
          resolve();
        })
        .catch(() => {
          context.commit(mutationTypes.migrateNodesFailure);
        });
    });
  }
};

export default {
  state,
  actions,
  mutations
};
