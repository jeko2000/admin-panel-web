<template>
<nav class="navbar navbar-expand-sm navbar-light bg-light">
  <div class="container-fluid">
    <base-router-link class="navbar-brand ms-" to="/">APanel</base-router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbarNavAltMarkup" class="collapse navbar-collapse">
      <div class="navbar-nav ms-auto">
        <base-router-link class="nav-link" to="/register">Register</base-router-link>
        <base-router-link class="nav-link" to="/login">Sign In</base-router-link>
      </div>
    </div>
  </div>
</nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'TheHeader'
});
</script>
