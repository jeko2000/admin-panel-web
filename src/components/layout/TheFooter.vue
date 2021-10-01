<template>
<footer class="text-center text-muted bg-dark">
  <div class="p-4">
    <base-router-link class="text-muted text-decoration-none" to="/">APanel v{{ version }}</base-router-link>
  </div>
</footer>

</template>

<script lang="ts">
import { useStore } from "@/store";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: 'TheFooter',
  setup() {
    const store = useStore()
    const version = computed(() => store.state.version)
    return { version }
  }
});
</script>
