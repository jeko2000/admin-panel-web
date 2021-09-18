<template>
<RouterLink>
  <slot></slot>
</RouterLink>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'BaseRouterLink'
});
</script>
