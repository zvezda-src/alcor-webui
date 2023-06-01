import axios from '@/api/axios';

const getInstances = apiUrl => axios.get(apiUrl);

const addInstances = apiUrl => axios.post(apiUrl);

const deleteInstances = (apiUrl, name) => axios.delete(
  `${apiUrl}/delete/${name}`,
  { data: name }
);

const startUpInstances = apiUrl => axios.put(apiUrl);

const modifyInstances = apiUrl => axios.put(apiUrl);

const renameInstances = apiUrl => axios.put(apiUrl);

const growInstances = apiUrl => axios.post(apiUrl);

const migrateInstances = apiUrl => axios.put(apiUrl);

const rebootInstances = apiUrl => axios.post(apiUrl);

const shutDownInstances = apiUrl => axios.put(apiUrl);

export default {
  getInstances,
  addInstances,
  deleteInstances,
  startUpInstances,
  modifyInstances,
  renameInstances,
  growInstances,
  migrateInstances,
  rebootInstances,
  shutDownInstances

};
