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
      this.$emit('login', this.email, this.password);
    }
  }
});
</script>

<style scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
}

.form-control {
    margin: 1rem 0;
}
</style>
