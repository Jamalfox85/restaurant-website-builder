import { createRouter, createWebHistory } from "vue-router";

import AuthenticatedLayout from "@/layouts/AuthenticatedLayout.vue";
import UnauthenticatedLayout from "@/layouts/UnauthenticatedLayout.vue";

import Home from "@/views/Home.vue";
import Menu from "@/views/Menu.vue";
import Templates from "@/views/Templates.vue";
import Settings from "@/views/Settings.vue";
import Domains from "@/views/Domains.vue";
import Billing from "@/views/Billing.vue";
import Analytics from "@/views/Analytics.vue";

import SignUp from "@/views/SignUp.vue";
import SignIn from "@/views/SignIn.vue";

import {
    Home as HomeIcon,
    FastFood as MenuIcon,
    Grid as TemplateIcon,
    Settings as SettingsIcon,
    Globe as DomainsIcon,
    Wallet as BillingIcon,
    Analytics as AnalyticsIcon,
} from "@vicons/ionicons5";

export const routes = [
    {
        path: "/",
        component: AuthenticatedLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: "/",
                name: "home",
                label: "Home",
                component: Home,
                icon: HomeIcon,
                showInMenu: true,
            },
            {
                path: "menu",
                name: "menu",
                label: "Menu",
                component: Menu,
                icon: MenuIcon,
                showInMenu: true,
            },
            {
                path: "templates",
                name: "templates",
                label: "Templates",
                component: Templates,
                icon: TemplateIcon,
                showInMenu: true,
            },
            {
                path: "settings",
                name: "settings",
                label: "Settings",
                component: Settings,
                icon: SettingsIcon,
                showInMenu: true,
            },
            {
                path: "domains",
                name: "domains",
                label: "Domains",
                component: Domains,
                icon: DomainsIcon,
                showInMenu: true,
            },
            {
                path: "billing",
                name: "billing",
                label: "Billing",
                component: Billing,
                icon: BillingIcon,
                showInMenu: true,
            },
            {
                path: "analytics",
                name: "analytics",
                label: "Analytics",
                component: Analytics,
                icon: AnalyticsIcon,
                showInMenu: true,
            },
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
