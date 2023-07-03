const state = {
  languagePreference: localStorage.getItem('storedLanguage') || 'en-US'
};

const getters = {
  languagePreference: state => state.languagePreference
};

const mutations = {
  setLanguagePreference(state, language) {
    state.languagePreference = language;
  }
};
export default {
  state,
  getters,
  mutations
};
