<template>
    <n-drawer
        v-model:show="visible"
        :title="title"
        @update:show="handleUpdateShow"
    >
        <div class="drawer-header">
            <h1>{{ title }}</h1>
            <n-button @click="handleUpdateShow(false)" type="primary">
                Close
            </n-button>
        </div>
        <component :is="drawerComponent" />
    </n-drawer>
</template>

<script>
import { markRaw } from "vue";

import { NDrawer, NButton } from "naive-ui";
export default {
    components: { NDrawer, NButton },
    props: ["visibleProp", "title", "componentProp", "props", "width"],
    data() {
        return {
            visible: false,
            drawerComponent: null,
        };
    },
    methods: {
        handleUpdateShow(val) {
            this.visible = val;
            if (!val) {
                this.$emit("close");
            }
        },
    },
    watch: {
        visibleProp: {
            handler(newVal) {
                this.visible = newVal;
            },
            deep: true,
        },
        componentProp(newVal) {
            if (newVal) {
                this.drawerComponent = markRaw(newVal);
            }
        },
    },
};
</script>
