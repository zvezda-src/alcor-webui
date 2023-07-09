<template>
  <div>
    <b-modal
      id="modal-modify-nodes"
      ref="modal"
      :title="$t('pageNodes.modifyModal.title')"
      :ok-title="$t('global.action.save')"
      :cancel-title="$t('global.action.cancel')"
      @ok="handleOk"
    >
      <b-form
        ref="form"
        @submit.stop.prevent="modifyNodes"
      >
        <b-row>
          <b-col sm="6">
            <b-form-group
              :label="$t('pageNodes.modifyModal.masterCandidate')"
              label-for="mastercandidate-input"
            >
              <b-form-input
                id="mastercandidate-input"
                v-model="form.master_candidate"
              />
            </b-form-group>
            <b-form-group
              :label="$t('pageNodes.modifyModal.masterCapable')"
              label-for="mastercapable-input"
            >
              <b-form-input
                id="mastercapable-input"
                v-model="form.master_capable"
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
          </b-col>
          <b-col sm="6">
            <b-form-group
              :label="$t('pageNodes.modifyModal.exclusiveStorage')"
              label-for="exclusivestorage-input"
            >
              <b-form-input
                id="exclusivestorage-input"
                v-model="form.exclusive_storage"
              />
            </b-form-group>
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
              <b-form-input
                id="ovs-input"
                v-model="form.ovs"
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
              :label="$t('pageNodes.modifyModal.spindleCount')"
              label-for="spindlecount-input"
            >
              <b-form-input
                id="spindlecount-input"
                v-model="form.spindle_count"
              />
            </b-form-group>
            <b-form-group
              :label="$t('pageNodes.modifyModal.sshPort')"
              label-for="sshport-input"
            >
              <b-form-input
                id="sshport-input"
                v-model="form.ssh_port"
              />
            </b-form-group>
            <b-form-group
              :label="$t('pageNodes.modifyModal.vmCapable')"
              label-for="vmcapable-input"
            >
              <b-form-input
                id="vmcapable-input"
                v-model="form.vm_capable"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'NodesModifyModal',
  data() {
    return {
      form: {
        node_name: 'cl43gnt0',
        master_candidate: '',
        master_capable: '',
        cpu_speed: '',
        exclusive_storage: '',
        oob_program: '',
        ovs: '',
        ovs_link: '',
        ovs_name: '',
        spindle_count: '',
        ssh_port: '',
        vm_capable: ''
      }
    };
  },
  methods: {
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.modifyNodes();
    },
    modifyNodes() {
      const dataInstances = this.form;
      // eslint-disable-next-line
        console.log(JSON.stringify(dataInstances));

      axios.post('http://10.110.3.230:8008/v1/nodes/cl43gnt0/modify', dataInstances)
        .then(response => {
          // eslint-disable-next-line
            console.log(response.data);
          this.$bvModal.hide('modal-modify-instances');
        })
        .catch(error => {
          // eslint-disable-next-line
            console.log(error);
        });
    }
  }
};
</script>

  <style>

  </style>
