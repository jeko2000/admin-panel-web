<template>
<div>
  <slot></slot>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'BaseCard'
});
</script>

<style scoped>
div {
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.28);
    padding: 1rem;
    margin: 2rem auto;
    max-width: 40rem;
}
</style>
