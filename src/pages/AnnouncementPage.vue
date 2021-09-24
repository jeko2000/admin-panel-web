<template>
<base-card v-if="announcement">
  <h2>{{ announcement.title }}</h2>
  <h5>By {{ announcement.author }}</h5>
  <p>Published at {{ announcementFormattedDate }}</p>
  <br />
  <p>{{ announcement.content }}</p>
</base-card>
<basecard v-else>
  <h4>No such announcement found</h4>
  Consider returning <base-router-link to="/">Home</base-router-link>.
</basecard>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from "vue";
import { formatDate } from '@/util/stringUtil';
import { useStore } from "@/store";
import { Announcement } from "@/types/models";

export default defineComponent({
  name: 'AnnouncementPage',
  props: {
    announcementId: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore();
    const announcement: ComputedRef<Announcement | undefined> = computed(() => store.getters.getTaskById(props.announcementId))
    const formattedDate = announcement.value ? formatDate(announcement.value.createdAt) : ''
    return { announcement, formattedDate }
  }
});
</script>
