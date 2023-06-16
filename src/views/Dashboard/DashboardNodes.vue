<template>
  <dashboard-card title="Nodes">
    <api-loading v-if="isLoading" />
    <error-message v-if="error" />
    <div
      v-if="nodes"
    >
      <b-row
        class="mt-3"
      >
        <b-col sm="6">
          <dl>
            <dt>name</dt>
            <dd
              v-for="node in nodes"
              :key="node.index"
            >
              {{ node.name }}
            </dd>
          </dl>
        </b-col>
        <b-col sm="6">
          <dl />
        </b-col>
      </b-row>
    </div>
  </dashboard-card>
</template>

<script>
import { actionTypes } from '@/store/modules/nodes';
import { mapState } from 'vuex';
import ErrorMessage from '@/components/Global/ErrorMessage.vue';
import ApiLoading from '@/components/Global/ApiLoading.vue';
import DashboardCard from './DashboardCard.vue';

export default {
  name: 'DashboardNodes',
  components: {
    DashboardCard,
    ApiLoading,
    ErrorMessage
  },
  props: {
    nodesApi: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.nodes.isLoading,
      nodes: state => state.nodes.data,
      error: state => state.nodes.error
    })
  },
  mounted() {
    this.$store.dispatch(actionTypes.getNodes, { apiUrl: this.nodesApi });
  }
};
</script>

<style scoped>

</style>
