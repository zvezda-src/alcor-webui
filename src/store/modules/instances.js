import instancesApi from '@/api/instances';

const state = {
  data: null,
  isLoading: false,
  error: null
};

export const mutationTypes = {
  getInstancesStart: '[instances] Get instances start',
  getInstancesSuccess: '[instances] Get instances success',
  getInstancesFailure: '[instances] Get instances failure',

  deleteInstancesStart: '[instances] Delete instances start',
  deleteInstancesSuccess: '[instances] Delete instances success',
  deleteInstancesFailure: '[instances] Delete instances failure',

  addInstancesStart: '[instances] Add instances start',
  addInstancesSuccess: '[instances] Add instances success',
  addInstancesFailure: '[instances] Add instances failure',

  startUpInstancesStart: '[instances] Start up instances start',
  startUpInstancesSuccess: '[instances] Start up instances success',
  startUpInstancesFailure: '[instances] Start up instances failure',

  modifyInstancesStart: '[instances] Modify instances start',
  modifyInstancesSuccess: '[instances] Modify instances success',
  modifyInstancesFailure: '[instances] Modify instances failure',

  renameInstancesStart: '[instances] Rename instances start',
  renameInstancesSuccess: '[instances] Rename instances success',
  renameInstancesFailure: '[instance] Rename instances failure',

  growInstancesStart: '[instances] Grow instances start',
  growInstancesSuccess: '[instance] Grow instances success',
  growInstancesFailure: '[instances] Grow instances failure',

  migrateInstancesStart: '[instances] Migrate instances start',
  migrateInstancesSuccess: '[instances] Migrate instances success',
  migrateInstancesFailure: '[instances] Migrate instances failure',

  rebootInstancesStart: '[instances] Reboot instances start',
  rebootInstancesSuccess: '[instances] Reboot instances success',
  rebootInstancesFailure: '[instances] Reboot instances failure',

  shutDownInstancesStart: '[instances] Shut down instances start',
  shutDownInstancesSuccess: '[instances] Shut down instances success',
  shutDownInstancesFailure: '[instances] Shut down instances failure'
};

export const actionTypes = {
  getInstances: '[instances] Get instances',
  deleteInstances: '[instances] Delete instances',
  addInstances: '[instances] Add instances',
  startUpInstances: '[instances] Start up instances',
  modifyInstances: '[instances] Modify instances',
  renameInstances: '[instances] Rename instances',
  growInstances: '[instances] Grow instances',
  migrateInstances: '[instances] Migrate instances',
  rebootInstances: '[instances] Reboot instances',
  shutDownInstances: '[instances] Shut down instances'
};

const mutations = {
  [mutationTypes.getInstancesStart](state) {
    state.isLoading = true;
    state.data = null;
    state.error = null;
  },
  [mutationTypes.getInstancesSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getInstancesFailure](state) {
    state.isLoading = false;
    state.error = true;
  },

  [mutationTypes.deleteInstancesStart]() {},
  [mutationTypes.deleteInstancesSuccess]() {},
  [mutationTypes.deleteInstancesFailure](state) {
    state.error = true;
  },

  [mutationTypes.addInstancesStart]() {},
  [mutationTypes.addInstancesSuccess]() {},
  [mutationTypes.addInstancesFailure](state) {
    state.error = true;
  },

  [mutationTypes.startUpInstancesStart]() {},
  [mutationTypes.startUpInstancesSuccess]() {},
  [mutationTypes.startUpInstancesFailure]() {},

  [mutationTypes.modifyInstancesStart]() {},
  [mutationTypes.modifyInstancesSuccess]() {},
  [mutationTypes.modifyInstancesFailure](state) {
    state.error = true;
  },

  [mutationTypes.renameInstancesStart]() {},
  [mutationTypes.renameInstancesSuccess]() {},
  [mutationTypes.renameInstancesFailure](state) {
    state.error = true;
  },

  [mutationTypes.growInstancesStart]() {},
  [mutationTypes.growInstancesSuccess]() {},
  [mutationTypes.growInstancesFailure](state) {
    state.error = true;
  },

  [mutationTypes.migrateInstancesStart]() {},
  [mutationTypes.migrateInstancesSuccess]() {},
  [mutationTypes.migrateInstancesFailure](state) {
    state.error = true;
  },

  [mutationTypes.rebootInstancesStart]() {},
  [mutationTypes.rebootInstancesSuccess]() {},
  [mutationTypes.rebootInstancesFailure](state) {
    state.error = true;
  },

  [mutationTypes.shutDownInstancesStart]() {},
  [mutationTypes.shutDownInstancesSuccess]() {},
  [mutationTypes.shutDownInstancesFailure](state) {
    state.error = true;
  }
};

