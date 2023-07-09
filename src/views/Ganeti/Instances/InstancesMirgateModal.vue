<template>
  <div>
    <b-modal
      id="modal-migrate-instances"
      ref="modal"
      :title="$t('pageInstances.migrateModal.title')"
      :ok-title="$t('global.action.save')"
      :cancel-title="$t('global.action.cancel')"
      @ok="handleOk"
    >
      <b-form
        ref="form"
        @submit.stop.prevent="migrateInstances"
      >
        <b-row>
          <b-col>
            <b-form-group
              :label="$t('pageInstances.migrateModal.allowFailover')"
              label-for="allowfailover-input"
            >
              <b-form-input
                id="allowfailover-input"
                v-model="form.allow_failover"
                type="text"
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
              <b-form-input
                id="mode-input"
                v-model="form.mode"
                type="text"
              />
            </b-form-group>
            <b-form-group
              :label="$t('pageInstances.migrateModal.targetNode')"
              label-for="target node-input"
            >
              <b-form-input
                id="target_node-input"
                v-model="form.target_node"
                type="text"
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
  name: 'InstancesMirgateModal',
  data() {
    return {
      form: {
        allow_failover: '',
        instance_name: '',
        instance_uuid: '',
        mode: '',
        target_node: ''
      }
    };
  },
  methods: {
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.migrateInstances();
    },
    migrateInstances() {
      const dataInstances = this.form;
      // eslint-disable-next-line
        console.log(JSON.stringify(dataInstances));

      axios.put('instance/name/migrate', dataInstances)
        .then(response => {
          // eslint-disable-next-line
            console.log(response.data);
          this.$bvModal.hide('modal-migrate-instances');
        })
        .catch(error => {
          // eslint-disable-next-line
            console.log(error);
        });
    }
  }
};
</script>
