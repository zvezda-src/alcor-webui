import axios from '@/api/axios';

const getGroups = apiUrl => axios.get(apiUrl);

const addGroups = apiUrl => axios.post(apiUrl);

export default {
  getGroups,
  addGroups
};
