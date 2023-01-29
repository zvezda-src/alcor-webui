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
            <span class="font-weight-bold">minmem:</span> {{ backend.minmem }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">maxmem:</span> {{ backend.maxmem }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">vcpus:</span> {{ backend.vcpus }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">auto balance:</span> {{ backend.auto_balance }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">always failover:</span> {{ backend.always_failover }}
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
  name: 'ClusterCardBackendParameters',
  components: {
    PageSection
  },
  data() {
    return {
      cardName: 'Backend parameters',
      backend: []
    };
  },
  created() {
    axios.get('https://10.30.5.219:5080/2/info')
      .then(responce => {
        this.backend = responce.data.beparams.default;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style scoped>

</style>
