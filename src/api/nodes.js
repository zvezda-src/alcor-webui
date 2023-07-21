import axios from '@/api/axios';

const getNodes = apiUrl => axios.get(apiUrl);

const addNodes = (apiUrl, data) => axios.post(apiUrl, data);

const evacuateNodes = (apiUrl, nodeName) => axios.post(`${apiUrl}/${nodeName}/evacuate`);

const modifyNodes = (apiUrl, nodeName, data) => axios.post(`${apiUrl}/${nodeName}/modify`, data);

const migrateNodes = (apiUrl, nodeName, data) => axios.post(`${apiUrl}/${nodeName}/migrate`, data);

export default {
  getNodes,
  addNodes,
  evacuateNodes,
  modifyNodes,
  migrateNodes
};
