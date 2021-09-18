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
import { defineComponent } from "vue";

export default defineComponent({
  name: 'AnnouncementPage',
  data() {
    return {
      announcement: {
        id: '10',
        author: 'Johnny',
        title: 'Sample title',
        content: 'Massa, eget egestas purus viverra accumsan in nisl nisi, scelerisque eu ultrices vitae, auctor eu augue ut. Sodales ut etiam sit amet nisl purus, in mollis nunc sed id semper.',
        createdAt: new Date("2019-01-16")
      },
    }
  }
});
</script>
