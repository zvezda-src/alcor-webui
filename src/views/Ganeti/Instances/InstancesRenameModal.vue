<template>
  <div>
    <b-modal
      id="modal-rename-instances"
      ref="modal"
      :title="$t('pageInstances.renameModal.title')"
    >
      <b-form
        id="form-rename-instances"
        @submit.prevent="handleSubmitModifyInstances"
      >
        <b-container>
          <b-row>
            <b-col>
              <b-form-group
                :label="$t('pageInstances.renameModal.newName')"
                label-for="newname-input"
              >
                <b-form-input
                  id="newname-input"
                  v-model="form.new_name"
                  type="text"
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
          form="form-rename-instances"
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
  name: 'InstancesRenameModal',
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
        new_name: ''
      }
    };
  },
  watch: {
    instanceName() {
      this.form.new_name = this.instanceName;
    }
  },
  methods: {
    closeModal() {
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    },
    handleSubmitRenameInstances() {
      this.$store.dispatch(
        actionTypes.renameInstances,
        { apiUrl: this.apiUrl, instanceName: this.instanceName, data: this.form }
      )
        .then(() => {
          this.closeModal();
          setTimeout(() => {
            this.$router.go(0);
          }, 1000);
        })
        .catch(() => {});
    },
    onOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      this.handleSubmitRenameInstances();
    }
  }
};
</script>
