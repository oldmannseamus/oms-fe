<script setup lang="ts">
  import { RouterLink } from 'vue-router';
</script>

<template>
  <h1 class="green">Hi. I&apos;m James.</h1>
  <p>I&apos;m a software developer based in Chicago.</p>
  <p>My specialties are user interface development, web-native computer graphics, and engineering management.</p>
  <p>You can view my resume <RouterLink to='/profile'>here</RouterLink>, or learn more about my work <RouterLink to='/projects'>here</RouterLink>.</p>
</template>
