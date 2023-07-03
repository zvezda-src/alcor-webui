<template>
  <dashboard-card :title="$t('pageDashboard.cardCpu')" />
</template>

<script>
import DashboardCard from './DashboardCard.vue';

export default {
  name: 'DashboardCpu',
  components: {
    DashboardCard
  }
};
</script>

<style scoped>

</style>
