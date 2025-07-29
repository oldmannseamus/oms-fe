<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    'href': String,
    'noFollow': Boolean,
    'noReferrer': Boolean,
  });

  const rel = computed(() => {
    const relArr = [];

    if (props.noFollow) {
      relArr.push("nofollow");
    }
    if (props.noReferrer) {
      relArr.push("noreferrer");
    }

    return relArr.join(' ');
  });

</script>

<template>
  <a
    :href="props.href"
    :rel="rel"
    target="_blank"
  >
    <slot></slot>
  </a>
</template>
