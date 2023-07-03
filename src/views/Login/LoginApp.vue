<template>
  <b-form
    @submit.prevent="login"
    class="login-form"
  >
    <b-form-group
      label-for="language"
      :label="$t('pageLogin.language')"
    >
      <b-form-select
        id="language"
        v-model="$i18n.locale"
        :options="languages"
        data-test-id="login-select-language"
      />
    </b-form-group>
    <b-form-group
      label-for="username"
      :label="$t('pageLogin.username')"
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
        :label="$t('pageLogin.password')"
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
      {{ $t('pageLogin.logIn') }}
    </b-button>
  </b-form>
</template>

<script>
import { mapState } from 'vuex';
import { actionTypes } from '@/store/modules/auth';
import i18n from '@/i18n';

export default {
  name: 'LoginApp',
  data() {
    return {
      username: 'user',
      password: 'xxxyz',
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
    login() {
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
      localStorage.setItem('storedLanguage', i18n.locale);
      this.$store.commit('setLanguagePreference', i18n.locale);
    }
  }
};
</script>

<style scoped>

</style>
