<template>
  <page-section>
    <b-card>
      <b-form>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="cpu speed:"
          label-for="input-cpuspeed"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterNodeParams.cpu_speed"
            type="text"
            id="input-cpuspeed"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="exclusive storage:"
          label-for="input-exclusivestorage"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterNodeParams.exclusive_storage"
            type="text"
            id="input-exclusivestorage"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="oob program:"
          label-for="input-oobprogram"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterNodeParams.oob_program"
            type="text"
            id="input-oobprogram"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="ovs:"
          label-for="input-ovs"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterNodeParams.ovs"
            type="text"
            id="input-ovs"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="ovs link:"
          label-for="input-ovslink"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterNodeParams.ovs_link"
            type="text"
            id="input-ovslink"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="ovs name:"
          label-for="input-ovsname"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterNodeParams.ovs_name"
            type="text"
            id="input-ovsname"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="spindle count:"
          label-for="input-spindlecount"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterNodeParams.spindle_count"
            type="text"
            id="input-spindlecount"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="ssh port:"
          label-for="input-sshport"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterNodeParams.ssh_port"
            type="text"
            id="input-sshport"
          />
        </b-form-group>
      </b-form>
    </b-card>
  </page-section>
</template>

<script>
import PageSection from '@/components/Global/PageSection.vue';

export default {
  name: 'ClusterCardNodeParams',
  components: {
    PageSection
  },
  props: {
    cluster: {
      type: Object,
      required: true
    }
  },
  computed: {
    clusterNodeParams() {
      return this.cluster.ndparams;
    }
  }
};
</script>
