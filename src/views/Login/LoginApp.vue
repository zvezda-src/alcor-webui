<template>
  <b-form
    @submit.prevent="onSubmit"
    class="login-form"
  >
    <b-form-group
      label-for="language"
      label="Language"
    >
      <b-form-select
        id="language"
        v-model="selected"
        :options="languages"
        data-test-id="login-select-language"
      />
    </b-form-group>
    <b-form-group
      label-for="username"
      label="Urername"
    >
      <b-form-input
        id="username"
        type="text"
        v-model="username"
      />
    </b-form-group>
    <div class="login-form__section mb-3">
      <b-form-group
        label-for="password"
        label="Password"
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
      Log in
    </b-button>
  </b-form>
</template>

<script>
import { mapState } from 'vuex';
import { actionTypes } from '@/store/modules/auth';

export default {
  name: 'LoginApp',
  data() {
    return {
      username: 'user',
      password: 'xxxyz',
      selected: 'en-US',
      languages: [
        {
          value: 'en-US',
          text: 'English'
        },
        {
          value: 'ru-RU',
          text: 'Русский'
        }
      ]
    };
  },
  computed: {
    ...mapState({
      isSubmitting: state => state.auth.isSubmitting,
      validationErrors: state => state.auth.validationErrors
    })
  },
  methods: {
    onSubmit() {
      // eslint-disable-next-line no-console
      console.log('submitted form');
      this.$store
        .dispatch(actionTypes.login, {
          username: this.username,
          password: this.password
        })
        .then(() => {
          // this.$router.push({ name: 'dashboard' });
        });
      this.$router.push({ name: 'dashboard' });
    }
  }
};
</script>

<style scoped>

</style>
