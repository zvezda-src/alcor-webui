<template>
  <dashboard-card :title="('Jobs')">
    <b-row class="mt-3">
      <b-col sm="6">
        <dl>
          <dt />
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
  name: 'DashboardJobs',
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
