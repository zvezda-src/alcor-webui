<template>
  <div>
    <b-modal
      id="modal-modify-groups"
      ref="modal"
      :title="$t('pageInstances.modifyModal.title')"
    >
      <b-form
        id="form-modify-instances"
        @submit.prevent="handleSubmitModifyInstances"
      >
        <b-container>
          <b-row>
            <b-col sm="12">
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
                label-for="minmem-input"
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

              <b-form-group
                :label="$t('pageInstances.modifyModal.autoBalance')"
                label-for="autobalance-input"
              >
                <b-form-select
                  id="autobalance-input"
                  v-model="form.auto_balance"
                  :options="balanceList"
                />
              </b-form-group>
              <b-form-group
                :label="$t('pageInstances.modifyModal.alwaysFailover')"
                label-for="alwaysfailover-input"
              >
                <b-form-select
                  id="alwaysfailover-input"
                  v-model="form.always_failover"
                  :options="alwaysList"
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
          form="form-modify-instances"
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
  name: 'GroupsModifyModal',
  props: {
    modify: {
      type: Object,
      required: true
    },
    apiUrl: {
      type: String,
      required: true
    },
    instanceName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      form: {
        maxmem: '',
        minmem: '',
        vcpus: '',
        auto_balance: '',
        always_failover: ''
      },
      balanceList: [true, false],
      alwaysList: [true, false]
    };
  },
  watch: {
    modify() {
      this.form.maxmem = this.modify.beparams.maxmem;
      this.form.minmem = this.modify.beparams.minmem;
      this.form.vcpus = this.modify.beparams.vcpus;
      this.form.auto_balance = this.modify.beparams.auto_balance;
      this.form.always_failover = this.modify.beparams.always_failover;
    }
  },
  methods: {
    closeModal() {
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    },
    handleSubmitModifyInstances() {
      this.$store.dispatch(
        actionTypes.modifyInstances,
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
      this.handleSubmitModifyInstances();
    }
  }
};
</script>

<style>

</style>
