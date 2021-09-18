<template>
<base-card>
  <h1 v-if="title">{{ title }}</h1>
  <form>
    <slot></slot>
  </form>
</base-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'BaseForm',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
});
</script>

<style>
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
