<template lang="">
    <div class="menu_wrapper">
        <div class="view-header">
            <h1 class="view-title text-red-500">Menu</h1>
            <n-button type="primary">Publish</n-button>
        </div>
        <div class="view-content">
            <Filters @updateFilters="updateFilters" />
            <DataTable :categoryIdFilters="categoryIdFilters" />
        </div>
    </div>
</template>
<script>
import Filters from "@/partials/menu/Filters.vue";
import DataTable from "@/partials/menu/DataTable.vue";
import { NButton } from "naive-ui";
export default {
    components: { NButton, Filters, DataTable },
    data() {
        return {
            categoryIdFilters: [],
        };
    },
    methods: {
        updateFilters(filters) {
            this.categoryIdFilters = filters;
        },
    },
};
</script>
<style lang="scss"></style>
