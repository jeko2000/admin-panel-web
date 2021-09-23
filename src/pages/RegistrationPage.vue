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
import { RegistrationRendition } from "@/types/renditions";
import { computed, defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: 'RegistrationPage',
  setup() {
    const router = useRouter();
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const password = ref('');
    const passwordConfirmation = ref('');

    const disableButton = computed(() => {
      return !(firstName.value
        && lastName.value
        && email.value
        && password.value
        && password.value === passwordConfirmation.value)
    });

    function onSubmit(): void {
      const rendition: RegistrationRendition = {
        firstName:  firstName.value,
        lastName:  lastName.value,
        email:  email.value,
        password:  password.value
      }
      console.log(rendition)
      router.push('/');
    }

    return {
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation,
      disableButton,
      onSubmit
    }
  }
});
</script>
