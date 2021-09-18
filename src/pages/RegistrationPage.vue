<template>
<base-form
  title="Register"
  @submit.prevent="onSubmit">
  <div class="form-control">
    <input
      v-model="firstName"
      type="text"
      name="first-name"
      placeholder="First Name"
      required
    >
  </div>
  <div class="form-control">
    <input
      v-model="lastName"
      type="text"
      name="last-name"
      placeholder="Last Name"
      required
    >
  </div>
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
  <div class="form-control">
    <input
      v-model="passwordConfirmation"
      type="password"
      name="password"
      placeholder="Confirm Password"
      required
    >
  </div>
  <base-button :disabled="disableButton" type="submit">
    Register
  </base-button>
</base-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RegistrationRendition } from "../types/renditions";

export default defineComponent({
  name: 'RegistrationPage',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  },
  emits: ['register'],
  computed: {
    disableButton(): boolean {
      return !(this.firstName
        && this.lastName
        && this.email
        && this.password
        && this.password === this.passwordConfirmation)
    }
  },
  methods: {
    onSubmit(): void {
      const rendition: RegistrationRendition = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      }
      this.$emit('register', rendition);
    }
  }
});
</script>
