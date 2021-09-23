<template>
<base-card>
  <h2>{{ announcement.title }}</h2>
  <p>{{ announcementSummary }}</p>
  <p>By {{ announcement.author }}</p>
  <p>Published at {{ announcementFormattedDate }}</p>
  <base-router-link :to="announcementLink">Show more</base-router-link>
</base-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Announcement } from '@/types/models';
import { formatDate, truncate } from '../util/stringUtil';

export default defineComponent({
  name: 'AnnouncementSummary',
  props: {
    announcement: {
      type: Object as PropType<Announcement>,
      required: true
    }
  },
  computed: {
    announcementSummary(): string {
      return truncate(this.announcement.content, 20);
    },
    announcementFormattedDate(): string {
      return formatDate(this.announcement.createdAt);
    },
    announcementLink(): string {
      return '/announcements/' + this.announcement.id
    }
  }
});
</script>
