import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;
//plugin
import VueRouter from "vue-router";
Vue.use(VueRouter);
//Pages or Components
import Post from "./components/Post.vue";
import Profile from "./components/Profile.vue";

//best for external file
const routes = [
  { path: "/post", component: Post },
  { path: "/profile", component: Profile }
];

const router = new VueRouter({
  // mode: "history",
  routes // short for `routes: routes`
});

// new Vue({
//   render: h => h(App)
// }).$mount("#app");

// new Vue({
//   router
// }).$mount("#app");

// i18n, store, 
  new Vue({router, ...App}).$mount("#app");


