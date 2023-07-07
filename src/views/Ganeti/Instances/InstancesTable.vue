<template>
  <page-section>
    <b-table
      responsive="md"
      bordered
      head-variant="light"
      :busy.sync="isLoading"
      :items="items"
      :fields="fields"
      show-empty
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
          variant="danger"
          size="sm"
          class="mr-2 mt-2"
          @click="deleteInstances(row.item.name)"
          :disabled="isLoading"
        >
          {{ $t('global.action.delete') }}
        </b-button>
        <b-button
          variant="success"
          size="sm"
          class="mr-2 mt-2"
          @click="startUpInstances(row.item.name)"
          :disabled="isLoading"
        >
          {{ $t('global.action.startUp') }}
        </b-button>
      </template>

      <template #row-details="{ item }">
        <b-container fluid>
          <div>
            <b-button-group>
              <b-button
                v-b-modal.modal-modify-instances
                squared
                size="sm"
                class="mr-2 mt-2"
                variant="warning"
                @click="getModalInfo(item)"
              >
                {{ $t('global.action.modify') }}
              </b-button>
              <b-button
                v-b-modal.modal-rename-instances
                variant="info"
                size="sm"
                class="mr-2 mt-2"
                @click="getModalInfo(item)"
              >
                {{ $t('global.action.rename') }}
              </b-button>
              <b-button
                v-b-modal.modal-grow-instances
                variant="info"
                size="sm"
                class="mr-2 mt-2"
                @click="getModalInfo(item)"
              >
                {{ $t('global.action.grow') }}
              </b-button>
              <b-button
                v-b-modal.modal-shutdown-instances
                variant="danger"
                size="sm"
                class="mr-2 mt-2"
                @click="getModalInfo(item)"
              >
                {{ $t('global.action.shutDown') }}
              </b-button>
              <b-button
                v-b-modal.modal-reboot-instances
                variant="danger"
                size="sm"
                class="mr-2 mt-2"
                @click="getModalInfo(item)"
              >
                {{ $t('global.action.reboot') }}
              </b-button>
              <b-button
                v-b-modal.modal-migrate-instances
                variant="danger"
                size="sm"
                class="mr-2 mt-2"
                @click="getModalInfo(item)"
              >
                {{ $t('global.action.migrate') }}
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
                <dt>{{ $t('pageInstances.table.name') }}:</dt>
                <dd>{{ item.name }}</dd>
                <dt>{{ $t('pageInstances.table.adminState') }}:</dt>
                <dd>{{ item.admin_state }}</dd>
                <dt>{{ $t('pageInstances.table.os') }}:</dt>
                <dd>{{ item.os }}</dd>
                <dt>{{ $t('pageInstances.table.pNode') }}:</dt>
                <dd>{{ item.pnode }}</dd>
                <dt>{{ $t('pageInstances.table.diskTemplate') }}:</dt>
                <dd>{{ item.disk_template }}</dd>
                <dt>{{ $t('pageInstances.table.vcpus') }}:</dt>
                <dd>{{ item.beparams.vcpus }}</dd>
                <dt>{{ $t('pageInstances.table.alwaysFailover') }}:</dt>
                <dd>{{ item.beparams.always_failover }}</dd>
                <dt>{{ $t('pageInstances.table.nicMacs') }}:</dt>
                <dd>{{ item.beparams.auto_balance }}</dd>
              </dl>
            </b-col>
            <b-col
              class="mt-2"
              sm="6"
              xl="6"
            >
              <dl>
                <dt>{{ $t('pageInstances.table.cTime') }}:</dt>
                <dd>{{ item.ctime }}</dd>
                <dt>{{ $t('pageInstances.table.diskUsages') }}:</dt>
                <dd>{{ item.disk_usage }}</dd>
                <dt>{{ $t('pageInstances.table.maxMem') }}:</dt>
                <dd>{{ item.beparams.maxmem }}</dd>
                <dt>{{ $t('pageInstances.table.minMem') }}:</dt>
                <dd>{{ item.beparams.minmem }}</dd>
                <dt>{{ $t('pageInstances.table.diskType') }}:</dt>
                <dd>{{ item.hvparams.disk_type }}</dd>
                <dt>{{ $t('pageInstances.table.status') }}:</dt>
                <dd>{{ item.status }}</dd>
                <dt>{{ $t('pageInstances.table.nicType') }}:</dt>
                <dd>{{ item.hvparams.nic_type }}</dd>
                <dt>{{ $t('pageInstances.table.mTime') }}:</dt>
                <dd>{{ item.mtime }}</dd>
              </dl>
            </b-col>
          </b-row>
        </b-container>
      </template>
    </b-table>
  </page-section>
