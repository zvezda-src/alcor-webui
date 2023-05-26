import axios from '@/api/axios';

const getCluster = () => axios.get('/info');

const modifyCluster = () => axios.put('/info');

export default {
  getCluster,
  modifyCluster
};
