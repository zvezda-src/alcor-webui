<template>
  <b-container fluid="xl">
    <page-title />
    <page-section>
      <instances-buttons-panel />
      <instances-table
        :api-url="apiUrl"
        :on-data="onData"
      />
    </page-section>
    <instances-add-modal />
    <instances-modify-modal :modifydata="instanceData" />
    <instances-rename-modal />
    <instances-shut-down-modal />
    <instances-grow-modal />
    <instances-reboot-modal />
    <instances-mirgate-modal />
  </b-container>
</template>

<script>
import PageTitle from '@/components/Global/PageTitle.vue';
import PageSection from '@/components/Global/PageSection.vue';
import InstancesTable from '@/views/Ganeti/Instances/InstancesTable.vue';
import InstancesButtonsPanel from '@/views/Ganeti/Instances/InstancesButtonsPanel.vue';
import InstancesAddModal from '@/views/Ganeti/Instances/InstancesAddModal.vue';
import InstancesModifyModal from '@/views/Ganeti/Instances/InstancesModifyModal.vue';
import InstancesRenameModal from '@/views/Ganeti/Instances/InstancesRenameModal.vue';
import InstancesShutDownModal from '@/views/Ganeti/Instances/InstancesShutDownModal.vue';
import InstancesGrowModal from '@/views/Ganeti/Instances/InstancesGrowModal.vue';
import InstancesRebootModal from '@/views/Ganeti/Instances/InstancesRebootModal.vue';
import InstancesMirgateModal from '@/views/Ganeti/Instances/InstancesMirgateModal.vue';

export default {
  name: 'InstancesApp',
  components: {
    PageTitle,
    PageSection,
    InstancesTable,
    InstancesButtonsPanel,
    InstancesAddModal,
    InstancesModifyModal,
    InstancesRenameModal,
    InstancesShutDownModal,
    InstancesGrowModal,
    InstancesRebootModal,
    InstancesMirgateModal

  },
  data() {
    return {
      apiUrl: '/instance',
      instanceData: {}
    };
  },
  methods: {
    onDataInstances(data) {
      // eslint-disable-next-line
      this.instanceData = data.item
    }
  }
};
</script>

<style scoped>

</style>
