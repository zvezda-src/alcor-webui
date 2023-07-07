<template>
  <div>
    <b-modal
      id="modal-add-instances"
      ref="modal"
      size="lg"
      :title="$t('pageInstances.addModal.title')"
      @hidden="resetModal"
    >
      <b-form
        id="form-add-instances"
        @submit.prevent="handleSubmitAddInstances"
      >
        <b-container>
          <b-row>
            <b-col sm="6">
              <b-form-group
                :label="$t('pageInstances.addModal.name')"
                label-for="name-input"
                invalid-feedback="Name is required"
                :state="nameState"
              >
                <b-form-input
                  id="name-input"
                  v-model="form.instance_name"
                  :placeholder="$t('pageInstances.addModal.placeholderName')"
                  :state="nameState"
                  required
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageInstances.addModal.node')"
                label-for="node-input"
                invalid-feedback="Node is required"
                :state="nodeState"
              >
                <b-form-select
                  id="node-input"
                  v-model="form.pnode"
                  :options="nodesList"
                  value-field="name"
                  text-field="name"
                  :state="nodeState"
                  required
                >
                  <template #first>
                    <b-form-select-option
                      value="null"
                    >
                      {{ $t('pageInstances.addModal.placeholderNodes') }}
                    </b-form-select-option>
                  </template>
                </b-form-select>
              </b-form-group>
              <b-form-group
                :label="$t('pageInstances.addModal.diskSize')"
                label-for="disk-input"
                invalid-feedback="Disk is required"
                :state="diskState"
              >
                <b-form-input
                  id="disk-input"
                  v-model="form.disks.size"
                  :placeholder="$t('pageInstances.addModal.placeholderDiskSize')"
                  :state="diskState"
                  required
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageInstances.addModal.maxMem')"
                label-for="maxmem-input"
                invalid-feedback="Maxmem is required"
                :state="maxState"
              >
                <b-form-input
                  id="maxmem-input"
                  v-model.number="form.maxmem"
                  :placeholder="$t('pageInstances.addModal.placeholderMaxMem')"
                  type="number"
                  :state="maxState"
                  required
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageInstances.addModal.minMem')"
                label-for="minmem-input"
                invalid-feedback="Minmem is required"
                :state="minState"
              >
                <b-form-input
                  id="minmem-input"
                  v-model.number="form.minmem"
                  :placeholder="$t('pageInstances.addModal.placeholderMinMem')"
                  type="number"
                  :state="minState"
                  required
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageInstances.addModal.vcpus')"
                label-for="vcpus-input"
                invalid-feedback="Vcpus is required"
                :state="vcpusState"
              >
                <b-form-input
                  id="vcpus-input"
                  v-model="form.vcpus"
                  :placeholder="$t('pageInstances.addModal.placeholderVcpus')"
                  type="number"
                  :state="vcpusState"
                  required
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageInstances.addModal.ignoreIpolicy')"
                label-for="ignore-ipolicy"
              >
                <b-form-select
                  id="ignore-ipolicy"
                  v-model="form.ignore_ipolicy"
                  :options="ignoreipolicyces"
                />
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                :label="$t('pageInstances.addModal.bootOrder')"
                label-for="bootorder-input"
                invalid-feedback="Boot order is required"
              >
                <b-form-input
                  id="bootorder-input"
                  v-model="form.bootorder"
                  :placeholder="$t('pageInstances.addModal.placeholderBootOrder')"
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageInstances.addModal.cdromImagePath')"
                label-for="cdromimagepath-input"
                invalid-feedback="Cdrom image path is required"
              >
                <b-form-input
                  id="cdromimagepath-input"
                  v-model="form.cdromimagepath"
                  :placeholder="$t('pageInstances.addModal.placeholderCdromImagePath')"
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageInstances.addModal.cdromDiskType')"
                label-for="cdromdisktype-input"
                invalid-feedback="Cdrom disk type is required"
              >
                <b-form-input
                  id="cdromdisktype-input"
                  v-model="form.cdromdisktype"
                  :placeholder="$t('pageInstances.addModal.placeholderCdromDiskType')"
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageInstances.addModal.vncBindAddress')"
                label-for="vncbindaddress-input"
                invalid-feedback="Vnc bind address is required"
              >
                <b-form-input
                  id="vncbindaddress-input"
                  v-model="form.vncbindaddress"
                  :placeholder="$t('pageInstances.addModal.placeholderVncBindAddress')"
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageInstances.addModal.ipCheck')"
                label-for="ip-check"
              >
                <b-form-select
                  id="ip-check"
                  v-model="form.ip_check"
                  :options="ipchecks"
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageInstances.addModal.nameCheck')"
                label-for="name-check"
              >
                <b-form-select
                  id="name-check"
                  v-model="form.name_check"
                  :options="namecheckes"
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageInstances.addModal.noInstall')"
                label-for="no-install"
              >
                <b-form-select
                  id="no-install"
                  v-model="form.no_install"
                  :options="noinstalls"
                />
              </b-form-group>
            </b-col>
          </b-row>
        </b-container>
      </b-form>
      <template #modal-footer="{ cancel }">
        <b-button
          variant="secondary"
          size="sm"
          @click="cancel()"
        >
          {{ $t('global.action.cancel') }}
        </b-button>
        <b-button
          form="form-add-instances"
          type="submit"
          variant="primary"
          size="sm"
          @click="onOk"
        >
          {{ $t('global.action.save') }}
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import axios from '@/api/axios';
import { actionTypes } from '@/store/modules/nodes';

