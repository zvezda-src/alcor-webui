<template>
  <b-form
    @submit.prevent="onSubmit"
    class="login-form"
  >
    <b-form-group
      label-for="username"
      label="Имя пользователя"
    >
      <b-form-input
        id="username"
        type="text"
        v-model="username"
      />
    </b-form-group>
    <div class="login-form__section mb-3">
      <b-form-group
        label-for="passrowd"
        label="Пароль"
      >
        <b-form-input
          id="password"
          type="password"
          v-model="password"
        />
      </b-form-group>
    </div>
    <b-button
      class="mt-3"
      type="submit"
      variant="primary"
      data-id="login-button-submit"
      :disabled="isSubmitting"
    >
      Войти
    </b-button>
  </b-form>
</template>

<script>
export default {
  name: 'LoginApp',
  data() {
    return {
      username: 'user',
      password: 'xxxyz'
    };
  },
  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmitting;
    }
  },
  methods: {
    onSubmit() {
      // eslint-disable-next-line no-console
      console.log('submitted form');
      this.$store.commit('loginStart');
      this.$router.push({ name: 'dashboard' });
    }
  }
};
</script>

<style scoped>

</style>
