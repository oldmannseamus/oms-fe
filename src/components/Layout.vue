<script setup>
  import Header from "./Header.vue"; 
  import Footer from "./Footer.vue";
</script>

<template>
  <div class="layout">
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
  }

  header {
    line-height: 1.5;
    max-height: 100vh;
  }

  @media (min-width: 1024px) {
    .layout {
      display: grid;
      grid-template:
        "a b" auto
        "c c" auto / 1fr 1fr;
      padding: 0 2rem;
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
