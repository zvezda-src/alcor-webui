<template>
  <div>
    <b-modal
      id="modal-migrate-instances"
      ref="modal"
      :title="$t('pageInstances.migrateModal.title')"
      @hidden="resetForm"
    >
      <b-form
        id="form-add-instances"
        @submit.prevent="handleSubmitMigrateInstances"
      >
        <b-row>
          <b-col>
            <b-form-group
              :label="$t('pageInstances.migrateModal.allowFailover')"
              label-for="allowfailover-input"
            >
              <b-form-select
                id="allowfailover-input"
                v-model="form.allow_failover"
                :options="allowList"
              />
            </b-form-group>
            <b-form-group
              :label="$t('pageInstances.migrateModal.instanceUuid')"
              label-for="instanceuuid-input"
            >
              <b-form-input
                id="instanceuuid-input"
                v-model="form.instance_uuid"
                type="text"
              />
            </b-form-group>
            <b-form-group
              :label="$t('pageInstances.migrateModal.mode')"
              label-for="mode-input"
            >
              <b-form-select
                id="mode-input"
                v-model="form.mode"
                :options="modeList"
              />
            </b-form-group>
            <b-form-group
              :label="$t('pageInstances.migrateModal.targetNode')"
              label-for="targetnode-input"
            >
              <b-form-select
                id="targetnode-input"
                v-model="form.target_node"
                :options="nodesList"
                value-field="name"
                text-field="name"
              />
            </b-form-group>
          </b-col>
        </b-row>
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
          form="form-migrate-instances"
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
import { actionTypes as nodesActionTypes } from '@/store/modules/nodes';
import { actionTypes as instancesActionTypes } from '@/store/modules/instances';

export default {
  name: 'InstancesMirgateModal',
  props: {
    migrate: {
      type: Object,
      required: true
    },
    instanceName: {
      type: String,
      required: true
    },
    apiUrl: {
      type: String,
      required: true
    },
    nodeUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      form: {
        allow_failover: null,
        instance_uuid: '',
        mode: null,
        target_node: ''
      },
      allowList: [{ text: this.$t('pageInstances.addModal.placeholderNodes'), value: null },
        true,
        false],
      modeList: [{ text: this.$t('pageInstances.addModal.placeholderNodes'), value: null },
        'live',
        'non-live']
    };
  },
  computed: {
    nodesList() {
      return this.$store.state.nodes.data;
    }
  },
  watch: {
    migrate() {
      this.form.instance_uuid = this.migrate.uuid;
      this.form.target_node = this.migrate.pnode;
    }
  },
  mounted() {
    this.$store.dispatch(nodesActionTypes.getNodes, { apiUrl: this.nodeUrl });
  },
  methods: {
    closeModal() {
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    },
    resetForm() {
      this.form.allow_failover = null;
      this.form.mode = null;
    },
    handleSubmitMigrateInstances() {
      this.$store.dispatch(
        instancesActionTypes.migrateInstances,
        { apiUrl: this.apiUrl, instanceName: this.instanceName, data: this.form }
      )
        .then(() => {
          this.closeModal();
        })
        .catch(() => {});
    },
    onOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      this.handleSubmitMigrateInstances();
    }
  }
};
</script>
