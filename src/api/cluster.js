import axios from '@/api/axios';

const getCluster = () => axios.get('/info');

export default {
  getCluster
};
