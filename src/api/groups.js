import axios from '@/api/axios';

const getGroups = apiUrl => axios.get(apiUrl);

const addGroups = apiUrl => axios.post(apiUrl);

const deleteGroups = apiUrl => axios.delete(apiUrl);

export default {
  getGroups,
  addGroups,
  deleteGroups
};
