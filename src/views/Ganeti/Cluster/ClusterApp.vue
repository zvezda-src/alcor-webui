<template>
  <b-container fluid="xl">
    <page-title />
    <b-row>
      <b-col xl="12">
        <template v-if="getClusterInfo">
          <card-info :get-cluster-info="getClusterInfo" />
        </template>
        <card-hypervisor />
        <card-backend />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { actionTypes } from '@/store/modules/cluster';
import { mapState } from 'vuex';
import PageTitle from '@/components/Global/PageTitle.vue';
import CardInfo from '@/views/Ganeti/Cluster/ClusterCardInfo.vue';
import CardHypervisor from '@/views/Ganeti/Cluster/ClusterCardHypervisor.vue';
import CardBackend from '@/views/Ganeti/Cluster/ClusterCardBackendParameters.vue';

export default {
  name: 'ClusterApp',
  components: {
    PageTitle,
    CardInfo,
    CardHypervisor,
    CardBackend
  },
  computed: {
    ...mapState({
      isLoading: state => state.cluster.isLoading,
      error: state => state.cluster.error
    }),
    getClusterInfo() {
      return this.$store.state.cluster.data;
    }
  },
  mounted() {
    this.$store.dispatch(actionTypes.getCluster);
  }
  // data() {
  //   return {
  //     apiUrl: '/info'
  //   };
  // }
};
</script>

<style scoped>

</style>
