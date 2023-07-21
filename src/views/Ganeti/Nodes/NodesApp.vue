<template>
  <b-container fluid="xl">
    <page-title />
    <page-section>
      <nodes-buttons-panel />
      <nodes-table
        :api-url="apiUrl"
        :node-url="nodeUrl"
        :on-data-nodes="onDataNodes"
      />
    </page-section>
    <nodes-add-modal />
    <nodes-modify-modal
      :api-url="apiUrl"
      :node-name="nodeName"
      :modify="nodeData"
    />
    <nodes-evacuate-modal
      :api-url="apiUrl"
      :node-name="nodeName"
    />
    <nodes-migrate-modal
      :api-url="apiUrl"
      :node-name="nodeName"
      :migrate="nodeData"
    />
  </b-container>
</template>

<script>
import PageTitle from '@/components/Global/PageTitle.vue';
import PageSection from '@/components/Global/PageSection.vue';
import NodesTable from '@/views/Ganeti/Nodes/NodesTable.vue';
import NodesButtonsPanel from '@/views/Ganeti/Nodes/NodesButtonsPanel.vue';
import NodesAddModal from '@/views/Ganeti/Nodes/NodesAddModal.vue';
import NodesModifyModal from '@/views/Ganeti/Nodes/NodesModifyModal.vue';
import NodesEvacuateModal from '@/views/Ganeti/Nodes/NodesEvacuateModal.vue';
import NodesMigrateModal from '@/views/Ganeti/Nodes/NodesMigrateModal.vue';

export default {
  name: 'NodesApp',
  components: {
    PageTitle,
    PageSection,
    NodesTable,
    NodesButtonsPanel,
    NodesAddModal,
    NodesModifyModal,
    NodesEvacuateModal,
    NodesMigrateModal
  },
  data() {
    return {
      apiUrl: '/nodes',
      nodeUrl: '/noda',
      nodeName: '',
      nodeData: {}
    };
  },
  methods: {
    onDataNodes(data) {
      this.nodeData = data.item;

      this.nodeName = data.item.name;
    }
  }
};
</script>
