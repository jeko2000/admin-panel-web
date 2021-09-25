<template>
<h3 v-if="error">{{ formattedError }}</h3>
<announcement-summary-list
  :announcements="announcements"
></announcement-summary-list>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import AnnouncementSummaryList from '@/components/AnnouncementSummaryList.vue';
import { useStore } from "@/store";
import { ActionType } from "@/store/actions";

export default defineComponent({
  name: 'HomePage',
  components: {
    AnnouncementSummaryList
  },
  setup(){
    const store = useStore()
    const announcements = computed(() => store.state.announcements)
    const error = computed(() => store.state.error)
    const formattedError = computed(() => store.getters.formattedError);
    onMounted(() => store.dispatch(ActionType.LOAD_ANNOUNCEMENTS));
    return { announcements, store, error, formattedError };
  }
});
</script>
