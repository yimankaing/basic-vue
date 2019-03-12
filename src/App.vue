<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Vue.js App"/>
    <p v-if="!!result">result = {{result}}</p>
    <button @click="calculate">calculate</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  data() {
    return {
      value1: 10,
      value2: 20,
      result: 0
    };
  },
  methods: {
    calculate(){
      this.result = this.value1 + this.value2
    }
  }
};
</script>

<style>
</style>
