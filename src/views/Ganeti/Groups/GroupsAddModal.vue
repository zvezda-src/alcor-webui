<template>
  <div>
    <b-modal
      id="modal-add-groups"
      ref="modal"
      size="md"
      :title="$t('pageGroups.modal.addTitle')"
    >
      <b-form
        id="form-add-groups"
        @submit.prevent="handleSubmitAddGroups"
      >
        <b-row>
          <b-col sm="12">
            <b-form-group
              :label="$t('pageGroups.modal.name')"
              label-for="name-input"
              invalid-feedback="Name is required"
            >
              <b-form-input
                id="name-input"
                v-model="form.group_name"
                placeholder="Enter name"
                required
              />
            </b-form-group>
            <!-- <b-form-group
              label="alloc_policy:"
              label-for="node-input"
              invalid-feedback="Node is required"
            >
              <b-form-input
                v-model="form.alloc_policy"
                placeholder="alloc_policy name"
              />
            </b-form-group> -->
            <!-- <b-form-group
              label="disk_state:"
              label-for="disk_state-input"
              invalid-feedback="Disk is required"
            >
              <b-form-input
                id="disk_state-input"
                v-model="form.disk_state"
                placeholder="Enter disk_state"
              />
            </b-form-group> -->

            <!-- <b-form-group
              label="ipolicy:"
              label-for="ipolicy-input"
            >
              <b-form-input
                id="vcpus-input"
                v-model="form.ipolicy"
                placeholder="Enter ipolicy"
              />
            </b-form-group> -->
          </b-col>
          <!-- <b-col sm="6">
            <b-form-group
              label="cpu_speed:"
              label-for="cpu_speed-input"
              invalid-feedback="Boot order is required"
            >
              <b-form-input
                id="cpu_speed-input"
                v-model="form.cpu_speed"
                placeholder="Enter cpu_speed"
              />
            </b-form-group>
            <b-form-group
              label="exclusive_storage:"
              label-for="exclusive_storage-input"
              invalid-feedback="Boot order is required"
            >
              <b-form-input
                id="exclusive_storage-input"
                v-model="form.exclusive_storage"
                placeholder="Enter exclusive_storage"
              />
            </b-form-group>
            <b-form-group
              label="oob_program:"
              label-for="oob_program-input"
              invalid-feedback="Boot order is required"
            >
              <b-form-input
                id="oob_program-input"
                v-model="form.oob_program"
                placeholder="Enter oob_program"
              />
            </b-form-group>
            <b-form-group
              label="ovs:"
              label-for="ovs-input"
              invalid-feedback="Boot order is required"
            >
              <b-form-input
                id="ovs-input"
                v-model="form.ovs"
                placeholder="Enter ovs"
              />
            </b-form-group>
            <b-form-group
              label="ovs_link:"
              label-for="ovs_link-input"
              invalid-feedback="Boot order is required"
            >
              <b-form-input
                id="ovs_link-input"
                v-model="form.ovs_link"
                placeholder="Enter ovs_link"
              />
            </b-form-group>
            <b-form-group
              label="ovs_name:"
              label-for="ovs_name-input"
              invalid-feedback="Boot order is required"
            >
              <b-form-input
                id="ovs_name-input"
                v-model="form.ovs_name"
                placeholder="Enter ovs_name"
              />
            </b-form-group>
            <b-form-group
              label="spindle_count:"
              label-for="spindle_count-input"
              invalid-feedback="Boot order is required"
            >
              <b-form-input
                id="spindle_count-input"
                v-model="form.spindle_count"
                placeholder="Enter spindle_count"
              />
            </b-form-group>
            <b-form-group
              label="ssh_port:"
              label-for="ssh_port-input"
              invalid-feedback="Boot order is required"
            >
              <b-form-input
                id="ssh_port-input"
                v-model="form.ssh_port"
                placeholder="Enter ssh_port"
              />
            </b-form-group>
          </b-col>-->
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
          form="form-add-groups"
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
import { actionTypes } from '@/store/modules/groups';

export default {
  name: 'GroupsAddModal',
  props: {
    apiUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      form: {
        group_name: ''
      }
    };
  },
  methods: {
    closeModal() {
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    },
    handleSubmitAddGroups() {
      this.$store.dispatch(actionTypes.addGroups, { apiUrl: this.apiUrl, data: this.form })
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
      this.handleSubmitAddGroups();
    }
  }
};
</script>
