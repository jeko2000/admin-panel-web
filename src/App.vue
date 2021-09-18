<template>
<LoginForm @login="onLogin" />
<RegistrationForm @register="onRegister"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginForm from './components/LoginForm.vue';
import RegistrationForm from './components/RegistrationForm.vue';
import { LoginRendition, RegistrationRendition } from "./types/renditions";

export default defineComponent({
  name: 'App',
  components: {
    LoginForm,
    RegistrationForm
  },
  methods: {
    onLogin(loginRendition: LoginRendition): void {
      console.log(`Received login rendition: ${JSON.stringify(loginRendition)}`);
    },
    onRegister(registrationRendition: RegistrationRendition): void {
      console.log(`Received registration rendition: ${JSON.stringify(registrationRendition)}`);
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
