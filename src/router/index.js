// import { createRouter, createWebHistory } from "vue-router";

// import Home from "../views/Home.vue";
// import Menu from "../views/Menu.vue";
// import Templates from "../views/Templates.vue";

// import SignUp from "@/views/SignUp.vue";
// import SignIn from "@/views/SignIn.vue";

// const router = createRouter({
//     history: createWebHistory(import.meta.env.BASE_URL),
//     routes: [
//         // Authenticated routes
//         { path: "/", name: "home", component: Home },
//         { path: "/menu", name: "menu", component: Menu },
//         { path: "/templates", name: "templates", component: Templates },

//         // Unauthenticated routes
//         { path: "/signup", name: "signup", component: SignUp },
//         { path: "/signin", name: "signin", component: SignIn },
//     ],
// });

// export default router;

import { createRouter, createWebHistory } from "vue-router";
// import { useAuthStore } from "@/stores/auth"; // <-- your Pinia auth store

import AuthenticatedLayout from "@/layouts/AuthenticatedLayout.vue";
import UnauthenticatedLayout from "@/layouts/UnauthenticatedLayout.vue";

// Pages
import Home from "@/views/Home.vue";
import Menu from "@/views/Menu.vue";
import Templates from "@/views/Templates.vue";
import SignUp from "@/views/SignUp.vue";
import SignIn from "@/views/SignIn.vue";

const routes = [
    {
        path: "/",
        component: AuthenticatedLayout,
        meta: { requiresAuth: true },
        children: [
            { path: "", name: "home", component: Home },
            { path: "menu", name: "menu", component: Menu },
            { path: "templates", name: "templates", component: Templates },
        ],
    },
    {
        path: "/",
        component: UnauthenticatedLayout,
        children: [
            { path: "signup", name: "signup", component: SignUp },
            { path: "signin", name: "signin", component: SignIn },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

// Navigation guard
router.beforeEach((to) => {
    // const auth = useAuthStore();
    const auth = { user: true }; // Mock authenticated user
    // const auth = { user: null }; // Mock unauthenticated user
    if (to.meta.requiresAuth && !auth.user) {
        return "/signin";
    }
});

export default router;
