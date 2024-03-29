<template>
  <page-section>
    <b-table
      responsive="md"
      bordered
      head-variant="light"
      :items="nodes"
      :fields="fields"
      show-empty
      :busy.sync="isLoading"
      empty-text="No items available"
    >
      <template #cell(expandRow)="row">
        <b-button
          size="sm"
          variant="light"
          class="btn-icon-only"
          @click="toggleRowDetails(row)"
        >
          <icon-chevron />
        </b-button>
      </template>

      <template #cell(actions)="row">
        <b-button
          v-b-modal.modal-migrate-nodes
          variant="danger"
          size="sm"
          class="mr-2 mt-2"
          @click="getModalInfo(row.item)"
        >
          {{ $t('global.action.migrate') }}
        </b-button>
        <b-button
          v-b-modal.modal-modify-nodes
          variant="success"
          size="sm"
          class="mr-2 mt-2"
          @click="getModalInfo(row.item)"
        >
          {{ $t('global.action.modify') }}
        </b-button>
      </template>

      <template #row-details="{ item }">
        <b-container fluid>
          <div>
            <b-button-group>
              <b-button
                variant="success"
                size="sm"
                class="mr-2 mt-2"
                @click="evacuateGroups(item.name)"
              >
                {{ $t('global.action.evacuate') }}
              </b-button>
            </b-button-group>
          </div>
          <b-row>
            <b-col
              class="mt-2"
              sm="6"
              xl="6"
            >
              <dl>
                <dt>{{ $t('pageNodes.table.name') }}:</dt>
                <dd>{{ item.name }}</dd>
                <dt>{{ $t('pageNodes.table.offline') }}:</dt>
                <dd>{{ item.offline }}</dd>
                <dt>{{ $t('pageNodes.table.masterCandidate') }}:</dt>
                <dd>{{ item.master_candidate }}</dd>
                <dt>{{ $t('pageNodes.table.cNodes') }}:</dt>
                <dd>{{ item.cnodes }}</dd>
                <dt>{{ $t('pageNodes.table.cNos') }}:</dt>
                <dd>{{ item.cnos }}</dd>
                <dt>{{ $t('pageNodes.table.cTotal') }}:</dt>
                <dd>{{ item.ctotal }}</dd>
                <dt>{{ $t('pageNodes.table.masterCandidate') }}:</dt>
                <dd>{{ item.master_candidate }}</dd>
              </dl>
            </b-col>
            <b-col
              class="mt-2"
              sm="6"
              xl="6"
            >
              <dl>
                <dt>{{ $t('pageNodes.table.masterCapable') }}:</dt>
                <dd>{{ item.master_capable }}</dd>
                <dt>{{ $t('pageNodes.table.vmCapable') }}:</dt>
                <dd>{{ item.vm_capable }}</dd>
                <dt>{{ $t('pageNodes.table.mFree') }}:</dt>
                <dd>{{ item.mfree }}</dd>
                <dt>{{ $t('pageNodes.table.mNode') }}:</dt>
                <dd>{{ item.mnode }}</dd>
                <dt>{{ $t('pageNodes.table.mTime') }}:</dt>
                <dd>{{ numberFix(item.mtime) }}</dd>
                <dt>{{ $t('pageNodes.table.mTotal') }}:</dt>
                <dd>{{ item.mtotal }}</dd>
                <dt>{{ $t('pageNodes.table.cpuSpeed') }}:</dt>
                <dd>{{ item.ndparams.cpu_speed }}</dd>
              </dl>
            </b-col>
          </b-row>
        </b-container>
      </template>
    </b-table>
  </page-section>
</template>

<script>
import { actionTypes } from '@/store/modules/nodes';
import { mapState } from 'vuex';
import PageSection from '@/components/Global/PageSection.vue';
import IconChevron from '@carbon/icons-vue/es/chevron--down/20';

