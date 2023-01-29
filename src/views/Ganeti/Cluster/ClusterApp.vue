<template>
  <b-container fluid="xl">
    <page-title />
    <b-row>
      <b-col xl="12">
        <cluster-card />
        <hypervisor-card />
        <backend-card />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import PageTitle from '@/components/Global/PageTitle.vue';
import ClusterCard from '@/views/Ganeti/Cluster/ClusterCardsCluster.vue';
import HypervisorCard from '@/views/Ganeti/Cluster/ClusterCardsHypervisor.vue';
import BackendCard from '@/views/Ganeti/Cluster/ClusterCardBackendParameters.vue';

export default {
  name: 'ClusterApp',
  components: {
    PageTitle,
    ClusterCard,
    HypervisorCard,
    BackendCard
  }
};
</script>

<style scoped>

</style>
