<template>
  <page-section>
    <b-card>
      <b-form>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          :label="$t('pageCluster.formCluster.name')"
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
          :label="$t('pageCluster.formCluster.master')"
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
          :label="$t('pageCluster.formCluster.clusterVersion')"
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
          :label="$t('pageCluster.formCluster.protocolVersion')"
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
          :label="$t('pageCluster.formCluster.configVersion')"
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
          :label="$t('pageCluster.formCluster.maxRunningJobs')"
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
          :label="$t('pageCluster.formCluster.maxTrackedJobs')"
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
          :label="$t('pageCluster.formCluster.macPrefix')"
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
          :label="$t('pageCluster.formCluster.masterNetmask')"
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
    cluster: {
      type: Object,
      required: true
    }
  },
  computed: {
    getClusterInfoData() {
      return this.cluster;
    }
  }

};
</script>

<style scoped>

</style>
