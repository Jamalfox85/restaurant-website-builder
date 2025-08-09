<template>
    <n-config-provider :theme-overrides="themeOverrides">
        <RouterView />

        <drawer-core
            v-model:visibleProp="drawerVisible"
            :title="drawerTitle"
            :component-prop="drawerComponent"
            :props="drawerProps"
            :width="600"
            @close="closeDrawer"
        />
    </n-config-provider>
</template>

<script lang="js">
import { NConfigProvider } from 'naive-ui'
import { RouterView } from 'vue-router';
import { provide } from "vue";

import { themeOverrides } from './services/naiveui';
import TheHeader from './partials/core/TheHeader.vue';
import TheSidepanel from './partials/core/TheSidepanel.vue';
import DrawerCore from "@/partials/drawers/core.vue";

    export default {
        components: {NConfigProvider, TheHeader, TheSidepanel, DrawerCore},
        data() {
            return {
                themeOverrides: themeOverrides(),

                drawerVisible: false,
                drawerTitle: "",
                drawerComponent: null,
                drawerProps: {},

                isAuthenticated: false
            }
        },
        methods: {
            openDrawer(data) {
                this.drawerComponent = data.component;
                this.drawerTitle = data.title;
                this.drawerVisible = true;
                this.drawerProps = data.props || {};
            },
            closeDrawer() {
                this.drawerVisible = false;
                this.drawerComponent = null;
            },
        },
        created() {
            provide('openDrawer', this.openDrawer);
            provide('closeDrawer', this.closeDrawer);
        },
    };
</script>

<style lang="scss">
.app_wrapper {
    height: 100vh;
    display: flex;
    .sidepanel_wrapper {
        width: 250px;
        max-width: 250px;
        min-width: 250px;
        height: 100%;
    }
    .main_wrapper {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        .header_wrapper {
            height: 75px;
        }
        .content_wrapper {
            flex-grow: 1;
            padding: 20px;
            border: solid 1px black;
        }
    }
}
</style>
