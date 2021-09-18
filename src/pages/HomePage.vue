<template>
<announcement-summaries
  :announcements="announcements"
></announcement-summaries>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AnnouncementSummaries from '@/components/AnnouncementSummaries.vue';
import { Announcement } from '@/types/models';

export default defineComponent({
  name: 'HomePage',
  components: {
    AnnouncementSummaries
  },
  data() {
    return {
      announcements: [
        {
          id: '10',
          author: 'Johnny',
          title: 'Sample title',
          content: 'Massa, eget egestas purus viverra accumsan in nisl nisi, scelerisque eu ultrices vitae, auctor eu augue ut. Sodales ut etiam sit amet nisl purus, in mollis nunc sed id semper.',
          createdAt: new Date("2019-01-16")
        },
        {
          id: '12',
          author: 'Shelly',
          title: 'Another title',
          content: 'Sem fringilla ut morbi tincidunt. Ligula ullamcorper malesuada proin libero nunc, consequat interdum varius sit amet, mattis vulputate enim nulla aliquet porttitor lacus, luctus accumsan tortor posuere ac ut consequat.',
          createdAt: new Date("2019-03-16")
        }
      ] as Announcement[]
    }
  }
});
</script>
