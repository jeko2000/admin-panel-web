<template>
<LoginForm @login="onLogin"></LoginForm>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginForm from './components/LoginForm.vue';

export default defineComponent({
  name: 'App',
  components: {
    LoginForm
  },
  methods: {
    onLogin(email: string, password: string) {
      console.log(`Logged in as ${email} and ${password}`);
    }
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
