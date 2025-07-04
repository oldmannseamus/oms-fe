<script setup>
  import Header from "./Header.vue"; 
  import Footer from "./Footer.vue";
</script>

<template>
  <header>
    <slot name="header">
      <Header />
    </slot>
  </header>
  <slot></slot>
  <footer>
    <slot name="footer">
      <Footer />
    </slot>
  </footer>
</template>

<style scoped>
  header {
    line-height: 1.5;
    max-height: 100vh;
  }

  @media (min-width: 1024px) {
    :root {
      display: grid;
      grid-template:
        "a b" auto
        "c c" auto / 1fr 1fr;
    }

    header {
      grid-area: "a";
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }


    main {
      grid-area: "b";
    }

    footer {
      grid-area: "c";
    }
  }
</style>