export default {
  name: 'NodesTable',
  components: {
    PageSection,
    IconChevron
  },
  props: {
    apiUrl: {
      type: String,
      required: true
    },
    onDataNodes: {
      type: Function,
      required: true
    },
    nodeUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      fields: [
        {
          key: 'expandRow',
          label: '',
          tdClass: 'table-row-expand'
        },
        {
          key: 'name',
          label: this.$t('pageNodes.table.name'),
          sortable: true
        },
        {
          key: 'offline',
          label: this.$t('pageNodes.table.offline')
        },
        {
          key: 'master_candidate',
          label: this.$t('pageNodes.table.masterCandidate')
        },
        {
          key: 'mfree',
          label: this.$t('pageNodes.table.mFree')
        },
        {
          key: 'mnode',
          label: this.$t('pageNodes.table.mNode')
        },
        {
          key: 'actions',
          label: this.$t('global.table.actions'),
          tdClass: 'text-center'
        }
      ],
      items: [
        // {
        //   name: 'cl43gnt0',
        //   offline: 'false',
        //   master_candidate: 'true',
        //   mnode: '59',
        //   secondary_ip: '10.110.3.230',
        //   drained: 'false',
        //   dtotal: 'null',
        //   dfree: 'null',
        //   sptotal: 'null',
        //   mfree: '15777',
        //   pinst_cnt: '0'
        // },
        // {
        //   name: 'cl43gnt1',
        //   offline: 'false',
        //   master_candidate: 'true',
        //   mnode: '45',
        //   secondary_ip: '10.110.3.231',
        //   drained: 'false',
        //   dtotal: 'null',
        //   dfree: 'null',
        //   sptotal: 'null',
        //   mfree: '15818',
        //   pinst_cnt: '1'
        // },
        // {
        //   name: 'cl43gnt2',
        //   offline: 'false',
        //   master_candidate: 'true',
        //   mnode: '45',
        //   secondary_ip: '10.110.3.232',
        //   drained: 'false',
        //   dtotal: 'null',
        //   dfree: 'null',
        //   sptotal: 'null',
        //   mfree: '15818',
        //   pinst_cnt: '0'
        // },
        // {
        //   name: 'cl43gnt3',
        //   offline: 'false',
        //   master_candidate: 'true',
        //   mnode: '45',
        //   secondary_ip: '10.110.3.233',
        //   drained: 'false',
        //   dtotal: 'null',
        //   dfree: 'null',
        //   sptotal: 'null',
        //   mfree: '15817',
        //   pinst_cnt: '0'
        // },
        // {
        //   name: 'cl43gnt4',
        //   offline: 'false',
        //   master_candidate: 'true',
        //   mnode: '45',
        //   secondary_ip: '10.110.3.234',
        //   drained: 'false',
        //   dtotal: 'null',
        //   dfree: 'null',
        //   sptotal: 'null',
        //   mfree: '15818',
        //   pinst_cnt: '0'
        // },
        // {
        //   name: 'cl43gnt5',
        //   offline: 'false',
        //   master_candidate: 'true',
        //   mnode: '46',
        //   secondary_ip: '10.110.235',
        //   drained: 'false',
        //   dtotal: 'null',
        //   dfree: 'null',
        //   sptotal: 'null',
        //   mfree: '15819',
        //   pinst_cnt: '0'
        // }

      ]
    };
  },
  computed: {
    ...mapState({
      isLoading: state => state.nodes.isLoading,
      nodes: state => state.nodes.data,
      error: state => state.nodes.error
    })
  },
  mounted() {
    this.$store.dispatch(actionTypes.getNodes, { apiUrl: this.apiUrl });
  },
  methods: {
    toggleRowDetails(row) {
      row.toggleDetails();
    },
    getModalInfo(item) {
      this.onDataNodes({ item });
    },
    evacuateGroups(name) {
      this.$store.dispatch(actionTypes.evacuateNodes, { apiUrl: this.nodeUrl, nodeName: name })
        .then(() => {})
        .catch(() => {});
    },
    numberFix(number) {
      const numberMin = number / 100000000;
      return numberMin.toFixed(1);
    }
  }
};
</script>
