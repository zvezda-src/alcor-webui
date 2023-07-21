<template>
  <b-container fluid="xl">
    <page-title />
    <page-section>
      <groups-buttons-panel />
      <groups-table :api-url="apiUrl" />
    </page-section>
    <groups-add-modal :api-url="apiUrl" />
    <groups-rename-modal />
    <groups-modify-modal />
    <groups-assigin-nodes-modal />
  </b-container>
</template>

<script>
import PageTitle from '@/components/Global/PageTitle.vue';
import PageSection from '@/components/Global/PageSection.vue';
import GroupsTable from '@/views/Ganeti/Groups/GroupsTable.vue';
import GroupsButtonsPanel from '@/views/Ganeti/Groups/GroupsButtonsPanel.vue';
import GroupsAddModal from '@/views/Ganeti/Groups/GroupsAddModal.vue';
import GroupsRenameModal from '@/views/Ganeti/Groups//GroupsRenameModal.vue';
import GroupsModifyModal from '@/views/Ganeti/Groups/GroupsModifyModal.vue';
import GroupsAssiginNodesModal from '@/views/Ganeti/Groups/GroupsAssiginNodesModal.vue';

export default {
  name: 'GroupsApp',
  components: {
    PageTitle,
    PageSection,
    GroupsTable,
    GroupsButtonsPanel,
    GroupsAddModal,
    GroupsRenameModal,
    GroupsModifyModal,
    GroupsAssiginNodesModal
  },
  data() {
    return {
      apiUrl: '/groups'
    };
  }
};
</script>

<style scoped>

</style>
