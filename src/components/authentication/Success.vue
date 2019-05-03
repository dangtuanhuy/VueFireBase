<template>
  <b-container>
    <h4>REGISTER SUCCESS</h4>Black to Home
    <button @click="navigateToHome" class="btn btn-primary">Home Page</button>
  </b-container>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style>
</style>
