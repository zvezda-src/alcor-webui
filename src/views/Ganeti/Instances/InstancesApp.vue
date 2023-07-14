<template>
  <b-container fluid="xl">
    <page-title />
    <page-section>
      <instances-buttons-panel />
      <instances-table
        :api-url="apiUrl"
        :on-data-instances="onDataInstances"
      />
    </page-section>
    <instances-add-modal
      :api-url="apiUrl"
      :node-url="nodeUrl"
    />
    <instances-modify-modal
      :modify="instanceData"
      :instance-name="instanceName"
      :api-url="apiUrl"
    />
    <instances-rename-modal
      :instance-name="instanceName"
      :api-url="apiUrl"
    />
    <instances-shut-down-modal
      :instance-name="instanceName"
      :api-url="apiUrl"
    />
    <instances-grow-modal
      :instance-name="instanceName"
      :api-url="apiUrl"
    />
    <instances-reboot-modal
      :instance-name="instanceName"
      :api-url="apiUrl"
    />
    <instances-mirgate-modal
      :migrate="instanceData"
      :instance-name="instanceName"
      :api-url="apiUrl"
      :node-url="nodeUrl"
    />
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
      nodeUrl: '/nodes',
      instanceData: {},
      instanceName: ''
    };
  },
  methods: {
    onDataInstances(data) {
      this.instanceData = data.item;

      this.instanceName = data.item.name;
    }
  }
};
</script>

<style scoped>

</style>
