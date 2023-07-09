<template>
  <div>
    <b-modal
      id="modal-grow-instances"
      ref="modal"
      :title="$t('pageInstances.growModal.title')"
      :ok-title="$t('global.action.save')"
      :cancel-title="$t('global.action.cancel')"
      @ok="handleOk"
    >
      <b-form
        ref="form"
        @submit.stop.prevent="growInstances"
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
    </b-modal>
  </div>
</template>

<script>
import axios from '@/api/axios';

export default {
  name: 'InstancesGrowModal',
  data() {
    return {
      form: {
        instance_name: '',
        amount: ''
      }
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

      axios.post('instance/alcor/disk/0/grow', dataInstances)
        .then(response => {
          // eslint-disable-next-line
              console.log(response.data);
          this.$bvModal.hide('modal-grow-instances');
        })
        .catch(error => {
          // eslint-disable-next-line
              console.log(error);
        });
    }
  }
};
</script>
