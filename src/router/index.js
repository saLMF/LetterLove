import {createRouter, createWebHistory} from "vue-router";

import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {title: "A Love Letter in Bloom"},
  },
  {path: "/:pathMatch(.*)*", redirect: "/"},
];
