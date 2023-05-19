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
            <span class="font-weight-bold">acpi:</span> {{ acpi }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">cpu type:</span> {{ cpu_type }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">disk type:</span> {{ disk_type }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">kernel path:</span> {{ kernel_type }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">kvm extra:</span> {{ kvm_extra }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">kvm flag:</span> {{ kvm_flag }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">machine version:</span> {{ machine_version }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">use guest agent:</span> {{ use_guest_agent }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">use localtime:</span> {{ use_localtime }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">vhost net:</span> {{ vhost_net }}
          </li>
          <li class="mb-3">
            <span class="font-weight-bold">virtio net queues:</span>
            {{ virtio_net_queues }}
          </li>
        </ul>
      </b-card>
    </page-section>
  </div>
</template>

<script>
import PageSection from '@/components/Global/PageSection.vue';
// import axios from 'axios';

export default {
  name: 'ClusterCardHypervisor',
  components: {
    PageSection
  },
  data() {
    return {
      cardName: 'Hypervisor',
      hypervisor: [],
      acpi: 'true',
      cpu_type: 'null',
      disk_type: 'paravirtual',
      kernel_type: 'null',
      kvm_extra: '-device virtio-rng-pci,max-bytes=1024,period=1000 -global isa-fdc.fdtypeA=none',
      kvm_flag: 'null',
      machine_version: 'null',
      use_guest_agent: 'false',
      use_localtime: 'false',
      vhost_net: 'true',
      virtio_net_queues: '1'
    };
  }
  // created() {
  //   axios.get('https://10.30.5.219:5080/2/info')
  //     .then(responce => {
  //       this.hypervisor = responce.data.hvparams.kvm;
  //     })
  //     .catch(e => {
  //       this.errors.push(e);
  //     });
  // }
};
</script>

<style scoped>

</style>
