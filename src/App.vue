<template>
  <div id="app">
    <div class="container">
      <label for="inputa">Input A</label>
      <input v-model.number="inputa" type="number">
      <br>
      <label for="inputb">Input B</label>
      <!-- <input v-model="inputb" type="number"> -->
      <input v-model.number="inputb" type="number">
    </div>
    <!-- <input type="radio" id="sum" v-model="operator" value="0">sum -->
    <input type="radio" id="sum" v-model="operator" value="sum">sum
    <!-- <input type="radio" id="sub" v-model="operator" value="1">sub -->
    <input type="radio" id="sub" v-model="operator" value="sub">sub
    <!-- <input type="radio" id="mul" v-model="operator" value="2">mul -->
    <input type="radio" id="mul" v-model="operator" value="mul">mul
    <!-- <input type="radio" id="div" v-model="operator" value="3">div -->
    <input type="radio" id="div" v-model="operator" value="div">div
    <br>

    <button @click="calculator">calculate</button>
    <p v-if="!!result">result = {{result}}</p>
  </div>
</template>

<script>
import { calculate } from "./someFunction.js";
export default {
  data() {
    return {
      operator: "", //add default value operator: 'sum'
      inputa: "",
      inputb: "",
      result: ''
    };
  },
  methods: {
    calculator() {
      this.result = calculate(this.inputa, this.inputb, this.operator);
      // return parseFloat(this.inputa) + parseFloat(this.inputb);
    }
  }
};
</script>
</script>

<style>
</style>
