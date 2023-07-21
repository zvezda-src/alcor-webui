<template>
  <div>
    <b-modal
      id="modal-reboot-instances"
      ref="modal"
      :title="$t('pageInstances.rebootModal.title')"
      @hidden="resetForm"
    >
      <b-form
        id="form-reboot-instances"
        @submit.prevent="handleSubmitRebootInstances"
      >
        <b-container>
          <b-row>
            <b-col>
              <b-form-group
                :label="$t('pageInstances.rebootModal.type')"
                label-for="type-input"
              >
                <b-form-select
                  id="type-input"
                  v-model="form.type"
                  :options="types"
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
          form="form-reboot-instances"
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
  name: 'InstancesRebootModal',
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
        type: null
      },
      types: [
        { text: this.$t('pageInstances.rebootModal.placeholderType'), value: null },
        'soft',
        'hard',
        'full']
    };
  },
  methods: {
    closeModal() {
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    },
    resetForm() {
      this.form.type = null;
    },
    handleSubmitRebootInstances() {
      this.$store.dispatch(
        actionTypes.rebootInstances,
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
      this.handleSubmitRebootInstances();
    }
  }
};
</script>

    <style>

    </style>
