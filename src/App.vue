<template>
<the-header></the-header>
<router-view></router-view>
<the-footer></the-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
import { RouterView } from 'vue-router';

export default defineComponent({
  name: 'App',
  components: {
    RouterView,
    TheFooter,
    TheHeader
  }
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
    box-sizing: border-box;
}

html {
    font-family: 'Roboto', sans-serif;
}

body {
    margin: 0;
}
</style>
