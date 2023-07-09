<template>
  <div>
    <b-modal
      id="modal-reboot-instances"
      ref="modal"
      :title="$t('pageInstances.rebootModal.title')"
      :ok-title="$t('global.action.save')"
      :cancel-title="$t('global.action.cancel')"
      @ok="handleOk"
    >
      <b-form
        ref="form"
        @submit.stop.prevent="rebootInstances"
      >
        <b-row>
          <b-col>
            <b-form-group
              :label="$t('pageInstances.rebootModal.type')"
              label-for="newname-input"
            >
              <b-form-select
                id="type-input"
                v-model="form.type"
                :options="types"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import axios from '@/api/axios';

export default {
  name: 'InstancesRebootModal',
  data() {
    return {
      form: {
        type: null,
        instance_name: 'test2'
      },
      types: [
        { text: this.$t('pageInstances.rebootModal.placeholderType'), value: null },
        'soft',
        'hard',
        'full']
    };
  },
  methods: {
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.modifyInstances();
    },
    modifyInstances() {
      const dataInstances = this.form;
      // eslint-disable-next-line
          console.log(JSON.stringify(dataInstances));

      axios.post('instance/test2/reboot', dataInstances)
        .then(response => {
          // eslint-disable-next-line
              console.log(response.data);
          this.$bvModal.hide('modal-reboot-instances');
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
