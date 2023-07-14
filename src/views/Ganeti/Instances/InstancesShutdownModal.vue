<template>
  <div>
    <b-modal
      id="modal-shutdown-instances"
      ref="modal"
      :title="$t('pageInstances.shutDownModal.title')"
      @hidden="resetForm"
    >
      <b-form
        id="form-shutdown-instances"
        @submit.prevent="handleSubmitShutDownInstances"
      >
        <b-row>
          <b-col>
            <b-form-group
              :label="$t('pageInstances.shutDownModal.force')"
              label-for="force-input"
            >
              <b-form-select
                id="force-input"
                v-model="form.force"
                :options="forceList"
                type="text"
              />
            </b-form-group>
            <b-form-group
              :label="$t('pageInstances.shutDownModal.timeOut')"
              label-for="timeout-input"
            >
              <b-form-input
                id="timeout-input"
                v-model="form.timeout"
                type="number"
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
          form="form-shutdown-instances"
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
import { actionTypes } from '@/store/modules/instances';

export default {
  name: 'InstancesShutDownModal',
  props: {
    instanceName: {
      type: String,
      required: true
    },
    apiUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      form: {
        force: null,
        timeout: ''
      },
      forceList: [{ text: this.$t('pageInstances.addModal.placeholderNodes'), value: null },
        true, false]
    };
  },
  methods: {
    closeModal() {
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    },
    resetForm() {
      this.form.force = null;
      this.form.timeout = '';
    },
    handleSubmitShutDownInstances() {
      this.$store.dispatch(
        actionTypes.shutDownInstances,
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
      this.handleSubmitShutDownInstances();
    }
  }
};
</script>
