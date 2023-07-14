<template>
  <div>
    <b-modal
      id="modal-grow-instances"
      ref="modal"
      :title="$t('pageInstances.growModal.title')"
      @hidden="resetForm"
    >
      <b-form
        id="form-grow-instances"
        @submit.prevent="handleSubmitGrowInstances"
      >
        <b-row>
          <b-col>
            <b-form-group
              :label="$t('pageInstances.growModal.amount')"
              label-for="amount-input"
            >
              <b-form-input
                id="amount-input"
                v-model="form.amount"
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
          form="form-grow-instances"
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
  name: 'InstancesGrowModal',
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
        amount: ''
      }
    };
  },
  methods: {
    closeModal() {
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    },
    resetForm() {
      this.form.amount = '';
    },
    handleSubmitGrowInstances() {
      this.$store.dispatch(
        actionTypes.growInstances,
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
      this.handleSubmitGrowInstances();
    }
  }
};
</script>
