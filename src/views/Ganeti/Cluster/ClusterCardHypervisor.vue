<template>
  <page-section>
    <b-card>
      <b-form>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="acpi:"
          label-for="input-acpi"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterHypervisor.acpi"
            type="text"
            id="input-acpi"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="boot order:"
          label-for="input-bootorder"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterHypervisor.boot_order"
            type="text"
            id="input-bootorder"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="cdrom2 image path:"
          label-for="input-cdrom2imagepath"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterHypervisor.cdrom2_image_path"
            type="text"
            id="input-cdrom2imagepath"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="cpu cores:"
          label-for="input-cpucores"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterHypervisor.cpu_cores"
            type="text"
            id="input-cpucores"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="cpu mask:"
          label-for="input-cpumask"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterHypervisor.cpu_mask"
            type="text"
            id="input-cpumask"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="cpu sockets:"
          label-for="input-cpusockets"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterHypervisor.cpu_sockets"
            type="text"
            id="input-cpusockets"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="cpu threads:"
          label-for="input-cputhreads"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterHypervisor.cpu_threads"
            type="text"
            id="input-cputhreads"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="cpu type:"
          label-for="input-cputype"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterHypervisor.cpu_type"
            type="text"
            id="input-cputype"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="disk type:"
          label-for="input-disktype"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterHypervisor.disk_type"
            type="text"
            id="input-disktype"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="initrd path:"
          label-for="input-initrdpath"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterHypervisor.initrd_path"
            type="text"
            id="input-initrdpath"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="kernel args:"
          label-for="input-kernelargs"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterHypervisor.kernel_args"
            type="text"
            id="input-kernelargs"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="kernel path:"
          label-for="input-kernelpath"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterHypervisor.kernel_path"
            type="text"
            id="input-kernelpath"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="kvm extra:"
          label-for="input-kvmextra"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterHypervisor.kvm_extra"
            type="text"
            id="input-kvmextra"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="machine version:"
          label-for="input-machineversion"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterHypervisor.machine_version"
            type="text"
            id="input-machineversion"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="spice bind:"
          label-for="input-spicebind"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterHypervisor.spice_bind"
            type="text"
            id="input-spicebind"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="spice image:"
          label-for="input-spiceimagecompression"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterHypervisor.spice_image_compression"
            type="text"
            id="input-spiceimagecompression"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="spice jpeg wan:"
          label-for="input-spicejpegwancompression"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterHypervisor.spice_jpeg_wan_compression"
            type="text"
            id="input-spicejpegwancompression"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="spice playback:"
          label-for="input-spiceplaybackcompression"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterHypervisor.spice_playback_compression"
            type="text"
            id="input-spiceplaybackcompression"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="spice streaming:"
          label-for="input-spicestreamingvideo"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterHypervisor.spice_streaming_video"
            type="text"
            id="input-spicestreamingvideo"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="spice tls ciphers:"
          label-for="input-spicetlsciphers"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterHypervisor.spice_tls_ciphers"
            type="text"
            id="input-spicetlsciphers"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="spice use tls:"
          label-for="input-spiceusetls"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterHypervisor.spice_use_tls"
            type="text"
            id="input-spiceusetls"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="spice use tls:"
          label-for="input-spiceusetls"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterHypervisor.spice_use_tls"
            type="text"
            id="input-spiceusetls"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="spice use vdagent:"
          label-for="input-spiceusevdagent"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterHypervisor.spice_use_vdagent"
            type="text"
            id="input-spiceusevdagent"
          />
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="spice zlib glz wan:"
          label-for="input-spicezlibglzwancompression"
          label-class="font-weight-bold"
        >
          <b-form-input
            v-model="clusterHypervisor.spice_zlib_glz_wan_compression"
            type="text"
            id="input-spicezlibglzwancompression"
          />
        </b-form-group>
      </b-form>
    </b-card>
  </page-section>
</template>

<script>
import PageSection from '@/components/Global/PageSection.vue';

export default {
  name: 'ClusterCardHypervisor',
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
    clusterHypervisor() {
      return this.cluster.hvparams.kvm;
    }
  }

};
</script>

<style scoped>

</style>
