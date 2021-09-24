<template>
<h2>FOOTER</h2>
<h4>{{ version }}</h4>
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
