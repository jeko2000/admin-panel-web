<template>
<base-form
  title="Sign in"
  @submit.prevent="onLogin">
  <div class="form-control">
    <input
      v-model="email"
      type="email"
      name="email"
      placeholder="Email"
      required
    >
  </div>
  <div class="form-control">
    <input
      v-model="password"
      type="password"
      name="password"
      placeholder="Password"
      required
    >
  </div>
  <base-button :disabled="disableButton" type="submit">
    Sign in
  </base-button>
</base-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { LoginRendition } from "../types/renditions";

export default defineComponent({
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  emits: ['login'],
  computed: {
    disableButton(): boolean {
      return !this.email || !this.password
    }
  },
  methods: {
    onLogin(): void {
      const loginRendition: LoginRendition = {
        email: this.email,
        password: this.password
      }
      this.$emit('login', loginRendition);
    }
  }
});
</script>
