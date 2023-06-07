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

  [mutationTypes.deleteInstancesStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.deleteInstancesSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.deleteInstancesFailure](state) {
    state.isLoading = false;
    state.error = true;
  },

  [mutationTypes.addInstancesStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.addInstancesSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.addInstancesFailure](state) {
    state.isLoading = false;
    state.error = true;
  },

  [mutationTypes.startUpInstancesStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.startUpInstancesSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.startUpInstancesFailure](state) {
    state.isLoading = false;
    state.error = true;
  },

  [mutationTypes.modifyInstancesStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.modifyInstancesSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.modifyInstancesFailure](state) {
    state.isLoading = false;
    state.error = true;
  },

  [mutationTypes.renameInstancesStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.renameInstancesSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.renameInstancesFailure](state) {
    state.isLoading = false;
    state.error = true;
  },

  [mutationTypes.growInstancesStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.growInstancesSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.growInstancesFailure](state) {
    state.isLoading = false;
    state.error = true;
  },

  [mutationTypes.migrateInstancesStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.migrateInstancesSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.migrateInstancesFailure](state) {
    state.isLoading = false;
    state.error = true;
  },

  [mutationTypes.rebootInstancesStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.rebootInstancesSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.rebootInstancesFailure](state) {
    state.isLoading = false;
    state.error = true;
  },

  [mutationTypes.shutDownInstancesStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.shutDownInstancesSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.shutDownInstancesFailure](state) {
    state.isLoading = false;
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
  [actionTypes.deleteInstances](context, { apiUrl }, instanceName) {
    return new Promise(resolve => {
      context.commit(mutationTypes.deleteInstancesStart);
      instancesApi.deleteInstances(apiUrl, instanceName)
        .then(responce => {
          context.commit(mutationTypes.deleteInstancesSuccess, responce.data);
          resolve(responce.data);
        })
        .catch(() => {
          context.commit(mutationTypes.deleteInstancesFailure);
        });
    });
  },
  [actionTypes.addInstances](context, { apiUrl }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.addInstancesStart);
      instancesApi.addInstances(apiUrl)
        .then(responce => {
          context.commit(mutationTypes.addInstancesSuccess, responce.data);
          resolve(responce.data);
        })
        .catch(() => {
          context.commit(mutationTypes.addInstancesFailure);
        });
    });
  },
  [actionTypes.startUpInstances](context, { apiUrl }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.startUpInstancesStart);
      instancesApi.startUpInstances(apiUrl)
        .then(responce => {
          context.commit(mutationTypes.startUpInstancesSuccess, responce.data);
          resolve(responce.data);
        })
        .catch(() => {
          context.commit(mutationTypes.startUpInstancesFailure);
        });
    });
  },
  [actionTypes.modifyInstances](context, { apiUrl }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.modifyInstancesStart);
      instancesApi.modifyInstances(apiUrl)
        .then(responce => {
          context.commit(mutationTypes.modifyInstancesSuccess, responce.data);
          resolve(responce.data);
        })
        .catch(() => {
          context.commit(mutationTypes.modifyInstancesFailure);
        });
    });
  },
  [actionTypes.renameInstances](context, { apiUrl }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.renameInstancesStart);
      instancesApi.renameInstances(apiUrl)
        .then(responce => {
          context.commit(mutationTypes.renameInstancesSuccess, responce.data);
          resolve(responce.data);
        })
        .catch(() => {
          context.commit(mutationTypes.renameInstancesFailure);
        });
    });
  },
  [actionTypes.growInstances](context, { apiUrl }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.growInstancesStart);
      instancesApi.growInstances(apiUrl)
        .then(responce => {
          context.commit(mutationTypes.growInstancesSuccess, responce.data);
          resolve(responce.data);
        })
        .catch(() => {
          context.commit(mutationTypes.growInstancesFailure);
        });
    });
  },
  [actionTypes.migrateInstances](context, { apiUrl }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.migrateInstancesStart);
      instancesApi.migrateInstances(apiUrl)
        .then(responce => {
          context.commit(mutationTypes.migrateInstancesSuccess, responce.data);
          resolve(responce.data);
        })
        .catch(() => {
          context.commit(mutationTypes.migrateInstancesFailure);
        });
    });
  },
  [actionTypes.rebootInstances](context, { apiUrl }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.rebootInstancesStart);
      instancesApi.rebootInstances(apiUrl)
        .then(responce => {
          context.commit(mutationTypes.rebootInstancesSuccess, responce.data);
          resolve(responce.data);
        })
        .catch(() => {
          context.commit(mutationTypes.rebootInstancesFailure);
        });
    });
  },
  [actionTypes.shutDownInstances](context, { apiUrl }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.shutDownInstancesStart);
      instancesApi.shutDownInstances(apiUrl)
        .then(responce => {
          context.commit(mutationTypes.shutDownInstancesSuccess, responce.data);
          resolve(responce.data);
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
