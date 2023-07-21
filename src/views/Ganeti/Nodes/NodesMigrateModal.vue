<template>
  <div>
    <b-modal
      id="modal-migrate-nodes"
      size="lg"
      ref="modal"
      :title="$t('pageNodes.migrateModal.title')"
    >
      <b-form
        id="form-migrate-groups"
        @submit.prevent="handleSubmitMigrateNodes"
      >
        <b-container>
          <b-row>
            <b-col sm="6">
              <b-form-group
                :label="$t('pageNodes.migrateModal.allowRuntimeChanges')"
                label-for="allow-runtime-changes-input"
              >
                <b-form-select
                  id="allow-runtime-changes-input"
                  v-model="form.allow_runtime_changes"
                  :options="allowList"
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageNodes.migrateModal.ignoreIpolicy')"
                label-for="ignore-ipolicy-input"
              >
                <b-form-select
                  id="ignore-ipolicy-input"
                  v-model="form.ignore_ipolicy"
                  :options="ignoreList"
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageNodes.migrateModal.live')"
                label-for="live-input"
              >
                <b-form-select
                  id="live-input"
                  v-model="form.live"
                  :options="liveList"
                />
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                :label="$t('pageNodes.migrateModal.mode')"
                label-for="mode-input"
              >
                <b-form-select
                  id="mode-input"
                  v-model="form.mode"
                  :options="modeList"
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageNodes.migrateModal.nodeUuid')"
                label-for="node-uuid-input"
              >
                <b-form-input
                  id="node-uuid-input"
                  v-model="form.node_uuid"
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageNodes.migrateModal.targetNode')"
                label-for="target-node-input"
              >
                <b-form-select
                  id="target-node-input"
                  v-model="form.target_node"
                  :options="nodesList"
                  value-field="name"
                  text-field="name"
                />
              </b-form-group>
            </b-col>
            <b-col sm="12">
              <b-form-group
                :label="$t('pageNodes.migrateModal.targetNodeUuid')"
                label-for="target-node-uuid-input"
              >
                <b-form-input
                  id="target-node-uuid-input"
                  v-model="form.target_node_uuid"
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
          form="form-migrate-groups"
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
  name: 'NodesMigrateModal',
  props: {
    apiUrl: {
      type: String,
      required: true
    },
    nodeName: {
      type: String,
      required: true
    },
    migrate: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      form: {
        allow_runtime_changes: null,
        ignore_ipolicy: null,
        live: null,
        mode: null,
        node_uuid: '',
        target_node: '',
        target_node_uuid: ''
      },
      allowList: [{ text: this.$t('pageNodes.migrateModal.placeholderList') }, true, false],
      ignoreList: [{ text: this.$t('pageNodes.migrateModal.placeholderList') }, true, false],
      liveList: [{ text: this.$t('pageNodes.migrateModal.placeholderList') }, true, false],
      modeList: [{ text: this.$t('pageNodes.migrateModal.placeholderList') }, 'live', 'non-live']
    };
  },
  computed: {
    nodesList() {
      return this.$store.state.nodes.data;
    }
  },
  watch: {
    migrate() {
      this.form.node_uuid = this.migrate.uuid;
      this.form.target_node = this.migrate.name;
    }
  },
  mounted() {
    this.$store.dispatch(actionTypes.getNodes, { apiUrl: this.apiUrl });
  },
  methods: {
    closeModal() {
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    },
    handleSubmitMigrateNodes() {
      this.$store.dispatch(
        actionTypes.migrateNodes,
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
      this.handleSubmitMigrateNodes();
    }
  }
};
</script>
