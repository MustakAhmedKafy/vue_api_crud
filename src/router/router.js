import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Student from "../pages/Student.vue";

const routes = [
  { path: "/", component: Home, name: Home },
  { path: "/about", component: About, name: About },
  { path: "/student", component: Student, name: Student },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;