<template>
<nav>
  <base-router-link to="/">Home</base-router-link>
  <base-router-link to="/register">Register</base-router-link>
  <base-router-link to="/login">Sign in</base-router-link>
</nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'TheHeader'
});
</script>