export default {
  name: 'InstancesAddModal',
  data() {
    return {
      form: {
        instance_name: '',
        pnode: null,
        maxmem: '',
        minmem: '',
        vcpus: '',
        bootorder: '',
        cdromimagepath: '',
        cdromdisktype: '',
        vncbindaddress: '',
        ignore_ipolicy: true,
        ip_check: false,
        name_check: false,
        no_install: true,
        disks: [{ size: '1024' }],
        os: 'noop',
        mode: 'create',
        nics: [{ mode: 'bridged', link: 'vmbr0' }]
      },
      nodes: [
        { text: this.$t('pageInstances.addModal.placeholderNodes'), value: null }],
      ignoreipolicyces: [true, false],
      ipchecks: [true, false],
      namecheckes: [true, false],
      noinstalls: [true, false],
      nameState: null,
      nodeState: null,
      diskState: null,
      maxState: null,
      minState: null,
      vcpusState: null
    };
  },
  computed: {
    nodesList() {
      return this.$store.state.nodes.data;
    }
  },
  mounted() {
    this.$store.dispatch(actionTypes.getNodes, { apiUrl: this.apiUrl });
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.Namestate = valid;
      this.Nodestate = valid;
      this.Diskstate = valid;
      this.Maxstate = valid;
      this.Minstate = valid;
      this.Vcpusstate = valid;
      return valid;
    },
    resetModal() {
      this.form.instance_name = '';
      this.form.pnode = null;
      this.form.disks.size = '';
      this.form.maxmem = '';
      this.form.minmem = '';
      this.form.vcpus = '';
      this.nameState = null;
      this.nodeState = null;
      this.diskState = null;
      this.maxState = null;
      this.minState = null;
      this.vcpusState = null;
      this.$emit('hidden');
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return;
      }

      // Hide the modal manually
      this.$nextTick(() => {
        const dataInstances = this.form;
        // eslint-disable-next-line
      console.log(JSON.stringify(dataInstances));

        axios.post('/instance', dataInstances)
          .then(response => {
          // eslint-disable-next-line
          console.log(response.data);
            this.$bvModal.hide('modal-add-instances');
            setTimeout(() => {
              this.$router.go(0);
            }, 1000);
          })
          .catch(error => {
          // eslint-disable-next-line
          console.log(error);
          });
      });
    }
  }
};
</script>
