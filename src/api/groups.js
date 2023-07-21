import axios from '@/api/axios';

const getGroups = apiUrl => axios.get(apiUrl);

const addGroups = (apiUrl, data) => axios.post(apiUrl, data);

const deleteGroups = apiUrl => axios.delete(apiUrl);

const renameGroups = (apiUrl, groupName, data) => axios.put(`${apiUrl}/${groupName}/rename`, data);

const assiginNodesGroups = (apiUrl, groupName, data) => axios.put(`${apiUrl}/${groupName}/assigin-nodes`, data);

const modifyGroups = (apiUrl, groupName, data) => axios.put(`${apiUrl}/${groupName}/modify`, data);

export default {
  getGroups,
  addGroups,
  deleteGroups,
  renameGroups,
  assiginNodesGroups,
  modifyGroups
};
