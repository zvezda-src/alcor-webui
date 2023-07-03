<template>
  <dashboard-card :title="$t('pageDashboard.cardMemory')" />
</template>

<script>
import DashboardCard from './DashboardCard.vue';

export default {
  name: 'DashboardMemory',
  components: {
    DashboardCard
  }
};
</script>

<style scoped>

</style>
