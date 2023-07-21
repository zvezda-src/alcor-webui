<template>
  <div>
    <b-modal
      id="modal-modify-nodes"
      ref="modal"
      :title="$t('pageNodes.modifyModal.title')"
    >
      <b-form
        id="form-modify-groups"
        @submit.prevent="handleSubmitModifyNodes"
      >
        <b-container>
          <b-row>
            <b-col sm="6">
              <b-form-group
                :label="$t('pageNodes.modifyModal.masterCandidate')"
                label-for="mastercandidate-input"
              >
                <b-form-select
                  id="mastercandidate-input"
                  v-model="form.master_candidate"
                  :options="candidateList"
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageNodes.modifyModal.masterCapable')"
                label-for="mastercapable-input"
              >
                <b-form-select
                  id="mastercapable-input"
                  v-model="form.master_capable"
                  :options="capableList"
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageNodes.modifyModal.cpuSpeed')"
                label-for="cpuspeed-input"
              >
                <b-form-input
                  id="cpuspeed-input"
                  v-model="form.cpu_speed"
                  type="number"
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageNodes.modifyModal.spindleCount')"
                label-for="spindlecount-input"
              >
                <b-form-input
                  id="spindlecount-input"
                  v-model="form.spindle_count"
                  type="number"
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageNodes.modifyModal.sshPort')"
                label-for="sshport-input"
              >
                <b-form-input
                  id="sshport-input"
                  v-model="form.ssh_port"
                  type="number"
                />
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                :label="$t('pageNodes.modifyModal.oobProgram')"
                label-for="oobprogram-input"
              >
                <b-form-input
                  id="oobprogram-input"
                  v-model="form.oob_program"
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageNodes.modifyModal.ovs')"
                label-for="ovs-input"
              >
                <b-form-select
                  id="ovs-input"
                  v-model="form.ovs"
                  :options="ovsList"
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageNodes.modifyModal.ovsLink')"
                label-for="ovslink-input"
              >
                <b-form-input
                  id="ovslink-input"
                  v-model="form.ovs_link"
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageNodes.modifyModal.ovsName')"
                label-for="ovsname-input"
              >
                <b-form-input
                  id="ovsname-input"
                  v-model="form.ovs_name"
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageNodes.modifyModal.vmCapable')"
                label-for="vmcapable-input"
              >
                <b-form-select
                  id="vmcapable-input"
                  v-model="form.vm_capable"
                  :options="vmList"
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
          form="form-modify-groups"
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
import { actionTypes } from '@/store/modules/nodes';

export default {
  name: 'NodesModifyModal',
  props: {
    apiUrl: {
      type: String,
      required: true
    },
    nodeName: {
      type: String,
      required: true
    },
    modify: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      form: {
        master_candidate: null,
        master_capable: null,
        cpu_speed: '',
        oob_program: '',
        ovs: null,
        ovs_link: '',
        ovs_name: '',
        spindle_count: '',
        ssh_port: '',
        vm_capable: ''
      },
      candidateList: [true, false],
      capableList: [true, false],
      ovsList: [true, false],
      vmList: [true, false]
    };
  },
  watch: {
    modify() {
      this.form.master_candidate = this.modify.master_candidate;
      this.form.master_capable = this.modify.master_capable;
      this.form.cpu_speed = this.modify.ndparams.cpu_speed;
      this.form.oob_program = this.modify.ndparams.oob_program;
      this.form.ovs = this.modify.ndparams.ovs;
      this.form.ovs_link = this.modify.ndparams.ovs_link;
      this.form.ovs_name = this.modify.ndparams.ovs_name;
      this.form.spindle_count = this.modify.ndparams.spindle_count;
      this.form.ssh_port = this.modify.ndparams.ssh_port;
      this.form.vm_capable = this.modify.vm_capable;
    }
  },
  methods: {
    closeModal() {
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    },
    handleSubmitModifyNodes() {
      this.$store.dispatch(
        actionTypes.modifyNodes,
        { apiUrl: this.apiUrl, nodeName: this.nodeName, data: this.form }
      )
        .then(() => {
          this.closeModal();
        })
        .catch(() => {});
    },
    onOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      this.handleSubmitModifyNodes();
    }
  }
};
</script>
