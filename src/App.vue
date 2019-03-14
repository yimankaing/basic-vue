<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Vue.js App"/>
    <p v-if="!!result">result = {{result}}</p>
    <button @click="calculate">calculate</button>

    <div>{{ message }}</div>

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import {sum} from './someFunction.js';
export default {

  components: {
    HelloWorld
  },
  data() {
    return {
      message: "hello message",
      value1: 10,
      value2: 20,
      result: 0
    };
  },
  methods: {
    calculate() {
      this.result = sum(this.value1 , this.value2);
    }
  }
};
</script>

<style>
</style>
