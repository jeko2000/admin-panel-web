<template>
<h3 v-if="error">{{error}}</h3>
<announcement-summaries
  :announcements="announcements"
></announcement-summaries>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
  data() {
    return {
      announcements: [] as Announcement[],
      error: ''
    }
  },
  methods: {
    setAnnouncements(announcements: Announcement[]): void {
      this.announcements = announcements;
    },
    setError(error: Error): void {
      this.error = error.message;
    },
    loadAnnouncements(): Promise<void> {
      return pipe(
        announcementService.getAll(),
        TE.matchW(this.setError, this.setAnnouncements),
        invoke => invoke()
      )
    }
  },
  created(): Promise<void> {
    return pipe(
      announcementService.getAll(),
      TE.matchW(
        e => {
          this.error = e.message;
        },
        announcements => {
          this.announcements = announcements
        }
      ),
      invoke => invoke()
    )
  }
});
</script>
