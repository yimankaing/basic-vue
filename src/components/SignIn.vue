<template>
  <div>
    Username
    <input v-model="username">
    <br>Password
    <input v-model="password" type="password">
    <br>
    <button @click="login">Login</button>
    <p style="color: red">{{message}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return { username: "", password: "", message: "" };
  },
  methods: {
    login() {
      if (this.username === "admin" && this.password === "123456") {
        
        this.$emit("setUser", {
          username: this.username,
          password: this.password
        });
        
      } else {
        this.message = "incorrect username or password";
      }
    }
  }
};
</script>

<style scoped>
</style>