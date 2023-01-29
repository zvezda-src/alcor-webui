<template>
  <b-form class="login-form">
    <b-form-group
      label-for="username"
      label="Имя пользователя"
    >
      <b-form-input
        id="username"
      />
    </b-form-group>
    <div class="login-form__section mb-3">
      <b-form-group
        label-for="passrowd"
        label="Пароль"
      >
        <b-form-input
          id="password"
        />
      </b-form-group>
    </div>
    <b-button
      class="mt-3"
      type="sumbit"
      variant="primary"
      data-id="login-button-submit"
      to="/main"
    >
      Войти
    </b-button>
  </b-form>
</template>

<script>
export default {
  name: 'LoginApp'
};
</script>

<style scoped>

</style>
