<template>
  <div>
    <page-section>
      <b-card>
        <template #header>
          <p class="font-weight-bold m-0 text-center">
            {{ cardName }}
          </p>
        </template>
        <ul class="list-group list-unstyled">
          <li class="mb-3">
            <span class="font-weight-bold">Name:</span> {{ clusters.name }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">Master:</span> {{ clusters.master }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">Cluster version:</span> {{ clusters.software_version }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">Protocol version:</span> {{ clusters.protocol_version }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">Config version:</span> {{ clusters.config_version }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">Max running jobs:</span> {{ clusters.max_running_jobs }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">Max tracked jobs:</span> {{ clusters.max_tracked_jobs }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">MAC prefix:</span> {{ clusters.mac_prefix }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">Master netmask:</span> {{ clusters.master_netmask }}
          </li>
        </ul>
      </b-card>
    </page-section>
  </div>
</template>

<script>
import axios from 'axios';
import PageSection from '@/components/Global/PageSection.vue';

export default {
  name: 'ClusterCardsCluster',
  components: {
    PageSection
  },
  data() {
    return {
      cardName: 'Cluster',
      clusters: []
    };
  },
  created() {
    axios.get('https://10.30.5.219:5080/2/info')
      .then(responce => {
        this.clusters = responce.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style scoped>

</style>
