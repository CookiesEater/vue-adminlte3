<template>
  <a-lte-layout-login>
    <router-link slot="header" to="/">
      <strong>Admin</strong>LTE <i>Vue</i>
    </router-link>

    <p class="text-center">Sign in to start your session</p>
    <b-form class="mb-2" @submit.prevent="submit">
      <b-form-group>
        <b-input-group>
          <b-input-group-text slot="prepend">
            <font-awesome-icon icon="envelope" />
          </b-input-group-text>
          <b-form-input v-model="form.username" name="username" type="text" placeholder="Email" />
        </b-input-group>
      </b-form-group>
      <b-form-group>
        <b-input-group>
          <b-input-group-text slot="prepend">
            <font-awesome-icon icon="key" />
          </b-input-group-text>
          <b-form-input v-model="form.password" name="password" type="password" placeholder="Password" />
        </b-input-group>
        <router-link slot="description" to="">Forget password?</router-link>
      </b-form-group>
      <b-row>
        <b-col cols="8">
          <b-form-checkbox v-model="form.rememberMe">
            Remember me
          </b-form-checkbox>
        </b-col>
        <b-col cols="4">
          <b-button variant="primary" type="submit" block>Sign In</b-button>
        </b-col>
      </b-row>
    </b-form>
    <p class="text-center">- OR -</p>
    <b-button variant="primary" type="button" block>Sign in using Facebook</b-button>
    <b-button variant="danger" type="button" block>Sign in using Facebook</b-button>
    <p class="text-center mt-3">
      <router-link to="">Register a new membership</router-link>
    </p>
  </a-lte-layout-login>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
        rememberMe: false,
      },
    };
  },
  methods: {
    submit() {
      this.$router.push('/');
    },
  },
};
</script>
