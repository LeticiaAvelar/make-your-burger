import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/pedidos",
    name: "pedidos",
    component: () => import("../views/Pedidos.vue"),
  },
];

// Ajuste aqui: BASE_URL precisa ser o nome do repositório
const router = createRouter({
  history: createWebHistory("/make-your-burger/"), // <- importante para GitHub Pages
  routes,
});

export default router;
