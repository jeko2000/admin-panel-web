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
import { computed, defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const router = useRouter();
    const email = ref('');
    const password = ref('');
    const disableButton = computed(() => !email.value || !password.value)

    function onLogin(): void {
      router.push('/');
    }

    return { email, password, disableButton, onLogin };
  }
});
</script>
