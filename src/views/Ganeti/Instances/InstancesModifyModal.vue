<template>
  <div>
    <b-modal
      id="modal-modify-instances"
      ref="modal"
      :title="$t('pageInstances.modifyModal.title')"
      :ok-title="$t('global.action.save')"
      :cancel-title="$t('global.action.cancel')"
      @ok="handleOk"
    >
      <b-form
        ref="form"
        @submit.prevent="handleSubmitModifyInstances"
      >
        <b-container>
          <b-row>
            <b-col sm="6">
              <b-form-group
                :label="$t('pageInstances.modifyModal.maxMem')"
                label-for="maxmem-input"
              >
                <b-form-input
                  id="maxmem-input"
                  v-model="form.maxmem"
                  type="number"
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageInstances.modifyModal.minMem')"
                label-for="Minmem-input"
              >
                <b-form-input
                  id="minmem-input"
                  v-model="form.minmem"
                  type="number"
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageInstances.modifyModal.vcpus')"
                label-for="vcpus-input"
              >
                <b-form-input
                  id="vcpus-input"
                  v-model="form.vcpus"
                  type="number"
                />
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <!-- <b-form-group
              label="Spindle use:"
              label-for="spindleuse-input"
              type="number"
            >
              <b-form-input
                id="spindleuse-input"
                v-model="form.spindle_use"
              />
            </b-form-group> -->
              <b-form-group
                :label="$t('pageInstances.modifyModal.autoBalance')"
                label-for="autobalance-input"
              >
                <b-form-input
                  id="autobalance"
                  v-model="form.auto_balance"
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageInstances.modifyModal.alwaysFailover')"
                label-for="alwaysfailover-input"
              >
                <b-form-input
                  id="alwaysfailover-input"
                  v-model="form.always_failover"
                />
              </b-form-group>
            </b-col>
          </b-row>
        </b-container>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import axios from '@/api/axios';

export default {
  name: 'InstancesModifyModal',
  props: {
    modifydata: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      form: {
        instance_name: this.modifydata,
        maxmem: '',
        minmem: '',
        vcpus: '',
        // spindle_use: '',
        auto_balance: '',
        always_failover: ''
      }
    };
  },
  methods: {
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.handleSubmitModifyInstances();
    },
    handleSubmitModifyInstances() {
      const dataInstances = this.form;
      // eslint-disable-next-line
      console.log(JSON.stringify(dataInstances));

      axios.put(`instance/${this.modifydata.name}/modify`, dataInstances)
        .then(response => {
          // eslint-disable-next-line
          console.log(response.data);
          this.$bvModal.hide('modal-modify-instances');
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
