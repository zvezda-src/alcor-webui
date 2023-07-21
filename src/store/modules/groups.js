import groupsApi from '@/api/groups';

const state = {
  data: null,
  isLoading: false,
  error: false
};

export const mutationTypes = {
  getGroupsStart: '[groups] Get groups start',
  getGroupsSuccess: '[groups] Get groups success',
  getGroupsFailure: '[groups] Get groups failure',

  addGroupsStart: '[groups] Add groups start',
  addGroupsSuccess: '[groups] Add groups success',
  addGroupsFailure: '[groups] Add groups failure',

  deleteGroupsStart: '[groups] Delete groups start',
  deleteGroupsSuccess: '[groups] Delete groups success',
  deleteGroupsFailure: '[groups] Delete groups failure',

  renameGroupsStart: '[groups] Rename groups start',
  renameGroupsSuccess: '[groups] Rename groups success',
  renameGroupsFailure: '[groups] Rename groups failure',

  assiginNodesGroupsStart: '[groups] Assigin nodes groups start',
  assiginNodesGroupsSuccess: '[groups] Assigin nodes groups success',
  assiginNodesGroupsFailure: '[groups] Assigin nodes failure',

  modifyGroupsStart: '[groups] Modify groups start',
  modifyGroupsSuccess: '[groups] Modify groups success',
  modifyGroupsFailure: '[groups] Modify groups failure'
};

export const actionTypes = {
  getGroups: '[groups] Get groups',
  addGroups: '[groups] Add groups',
  deleteGroups: '[groups] Delete groups',
  renameGroups: '[groups] Rename groups',
  assginNodesGroups: '[groups] Assigin nodes groups',
  modifyGroups: '[groups] Modify groups'
};

const mutations = {
  [mutationTypes.getGroupsStart](state) {
    state.isLoading = true;
    state.data = null;
    state.error = false;
  },
  [mutationTypes.getGroupsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getGroupsFailure](state) {
    state.isLoading = false;
    state.error = true;
  },

  [mutationTypes.addGroupsStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.addGroupsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.addGroupsFailure](state) {
    state.isLoading = false;
  },

  [mutationTypes.deleteGroupsStart]() {},
  [mutationTypes.deleteGroupsSuccess]() {},
  [mutationTypes.deleteGroupsFailure]() {},

  [mutationTypes.renameGroupsStart]() {},
  [mutationTypes.renameGroupsSuccess]() {},
  [mutationTypes.renameGroupsFailure]() {},

  [mutationTypes.assiginNodesGroupsStart]() {},
  [mutationTypes.assiginNodesGroupsSuccess]() {},
  [mutationTypes.assiginNodesGroupsFailure]() {},

  [mutationTypes.modifyGroupsStart]() {},
  [mutationTypes.modifyGroupsSuccess]() {},
  [mutationTypes.modifyGroupsFailure]() {}
};

const actions = {
  [actionTypes.getGroups](context, { apiUrl }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getGroupsStart);
      groupsApi.getGroups(apiUrl)
        .then(responce => {
          context.commit(mutationTypes.getGroupsSuccess, responce.data);
          resolve(responce.data);
        })
        .catch(() => {
          context.commit(mutationTypes.getGroupsFailure);
        });
    });
  },
  [actionTypes.addGroups](context, { apiUrl, data }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.addGroupsStart);
      groupsApi.addGroups(apiUrl, data)
        .then(() => {
          context.commit(mutationTypes.addGroupsStart);
          resolve();
        })
        .catch(() => {
          context.commit(mutationTypes.addGroupsFailure);
        });
    });
  },
  [actionTypes.deleteGroups](context, { apiUrl }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.deleteGroupsStart);
      groupsApi.deleteGroups(apiUrl)
        .then(() => {
          context.commit(mutationTypes.deleteGroupsStart);
          resolve();
        })
        .catch(() => {
          context.commit(mutationTypes.deleteGroupsFailure);
        });
    });
  },
  [actionTypes.renameGroups](context, { apiUrl }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.renameGroupsStart);
      groupsApi.renameGroups(apiUrl)
        .then(() => {
          context.commit(mutationTypes.renameGroupsStart);
          resolve();
        })
        .catch(() => {
          context.commit(mutationTypes.renameGroupsFailure);
        });
    });
  },
  [actionTypes.assginNodesGroups](context, { apiUrl }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.assiginNodesGroupsStart);
      groupsApi.assiginNodesGroups(apiUrl)
        .then(() => {
          context.commit(mutationTypes.assiginNodesGroupsSuccess);
          resolve();
        })
        .catch(() => {
          context.commit(mutationTypes.assiginNodesGroupsFailure);
        });
    });
  },
  [actionTypes.modifyGroups](context, { apiUrl }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.modifyGroupsStart);
      groupsApi.modifyGroups(apiUrl)
        .then(() => {
          context.commit(mutationTypes.modifyGroupsSuccess);
          resolve();
        })
        .catch(() => {
          context.commit(mutationTypes.modifyGroupsFailure);
        });
    });
  }
};

export default {
  state,
  actions,
  mutations
};
