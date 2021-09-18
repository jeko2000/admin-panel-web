<template>
<base-card>
  <h1>Latest announcements</h1>
  <announcement-summary
    v-for="announcement in announcements"
    :announcement="announcement"
    :key="announcement.id"
  ></announcement-summary>
</base-card>
</template>

<script lang="ts">
import { Announcement } from "@/types/models";
import { defineComponent, PropType } from "vue";
import AnnouncementSummary from './AnnouncementSummary.vue';

export default defineComponent({
  name: 'AnnouncementSummaries',
  props: {
    announcements: {
      type: Object as PropType<Announcement[]>,
      required: true
    }
  },
  components: {
    AnnouncementSummary
  }
});
</script>
