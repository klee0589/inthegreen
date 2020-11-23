import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Odds from "../views/Odds.vue";
import Sports from "../views/Sports.vue";
import Lotto from "../views/Lotto.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Odds",
    component: Odds,
    redirect: "/sports"
  },
  {
    path: "/sports",
    name: "Sports",
    component: Sports
  },
  {
    path: "/lotto",
    name: "Lotto",
    component: Lotto
  }
];

const router = new VueRouter({
  routes
});

export default router;
