<template lang="">
    <div class="view-wrapper">
        <div class="view-header">
            <h1 class="view-title text-red-500">Menu</h1>
            <n-button type="primary">Publish</n-button>
        </div>
        <div class="view-content">
            <n-tabs type="segment" default-value="items" animated>
                <n-tab-pane name="categories" tab="Categories">
                    <div class="tab-content">
                        <div class="table-header">
                            <n-button
                                ghost
                                size="large"
                                class="create-bttn"
                                @click="newCategory"
                            >
                                New Category
                            </n-button>
                        </div>
                        <CategoryDataTable />
                    </div>
                </n-tab-pane>
                <n-tab-pane name="items" tab="Menu Items">
                    <div class="tab-content">
                        <div class="table-header">
                            <Filters @updateFilters="updateFilters" />
                            <n-button
                                ghost
                                size="large"
                                class="create-bttn"
                                @click="newItem"
                                >New Item</n-button
                            >
                        </div>
                        <ItemDataTable :categoryIdFilters="categoryIdFilters" />
                    </div>
                </n-tab-pane>
            </n-tabs>
        </div>
    </div>
</template>
<script>
import Filters from "@/partials/menu/Filters.vue";
import ItemDataTable from "@/partials/menu/ItemDataTable.vue";
import CategoryDataTable from "@/partials/menu/CategoryDataTable.vue";
import { NTabs, NTabPane, NButton } from "naive-ui";
import drawer_items_create from "@/partials/drawers/drawer_items_create.vue";
import drawer_category_create from "@/partials/drawers/drawer_category_create.vue";
export default {
    components: {
        NTabs,
        NTabPane,
        NButton,
        Filters,
        ItemDataTable,
        CategoryDataTable,
    },
    inject: ["openDrawer"],

    data() {
        return {
            categoryIdFilters: [],
        };
    },
    methods: {
        updateFilters(filters) {
            this.categoryIdFilters = filters;
        },
        newItem() {
            this.openDrawer({
                component: drawer_items_create,
                title: "Create Item",
            });
        },
        newCategory() {
            this.openDrawer({
                component: drawer_category_create,
                title: "Create Category",
            });
        },
    },
};
</script>
<style lang="scss">
.table-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .create-bttn {
        margin-left: auto;
    }
}
.tab-content {
    padding: 2em;
}
</style>
