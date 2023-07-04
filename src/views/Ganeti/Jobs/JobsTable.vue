<template>
  <page-section>
    <b-table
      responsive="md"
      bordered
      head-variant="light"
      :items="jobs"
      :fields="fields"
      show-empty
      :fixed="fixed"
      :busy.sync="isLoading"
      empty-text="No items available"
    />
  </page-section>
</template>

<script>
import { actionTypes } from '@/store/modules/jobs';
import { mapState } from 'vuex';
import PageSection from '@/components/Global/PageSection.vue';

export default {
  name: 'JobsTable',
  components: {
    PageSection
  },
  props: {
    apiUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      fixed: true,
      fields: [
        {
          key: 'id',
          label: this.$t('pageJobs.table.id'),
          sortable: true
        },
        {
          key: 'status',
          label: this.$t('pageJobs.table.status')
        },
        {
          key: 'summary[0]',
          label: this.$t('pageJobs.table.methods')
        }
      ]
    };
  },
  computed: {
    ...mapState({
      isLoading: state => state.jobs.isLoading,
      jobs: state => state.jobs.data,
      error: state => state.jobs.error
    })
  },
  mounted() {
    this.$store.dispatch(actionTypes.getJobs, { apiUrl: this.apiUrl });
  }
};
</script>
