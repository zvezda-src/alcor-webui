<template>
  <dashboard-card :title="$t('pageDashboard.cardGlusterVolumes')">
    <b-row class="mt-3">
      <b-col sm="6">
        <dl>
          <dt>null</dt>
          <dd />
        </dl>
      </b-col>
      <b-col sm="6">
        <dl>
          <dt />
          <dd />
        </dl>
      </b-col>
    </b-row>
  </dashboard-card>
</template>

<script>
import DashboardCard from './DashboardCard.vue';

export default {
  name: 'DashboardGluster',
  components: {
    DashboardCard
  },
  data() {
    return {};
  }
};
</script>

<style scoped>

</style>
