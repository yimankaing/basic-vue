<template>
  <div>
    Hello {{username}}
    <button @click="logout">log out</button>
  </div>
</template>

<script>
export default {
  props: ["username"],
  methods: {
    logout() {
      this.$emit("setUser", null);
    }
  }
};
</script>

<style scoped>
</style>