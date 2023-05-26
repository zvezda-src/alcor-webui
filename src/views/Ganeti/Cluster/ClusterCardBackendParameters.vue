<template>
  <div>
    <page-section>
      <b-card>
        <b-form>
          <b-form-group
            label-cols="4"
            label-cols-lg="2"
            label="minmem:"
            label-for="input-minmem"
            label-class="font-weight-bold"
          >
            <b-form-input
              v-model="clusterBackend.minmem"
              type="text"
              id="input-minmem"
            />
          </b-form-group>
          <b-form-group
            label-cols="4"
            label-cols-lg="2"
            label="maxmem:"
            label-for="input-maxmem"
            label-class="font-weight-bold"
          >
            <b-form-input
              v-model="clusterBackend.maxmem"
              type="text"
              id="input-maxmem"
            />
          </b-form-group>
          <b-form-group
            label-cols="4"
            label-cols-lg="2"
            label="vcpus:"
            label-for="input-vcpus"
            label-class="font-weight-bold"
          >
            <b-form-input
              v-model="clusterBackend.vcpus"
              type="text"
              id="input-vcpus"
            />
          </b-form-group>
          <b-form-group
            label-cols="4"
            label-cols-lg="2"
            label="auto balance:"
            label-for="input-autobalance"
            label-class="font-weight-bold"
          >
            <b-form-input
              v-model="clusterBackend.auto_balance"
              type="text"
              id="input-autobalance"
            />
          </b-form-group>
          <b-form-group
            label-cols="4"
            label-cols-lg="2"
            label="always failover:"
            label-for="input-alwaysfailover"
            label-class="font-weight-bold"
          >
            <b-form-input
              v-model="clusterBackend.always_failover"
              type="text"
              id="input-alwaysfailover"
            />
          </b-form-group>
        </b-form>
      </b-card>
    </page-section>
  </div>
</template>

<script>
import PageSection from '@/components/Global/PageSection.vue';

export default {
  name: 'ClusterCardBackendParameters',
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
    clusterBackend() {
      return this.cluster.beparams.default;
    }
  }
};
</script>

<style scoped>

</style>
