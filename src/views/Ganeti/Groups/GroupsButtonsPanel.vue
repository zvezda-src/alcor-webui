<template>
  <div>
    <b-button-group>
      <b-button
        v-b-modal.modal-add-groups
        squared
        variant="primary"
      >
        <icon-add />
        {{ $t('global.action.add') }}
      </b-button>
    </b-button-group>
  </div>
</template>

<script>
import IconAdd from '@carbon/icons-vue/es/add--alt/20';

export default {
  name: 'GroupsButtonsPanel',
  components: {
    IconAdd
  }
};
</script>

  <style>

  </style>
