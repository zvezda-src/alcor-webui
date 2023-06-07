<template>
  <b-container fluid="xl">
    <page-title />
    <div v-if="isLoading">
      Loading...
    </div>
    <div v-if="error">
      Api not available
    </div>
    <div v-if="cluster">
      <b-row>
        <b-col xl="12">
          <div class="text-right">
            <b-button
              type="submit"
              variant="primary"
              :disabled="isLoading"
            >
              Save
            </b-button>
          </div>
          <b-card no-body>
            <b-tabs
              pills
              card
            >
              <b-tab
                title="Cluster"
                active
              >
                <card-info :cluster="cluster" />
              </b-tab>
              <b-tab
                title="Hypervisor"
              >
                <card-hypervisor :cluster="cluster" />
              </b-tab>
              <b-tab title="Backend">
                <card-backend :cluster="cluster" />
              </b-tab>
              <b-tab
                title="Disk params"
              >
                <card-disk-params :cluster="cluster" />
              </b-tab>
              <b-tab
                title="Node params"
              >
                <card-node-params :cluster="cluster" />
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import { actionTypes } from '@/store/modules/cluster';
import { mapState } from 'vuex';
import PageTitle from '@/components/Global/PageTitle.vue';
import CardInfo from '@/views/Ganeti/Cluster/ClusterCardInfo.vue';
import CardHypervisor from '@/views/Ganeti/Cluster/ClusterCardHypervisor.vue';
import CardBackend from '@/views/Ganeti/Cluster/ClusterCardBackendParameters.vue';
import CardDiskParams from '@/views/Ganeti/Cluster/ClusterCardDiskParams.vue';
import CardNodeParams from '@/views/Ganeti/Cluster/ClusterCardNodeParams.vue';

export default {
  name: 'ClusterApp',
  components: {
    PageTitle,
    CardInfo,
    CardHypervisor,
    CardBackend,
    CardDiskParams,
    CardNodeParams
  },
  computed: {
    ...mapState({
      isLoading: state => state.cluster.isLoading,
      cluster: state => state.cluster.data,
      error: state => state.cluster.error
    })
  },
  mounted() {
    this.$store.dispatch(actionTypes.getCluster);
  }
};
</script>
