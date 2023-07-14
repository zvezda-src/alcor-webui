import axios from '@/api/axios';

const getInstances = apiUrl => axios.get(apiUrl);

const addInstances = (apiUrl, data) => axios.post(apiUrl, data);

const deleteInstances = (apiUrl, instanceName) => axios.delete(
  `${apiUrl}/${instanceName}`,
  { data: { instance_name: instanceName } }
);

const startUpInstances = (apiUrl, instanceName) => axios.put(`${apiUrl}/${instanceName}/startup`);

const modifyInstances = (apiUrl, instanceName, data) => axios.put(`${apiUrl}/${instanceName}/modify`, data);

const renameInstances = (apiUrl, instanceName, data) => axios.put(`${apiUrl}/${instanceName}/rename`, data);

const growInstances = (apiUrl, instanceName, data) => axios.post(`${apiUrl}/${instanceName}/disk/0/grow`, data);

const migrateInstances = (apiUrl, instanceName, data) => axios.put(`${apiUrl}/${instanceName}/migrate`, data);

const rebootInstances = (apiUrl, instanceName, data) => axios.post(`${apiUrl}/${instanceName}/reboot`, data);

const shutDownInstances = (apiUrl, instanceName, data) => axios.put(`${apiUrl}/${instanceName}/shutdown`, data);

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
