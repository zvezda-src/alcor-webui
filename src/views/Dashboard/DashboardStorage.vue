<template>
  <dashboard-card :title="$t('pageDashboard.cardStorage')" />
</template>

<script>
import DashboardCard from './DashboardCard.vue';

export default {
  name: 'DashboardStorage',
  components: {
    DashboardCard
  }
};
</script>

<style scoped>

</style>
