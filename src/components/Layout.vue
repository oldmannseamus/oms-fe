<script setup>
  import { ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import Header from './Header.vue'; 
  import Footer from './Footer.vue';

  const route = useRoute();
  const isHome = ref();

  watch(
    () => route.name,
    () => { isHome.value = route.name === 'home' },
  );
</script>

<template>
  <div class="layout" :class="{home: isHome}">
    <header>
      <slot name="header">
        <Header />
      </slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer">
        <Footer />
      </slot>
    </footer>
  </div>
</template>

<style scoped>
  .layout {
    padding: 2rem;
    transition: grid-template-columns 0.45s ease-in-out;
  }

  header {
    line-height: 1.5;
    max-height: 100vh;
  }

  @media (min-width: 1024px) {
    .layout {
      display: grid;
      grid-template:
        "a b b b" auto
        "c c c c" auto / 1fr 3fr;
      padding: 0 2rem;

      &.home {
        grid-template-columns: 1fr 1fr;
      }
    }

    header {
      grid-area: a;
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }

    main {
      grid-area: b;
    }

    footer {
      grid-area: c;
    }
  }
</style>
