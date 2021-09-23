<template>
<base-card>
  <h2>{{ announcement.title }}</h2>
  <h5>By {{ announcement.author }}</h5>
  <p>Published at {{ announcementFormattedDate }}</p>
  <br />
  <p>{{ announcement.content }}</p>
</base-card>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import { formatDate } from '@/util/stringUtil';

export default defineComponent({
  name: 'AnnouncementPage',
  setup() {
    const announcement = reactive({
      id: '10',
      author: 'Johnny',
      title: 'Sample title',
      content: 'Massa, eget egestas purus viverra accumsan in nisl nisi, scelerisque eu ultrices vitae, auctor eu augue ut. Sodales ut etiam sit amet nisl purus, in mollis nunc sed id semper.',
      createdAt: new Date("2019-01-16"),
    });

    const announcementFormattedDate = computed(() => formatDate(announcement.createdAt));
    return { announcement, announcementFormattedDate };
  }
});
</script>
