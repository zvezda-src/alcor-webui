<template>
  <div>
    <page-section>
      <b-card>
        <template #header>
          <p class="font-weight-bold m-0 text-center">
            {{ cardName }}
          </p>
        </template>
        <ul class="list-group list-unstyled">
          <li class="mb-3">
            <span class="font-weight-bold">acpi:</span> {{ hypervisor.acpi }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">cpu type:</span> {{ hypervisor.cpu_type }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">disk type:</span> {{ hypervisor.disk_type }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">kernel path:</span> {{ hypervisor.kernel_type }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">kvm extra:</span> {{ hypervisor.kvm_extra }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">kvm flag:</span> {{ hypervisor.kvm_flag }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">machine version:</span> {{ hypervisor.machine_version }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">use guest agent:</span> {{ hypervisor.use_guest_agent }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">use localtime:</span> {{ hypervisor.use_localtime }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">vhost net:</span> {{ hypervisor.vhost_net }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">virtio net queues:</span>
            {{ hypervisor.virtio_net_queues }}
          </li>
        </ul>
      </b-card>
    </page-section>
  </div>
</template>

<script>
import PageSection from '@/components/Global/PageSection.vue';
import axios from 'axios';

export default {
  name: 'ClusterCardsHypervisor',
  components: {
    PageSection
  },
  data() {
    return {
      cardName: 'Hypervisor',
      hypervisor: []
    };
  },
  created() {
    axios.get('https://10.30.5.219:5080/2/info')
      .then(responce => {
        this.hypervisor = responce.data.hvparams.kvm;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style scoped>

</style>
