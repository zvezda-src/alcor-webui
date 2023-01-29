<template>
  <b-container fluid="xl">
    <page-title />
    <page-section />
  </b-container>
</template>

<script>
import PageTitle from '@/components/Global/PageTitle.vue';
import PageSection from '@/components/Global/PageSection.vue';

export default {
  name: 'NetworksApp',
  components: {
    PageTitle,
    PageSection
  }
};
</script>

<style scoped>

</style>
