<template>
  <div>
    <b-modal
      id="modal-add-nodes"
      ref="modal"
      size="md"
      :title="$t('pageNodes.addModal.title')"
      :ok-title="$t('global.action.save')"
      :cancel-title="$t('global.action.cancel')"
      button-size="sm"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <b-form
        ref="form"
        @submit.stop.prevent="handleSubmit"
      >
        <b-row>
          <b-col sm="12">
            <b-form-group
              :label="$t('pageNodes.addModal.name')"
              label-for="name-input"
              invalid-feedback="Name is required"
              :state="Namestate"
            >
              <b-form-input
                id="name-input"
                v-model="form.node_name"
                :placeholder="$t('pageNodes.addModal.placeholderName')"
                :state="Namestate"
                required
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
  name: 'NodesAddModal',
  data() {
    return {
      form: {
        node_name: ''
      },
      Namestate: null
    };
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.Namestate = valid;
      return valid;
    },
    resetModal() {
      this.form.node_name = '';
      this.Namestate = null;
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return;
      }

      // Hide the modal manually
      this.$nextTick(() => {
        const dataInstances = this.form;
        // eslint-disable-next-line
      console.log(JSON.stringify(dataInstances));

        axios.post('http://10.110.3.230:8008/v1/nodes', dataInstances)
          .then(response => {
          // eslint-disable-next-line
          console.log(response.data);
            this.$bvModal.hide('modal-add-instances');
            setTimeout(() => {
              this.$router.go(0);
            }, 1000);
          })
          .catch(error => {
          // eslint-disable-next-line
          console.log(error);
          });
      });
    }
  }
};
</script>