</template>

<script>
import axios from '@/api/axios';
import { actionTypes } from '@/store/modules/instances';
import { mapState } from 'vuex';
import PageSection from '@/components/Global/PageSection.vue';
import IconChevron from '@carbon/icons-vue/es/chevron--down/20';

export default {
  name: 'InstancesTable',
  components: {
    PageSection,
    IconChevron
  },
  props: {
    apiUrl: {
      type: String,
      required: true
    },
    onDataInstances: {
      type: Function,
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
          label: this.$t('pageInstances.table.name'),
          sortable: true
        },
        {
          key: 'admin_state',
          label: this.$t('pageInstances.table.adminState')
        },
        {
          key: 'status',
          label: this.$t('pageInstances.table.status')
        },
        {
          key: 'os',
          label: this.$t('pageInstances.table.os')
        },
        {
          key: 'pnode',
          label: this.$t('pageInstances.table.pNode')
        },
        {
          key: 'disk_template',
          label: this.$t('pageInstances.table.diskTemplate')
        },
        {
          key: 'actions',
          label: this.$t('global.table.actions'),
          tdClass: 'text-center'
        }
      ],
      items: [
        {
          name: 'antix-21-template',
          admin_state: 'down',
          os: 'noop',
          pnode: 'cl43gnt1',
          disk_template: 'gluster',
          nic_ips: 'null',
          nic_macs: 'aa:00:00:bb:0b:af',
          nic_modes: 'bridged',
          nic_uuids: '2c5a17c5-f5ab-4c33-a22b-2f2dd82cce0c',
          nic_names: 'null',
          nic_links: 'vmbr0',
          nic_networks: 'null',
          nic_bridges: 'vmbr0',
          network_port: '11000',
          beparams: [{
            vcpus: '1'
          }],
          hvparams: [
            {
              disk_type: 'fff'
            }
          ]
        },
        {
          name: 'test',
          admin_state: 'down',
          os: 'noop',
          pnode: 'cl43gnt1',
          disk_template: 'gluster',
          nic_ips: 'null',
          nic_macs: 'aa:00:00:bb:0b:af',
          nic_modes: 'bridged',
          nic_uuids: '2c5a17c5-f5ab-4c33-a22b-2f2dd82cce0c',
          nic_names: 'null',
          nic_links: 'vmbr0',
          nic_networks: 'null',
          nic_bridges: 'vmbr0',
          network_port: '11000',
          beparams: [{
            vcpus: '2'
          }],
          hvparams: [
            {
              disk_type: 'fff'
            }
          ]
        }
      ]
    };
  },
  computed: {
    ...mapState({
      isLoading: state => state.instances.isLoading,
      instances: state => state.instances.data,
      error: state => state.instances.error
    })
  },
  mounted() {
    this.fetchInstances();
  },
  methods: {
    fetchInstances() {
      this.$store.dispatch(actionTypes.getInstances, { apiUrl: this.apiUrl });
    },
    deleteInstances(name) {
      this.isBusy = true;

      this.$bvModal.msgBoxConfirm('Please confirm that you want to delete.', {
        title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      })
        .then(value => {
          if (value === true) {
            axios.delete(`instance/${name}`, { data: { instance_name: name } })
              .then(() => {
                setTimeout(() => {
                  this.fetchInstances();
                }, 1000);
              })
            // this.$store.dispatch(actionTypes.deleteInstances, {
            //   apiUrl: this.apiUrl,
            //   name: 'alcor',
            //   data: this.name
            // })
              .catch(() => {});
          } else {
            this.isBusy = false;
          }
        })
        .catch(err => {
          // eslint-disable-next-line
          console.log(err);
        });
    },
    startUpInstances(name) {
      this.isBusy = true;

      axios.put(`instance/${name}/startup`, { instance_name: name })
        .then(() => {
          setTimeout(() => {
            this.fetchInstances();
            this.isBusy = false;
          }, 1000);
        })
        .catch(() => {
          this.isBusy = false;
        });
    },
    toggleRowDetails(row) {
      row.toggleDetails();
    },
    getModalInfo(item) {
      this.onDataInstances({ item });
    }
  }
};
</script>

<style scoped>

</style>
