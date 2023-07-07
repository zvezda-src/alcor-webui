import axios from '@/api/axios';

const getNodes = () => axios.get('/nodes');

const addNodes = apiUrl => axios.post(apiUrl);

const evacuateNodes = apiUrl => axios.post(apiUrl);

const modifyNodes = apiUrl => axios.post(apiUrl);

export default {
  getNodes,
  addNodes,
  evacuateNodes,
  modifyNodes
};