const actions = {
  [actionTypes.getInstances](context, { apiUrl }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getInstancesStart);
      instancesApi.getInstances(apiUrl)
        .then(responce => {
          context.commit(mutationTypes.getInstancesSuccess, responce.data);
          resolve(responce.data);
        })
        .catch(() => {
          context.commit(mutationTypes.getInstancesFailure);
        });
    });
  },
  [actionTypes.deleteInstances](context, { apiUrl, instanceName }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.deleteInstancesStart);
      instancesApi.deleteInstances(apiUrl, instanceName)
        .then(() => {
          context.commit(mutationTypes.deleteInstancesSuccess);
          resolve();
        })
        .catch(() => {
          context.commit(mutationTypes.deleteInstancesFailure);
        });
    });
  },
  [actionTypes.addInstances](context, { apiUrl, data }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.addInstancesStart);
      instancesApi.addInstances(apiUrl, data)
        .then(() => {
          context.commit(mutationTypes.addInstancesSuccess);
          resolve();
        })
        .catch(() => {
          context.commit(mutationTypes.addInstancesFailure);
        });
    });
  },
  [actionTypes.startUpInstances](context, { apiUrl, instanceName }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.startUpInstancesStart);
      instancesApi.startUpInstances(apiUrl, instanceName)
        .then(() => {
          context.commit(mutationTypes.startUpInstancesSuccess);
          resolve();
        })
        .catch(() => {
          context.commit(mutationTypes.startUpInstancesFailure);
        });
    });
  },
  [actionTypes.modifyInstances](context, { apiUrl, instanceName, data }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.modifyInstancesStart);
      instancesApi.modifyInstances(apiUrl, instanceName, data)
        .then(() => {
          context.commit(mutationTypes.modifyInstancesSuccess);
          resolve();
        })
        .catch(() => {
          context.commit(mutationTypes.modifyInstancesFailure);
        });
    });
  },
  [actionTypes.renameInstances](context, { apiUrl, instanceName, data }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.renameInstancesStart);
      instancesApi.renameInstances(apiUrl, instanceName, data)
        .then(() => {
          context.commit(mutationTypes.renameInstancesSuccess);
          resolve();
        })
        .catch(() => {
          context.commit(mutationTypes.renameInstancesFailure);
        });
    });
  },
  [actionTypes.growInstances](context, { apiUrl, instanceName, data }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.growInstancesStart);
      instancesApi.growInstances(apiUrl, instanceName, data)
        .then(() => {
          context.commit(mutationTypes.growInstancesSuccess);
          resolve();
        })
        .catch(() => {
          context.commit(mutationTypes.growInstancesFailure);
        });
    });
  },
  [actionTypes.migrateInstances](context, { apiUrl, instanceName, data }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.migrateInstancesStart);
      instancesApi.migrateInstances(apiUrl, instanceName, data)
        .then(() => {
          context.commit(mutationTypes.migrateInstancesSuccess);
          resolve();
        })
        .catch(() => {
          context.commit(mutationTypes.migrateInstancesFailure);
        });
    });
  },
  [actionTypes.rebootInstances](context, { apiUrl, instanceName, data }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.rebootInstancesStart);
      instancesApi.rebootInstances(apiUrl, instanceName, data)
        .then(() => {
          context.commit(mutationTypes.rebootInstancesSuccess);
          resolve();
        })
        .catch(() => {
          context.commit(mutationTypes.rebootInstancesFailure);
        });
    });
  },
  [actionTypes.shutDownInstances](context, { apiUrl, instanceName, data }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.shutDownInstancesStart);
      instancesApi.shutDownInstances(apiUrl, instanceName, data)
        .then(() => {
          context.commit(mutationTypes.shutDownInstancesSuccess);
          resolve();
        })
        .catch(() => {
          context.commit(mutationTypes.shutDownInstancesFailure);
        });
    });
  }
};

export default {
  state,
  actions,
  mutations
};
