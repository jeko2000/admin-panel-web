<template>
<h3 v-if="error">{{error}}</h3>
<announcement-summaries
  :announcements="announcements"
></announcement-summaries>
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from "vue";
import AnnouncementSummaries from '@/components/AnnouncementSummaries.vue';
import { Announcement } from '@/types/models';
import announcementService from "@/services/announcementService";
import {pipe} from 'fp-ts/function';
import * as TE from 'fp-ts/TaskEither';

export default defineComponent({
  name: 'HomePage',
  components: {
    AnnouncementSummaries
  },
  setup(){
    const announcements: Ref<Announcement[]> = ref([]);
    const error = ref('');

    onMounted(() => {
      return pipe(
        announcementService.getAll(),
        TE.matchW(
          e => error.value = e.message,
          a => announcements.value = a),
        invoke => invoke()
      )
    });

    return { announcements, error };
  }
});
</script>
