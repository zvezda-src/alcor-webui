<template>
  <div>
    <b-modal
      id="modal-evacuate-nodes"
      ref="modal"
      :title="$t('pageNodes.evacuateModal.title')"
    >
      <b-form
        id="form-evacuate-groups"
        @submit.prevent="handleSubmitEvacuateNodes"
      >
        <b-container>
          <b-row>
            <b-col sm="6">
              <b-form-group
                :label="$t('pageNodes.evacuateModal.iallocator')"
                label-for="iallocator-input"
              >
                <b-form-input
                  id="iallocator-input"
                  v-model="form.iallocator"
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageNodes.evacuateModal.ignoreSoftErrors')"
                label-for="ignore-soft-errors-input"
              >
                <b-form-select
                  id="ignore-soft-errors-input"
                  v-model="form.ignore_soft_errors"
                  :options="ignoreSoftList"
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageNodes.evacuateModal.mode')"
                label-for="mode-input"
              >
                <b-form-select
                  id="mode-input"
                  v-model="form.mode"
                  :options="modeList"
                />
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                :label="$t('pageNodes.evacuateModal.nodeUuid')"
                label-for="node_uuid-input"
              >
                <b-form-input
                  id="node_uuid-input"
                  v-model="form.node_uuid"
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageNodes.evacuateModal.remoteNode')"
                label-for="remote_node-input"
              >
                <b-form-input
                  id="remote_node-input"
                  v-model="form.remote_node"
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageNodes.evacuateModal.remoteNodeUuid')"
                label-for="remote_node_uuid-input"
              >
                <b-form-input
                  id="remote_node_uuid-input"
                  v-model="form.remote_node_uuid"
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
          form="form-evacuate-groups"
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
  name: 'NodesEvacuateModal',
  data() {
    return {
      form: {
        iallocator: '',
        ignore_soft_errors: null,
        mode: null,
        node_uuid: '',
        remote_node: '',
        remote_node_uuid: ''
      },
      ignoreSoftList: [{ text: this.$t('pageNodes.evacuateModal.placeholderList') }, true, false],
      modeList: [{ text: this.$t('pageNodes.evacuateModal.placeholderList') },
        'secondary-only',
        'primary-only',
        'all']
    };
  },
  methods: {
    closeModal() {
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    },
    handleSubmitEvacuateNodes() {
      this.$store.dispatch(
        actionTypes.evacuateNodes,
        { apiUrl: this.apiUrl, instanceName: this.nodeName, data: this.form }
      )
        .then(() => {
          this.closeModal();
        })
        .catch(() => {});
    },
    onOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      this.handleSubmitEvacuateNodes();
    }
  }
};
</script>
