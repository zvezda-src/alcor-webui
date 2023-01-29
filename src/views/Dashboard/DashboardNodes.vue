<template>
  <dashboard-card :title="('Nodes')">
    <b-row
      class="mt-3"
      v-for="data in nodes"
      :key="data.id"
    >
      <b-col sm="6">
        <dl>
          <dt>{{ nodeId }}</dt>
          <dd>{{ data.id }}</dd>
        </dl>
      </b-col>
      <b-col sm="6">
        <dl>
          <dt>{{ nodeUri }}</dt>
          <dd>{{ data.uri }}</dd>
        </dl>
      </b-col>
    </b-row>
  </dashboard-card>
</template>

<script>
import axios from 'axios';
import DashboardCard from './DashboardCard.vue';

export default {
  name: 'DashboardNodes',
  components: {
    DashboardCard
  },
  data() {
    return {
      nodeId: 'id',
      nodeUri: 'uri',
      nodes: [],
      errors: []
    };
  },
  created() {
    axios.get('http://clustergnt43.zvz.lan:5080/2/nodes')
      .then(responce => {
        this.nodes = responce.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style scoped>

</style>
