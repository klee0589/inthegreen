import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Sports from "../views/Sports.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/sports",
    name: "Sports",
    component: Sports
  }
];

const router = new VueRouter({
  routes
});

export default router;
