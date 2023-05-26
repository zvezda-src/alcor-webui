<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  prorps: {
    message: {
      type: String,
      required: false,
      default: 'Something bad error'
    }
  }
};
</script>
