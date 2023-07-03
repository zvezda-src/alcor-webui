<template>
  <dashboard-card :title="$t('pageDashboard.cardInstances')">
    <api-loading v-if="isLoading" />
    <error-message v-if="error" />
    <div v-if="instances">
      <b-row
        class="mt-3"
      >
        <b-col sm="6">
          <dl>
            <dt>{{ $t('pageDashboard.cardName') }}</dt>
            <dd
              v-for="instanceName in instances"
              :key="instanceName.index"
            >
              {{ instanceName.name }}
            </dd>
          </dl>
        </b-col>
        <b-col sm="6">
          <dl>
            <dt>{{ $t('pageDashboard.cardStatus') }}</dt>
            <dd
              v-for="instanceStatus in instances"
              :key="instanceStatus.index"
            >
              {{ instanceStatus.status }}
            </dd>
          </dl>
        </b-col>
      </b-row>
    </div>
  </dashboard-card>
</template>

<script>
import { actionTypes } from '@/store/modules/instances';
import { mapState } from 'vuex';
import ApiLoading from '@/components/Global/ApiLoading.vue';
import ErrorMessage from '@/components/Global/ErrorMessage.vue';
import DashboardCard from './DashboardCard.vue';

export default {
  name: 'DashboardInstances',
  components: {
    DashboardCard,
    ApiLoading,
    ErrorMessage
  },
  props: {
    instancesApi: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.instances.isLoading,
      instances: state => state.instances.data,
      error: state => state.instances.error
    })
  },
  mounted() {
    this.$store.dispatch(actionTypes.getInstances, { apiUrl: this.instancesApi });
  }
};
</script>

<style scoped>

</style>
