<template>
  <page-section>
    <b-card>
      <template #header>
        <p class="font-weight-bold m-0 text-center">
          {{ cardName }}
        </p>
      </template>
      <b-form>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="Name:"
          label-for="input-name"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="getClusterInfoData.name"
            type="text"
            id="input-name"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="Master:"
          label-for="input-master"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="getClusterInfoData.master"
            id="input-master"
            disabled
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="Cluster version:"
          label-for="input-software-version"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="getClusterInfoData.software_version"
            id="input-software-version"
            disabled
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="Protocol version:"
          label-for="input-protocol-version"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="getClusterInfoData.protocol_version"
            id="input-protocol-version"
            disabled
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="Config version:"
          label-for="input-config-version"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="getClusterInfoData.config_version"
            id="input-config-version"
            disabled
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="Max running jobs:"
          label-for="input-running-jobs"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="getClusterInfoData.max_running_jobs"
            type="number"
            id="input-running-jobs"
            min="0"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="Max tracked jobs:"
          label-for="input-tracked-jobs"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="getClusterInfoData.max_tracked_jobs"
            type="number"
            id="input-tracked-jobs"
            min="0"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="MAC prefix:"
          label-for="input-mac"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="getClusterInfoData.mac_prefix"
            type="text"
            id="input-mac"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="Master netmask:"
          label-for="input-netmask"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="getClusterInfoData.master_netmask"
            type="number"
            id="input-netmask"
            min="0"
          />
        </b-form-group>
      </b-form>
      <b-button
        class="mt-3"
        type="submit"
        variant="primary"
      >
        Сохранить
      </b-button>
    </b-card>
  </page-section>
</template>

<script>
import PageSection from '@/components/Global/PageSection.vue';

export default {
  name: 'ClusterCardInfo',
  components: {
    PageSection
  },
  props: {
    getClusterInfo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      cardName: 'Cluster'
    };
  },
  computed: {
    getClusterInfoData() {
      return this.getClusterInfo;
    }
  }
};
</script>

<style scoped>

</style>
