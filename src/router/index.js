import { createRouter, createWebHistory } from "vue-router";
import Home from "@/wiews/Home.vue";
import About from "@/wiews/About.vue";
import Country from "@/wiews/Country.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home
  },
  {
    name: "About",
    path: "/about",
    component: About
  },
  {
    name: "Country",
    path: "/country/:name",
    component: Country,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
