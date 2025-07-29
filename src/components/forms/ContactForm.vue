<script>

</script>

<template>
  <sub>All fields are required.</sub>
  <form @submit.prevent @submit="handleSubmit">
    <div class="form-item">
      <label for="contact-name" aria-hidden="true">Your Name</label>
      <input id="contact-name" type="text" placeholder="Your Name" required />
    </div>
    <div class="form-item">
      <label for="contact-email" aria-hidden="true">Your Email</label>
      <input id="contact-email" type="email" placeholder="Your Email" required />
    </div>
    <div class="form-item">
      <label for="contact-message" aria-hidden="true">Your Message</label>
      <textarea id="contact-message" placeholder="Your Message" required></textarea>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<style scoped>
  .form-item label {
    position: absolute;
    top: -999px;
  }

  textarea {
    resize: none;
    font-size: inherit;
    line-height: inherit;
    font-family: inherit;
  }
</style>
