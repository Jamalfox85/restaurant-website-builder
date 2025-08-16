<template>
    <n-drawer
        v-model:show="visible"
        :title="title"
        :width="width"
        @update:show="handleUpdateShow"
    >
        <div class="drawer-header">
            <h1>{{ title }}</h1>
            <n-button @click="handleUpdateShow(false)" type="primary">
                Close
            </n-button>
        </div>
        <component :is="drawerComponent" :modal-props="props" />
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

<style lang="scss">
.drawer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 2em;
}
.form-wrapper {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    padding: 2em;
    .flex {
        display: flex;
        gap: 1em;
        width: 100%;
        & > * {
            flex-grow: 1;
            width: 50%;
        }
    }
    .n-form-item,
    .n-card {
        margin-bottom: 20px;
    }
    .modal-actions-wrapper {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
    }
}
</style>
