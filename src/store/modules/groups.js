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
  addGroupsFailure: '[groups] Add groups failure'
};

export const actionTypes = {
  getGroups: '[groups] Get groups',
  addGroups: '[groups] Add groups'
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
  }
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
  [actionTypes.addGroups](context, { apiUrl }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.addGroupsStart);
      groupsApi.addGroups(apiUrl)
        .then(responce => {
          context.commit(mutationTypes.addGroupsStart, responce.data);
          resolve(responce.data);
        })
        .catch(() => {
          context.commit(mutationTypes.addGroupsFailure);
        });
    });
  }
};

export default {
  state,
  actions,
  mutations
};
