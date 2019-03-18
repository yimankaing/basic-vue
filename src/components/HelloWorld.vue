<template>
  <div id="app">
    <div class="container">
      <label for="inputa">Input A</label>
      <input v-model="form.inputa" type="number">
      <br>
      <label for="inputb">Input B</label>
      <input v-model="form.inputb" type="number">
    </div>

    <button @click="calculate">calculate</button>
    <p v-if="!!form.result">result = {{form.result}}</p>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import { sum } from "../someFunction.js";

export default {
  data() {
    return {
      message: "",
      form: {
        //message: "hello message",
        inputa: 0,
        inputb: 0,
        result: 0
      }
    };
  },

  methods: {
    calculate() {
      const {inputa, inputb} = this.form;

      return this.form.result = sum(
        // this.form.inputa,
        // this.form.inputb
        inputa,
        inputb
        // parseInt(this.form.inputa),
        // parseInt(this.form.inputb)
      );
    }
  }
};
</script>