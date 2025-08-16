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
            <div class="profile-group">
                <div
                    class="profile-image"
                    style="display: flex; align-items: center; gap: 20px"
                >
                    <img
                        src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?_gl=1*175bit1*_ga*MTU2NjMyMTU3MS4xNzU0MjMwMzg5*_ga_8JE65Q40S6*czE3NTQ0Mjc3NjYkbzIkZzEkdDE3NTQ0Mjc3NzYkajUwJGwwJGgw"
                        alt="Profile Image"
                        style="width: 50px; height: 50px; border-radius: 50%"
                    />
                    <div class="profile-name">John Doe</div>
                </div>
            </div>
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
    .profile-group {
        width: 100%;
    }
}
</style>
