<template>
  <div id="app">
    <!-- <div class="container"> -->
    <!-- <label for="inputa">Input A</label> -->
    <!-- <input v-model.number="inputa" type="number"> -->
    <!-- <br> -->
    <!-- <label for="inputb">Input B</label> -->
    <!-- <input v-model="inputb" type="number"> -->
    <!-- <input v-model.number="inputb" type="number"> -->
    <!-- </div> -->
    <!-- <input type="radio" id="sum" v-model="operator" value="0">sum -->
    <!-- <input type="radio" id="sum" v-model="operator" value="sum">sum -->
    <!-- <input type="radio" id="sub" v-model="operator" value="1">sub -->
    <!-- <input type="radio" id="sub" v-model="operator" value="sub">sub -->
    <!-- <input type="radio" id="mul" v-model="operator" value="2">mul -->
    <!-- <input type="radio" id="mul" v-model="operator" value="mul">mul -->
    <!-- <input type="radio" id="div" v-model="operator" value="3">div -->
    <!-- <input type="radio" id="div" v-model="operator" value="div">div -->
    <!-- <br> -->

    <!-- <button @click="calculator">calculate</button> -->
    <!-- <p v-if="!!result">result = {{result}}</p> -->

    <!-- <sign-in @setUser="updateUser" v-if="!currentUser"/> -->
    <!-- <home @setUser="updateUser" :username="currentUser.username" v-else/> -->

    <!-- <sign-in v-if="!currentUser" @setUser="updateUser"></sign-in> -->

    <!-- <home v-if="currentUser" :username="currentUser.username"></home> -->
    <router-link to="/post">Go to Post</router-link>
    <router-link to="/profile">Go to Profile</router-link>
    <div style="background: #e4e4e4; width: 80%; height: 80%">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import { calculate } from "./someFunction.js";

import SignIn from "./components/SignIn";
import Home from "./components/Home";

export default {
  components: { SignIn, Home },
  data() {
    return {
      currentUser: null
      // operator: "", //add default value operator: 'sum'
      // inputa: "",
      // inputb: "",
      // result: ''
    };
  },
  methods: {
    updateUser(user) {
      this.currentUser = user;
      // this.currentUser = {username: 'admin', password: '123456'}
    }
    // calculator() {
    // this.result = calculate(this.inputa, this.inputb, this.operator);
    // return parseFloat(this.inputa) + parseFloat(this.inputb);
    // }
  }
};
</script>

<style>
</style>
