<script setup>
  import ExternalLink from '@components/ExternalLink.vue';
  import ContactForm from '@components/forms/ContactForm.vue';
</script>

<template>
  <div class="contact">
    <h1>Contact Me</h1>
    <p>
      Send me an email by filling out the form below.
    </p>
    <ContactForm />
    <p>
      You can also connect with me on
      <ExternalLink href="https://www.linkedin.com/in/james-thompson-bb8ba81b/" noReferrer>LinkedIn</ExternalLink>.
    </p>
  </div>
</template>
