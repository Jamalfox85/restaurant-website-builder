<template lang="">
    <div class="sidepanel_wrapper">
        <div
            class="sidepanel-header"
            style="
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 20px;
                margin-bottom: 4em;
            "
        >
            <h1 role="title" style="font-size: 18px" class="sidepanel-title">
                Restaurant Website Builder
            </h1>
            <img
                src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?_gl=1*175bit1*_ga*MTU2NjMyMTU3MS4xNzU0MjMwMzg5*_ga_8JE65Q40S6*czE3NTQ0Mjc3NjYkbzIkZzEkdDE3NTQ0Mjc3NzYkajUwJGwwJGgw"
                alt="Logo"
                style="width: 75%; height: auto; border: solid 1px #ccc"
            />
        </div>
        <n-menu
            v-model:value="activeKey"
            mode="vertical"
            :options="menuOptions"
            responsive
        />
    </div>
</template>
<script>
import { NButton, NMenu } from "naive-ui";
import { NIcon } from "naive-ui";
import { h } from "vue";
import { routes } from "@/router";

export default {
    components: { NButton, NMenu },
    data() {
        return {
            activeKey: "",
        };
    },
    computed: {
        menuOptions() {
            let menuRoutes = routes
                .map((layout) => {
                    return layout.children || [];
                })
                .flat()
                .filter((route) => route.showInMenu);

            let menuOptions = menuRoutes.map((route) => {
                return {
                    label: () =>
                        h(
                            "a",
                            {
                                href: route.path,
                            },
                            route.label
                        ),
                    key: route.name,
                    icon: this.renderIcon(route.icon),
                };
            });
            return menuOptions;
        },
    },
    methods: {
        nav(view) {
            this.$router.push({ name: view });
        },
        renderIcon(icon) {
            return () => h(NIcon, null, { default: () => h(icon) });
        },
    },
    mounted() {
        this.activeKey = this.$route.name;
    },
    watch: {
        $route(to) {
            this.activeKey = to.name;
        },
    },
};
</script>
<style lang="scss">
.sidepanel_wrapper {
    border: solid 1px black;
    background-color: #03256c;
    color: #fff;
    .sidepanel-title {
    }
}
</style>
