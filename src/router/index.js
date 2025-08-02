import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import Templates from "../views/Templates.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/", name: "home", component: Home },
        { path: "/menu", name: "menu", component: Menu },
        { path: "/templates", name: "templates", component: Templates },
    ],
});

export default router;
