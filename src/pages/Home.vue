<template>
  <div class="container">
    <div class="home">
      <h1>Home</h1>
      {{ message }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  computed: {
    message() {
      return this.$store.getters.getMessage;
    },
  },
};
</script>
