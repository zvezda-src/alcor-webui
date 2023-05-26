<template>
  <page-section>
    <b-card>
      <b-form>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="access:"
          label-for="input-access"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterDiskParams.access"
            type="text"
            id="input-access"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="host:"
          label-for="input-host"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterDiskParams.host"
            type="text"
            id="input-host"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="port:"
          label-for="input-port"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterDiskParams.port"
            type="text"
            id="input-port"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="volume:"
          label-for="input-volume"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterDiskParams.volume"
            type="text"
            id="input-volume"
          />
        </b-form-group>
      </b-form>
    </b-card>
  </page-section>
</template>

<script>
import PageSection from '@/components/Global/PageSection.vue';

export default {
  name: 'ClusterCardDiskParams',
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
    clusterDiskParams() {
      return this.cluster.diskparams.gluster;
    }
  }
};
</script>
