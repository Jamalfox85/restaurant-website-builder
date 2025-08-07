<template lang="">
    <div>
        <div class="categories">
            <n-tag v-model:checked="showAllResults" checkable type="success"
                >All</n-tag
            >
            <n-tag
                v-for="(category, index) in categories"
                v-model:checked="categories[index].active"
                checkable
                >{{ category.title }}</n-tag
            >
        </div>
    </div>
</template>
<script>
import { NTag } from "naive-ui";

export default {
    components: { NTag },
    data() {
        return {
            showAllResults: true,
            categories: [],
        };
    },
    mounted() {
        let rawCategories = window.$store.getMenu.categories;
        this.categories = rawCategories.map((category) => {
            category.active = false;
            return category;
        });
    },
    watch: {
        showAllResults: {
            handler(newValue) {
                this.categories.forEach((category) => {
                    if (newValue) {
                        category.active = false;
                    }
                });
            },
        },
        categories: {
            handler(newCategories) {
                let activeFilterIds = [];
                newCategories.forEach((category) => {
                    if (category.active) {
                        activeFilterIds.push(category.id);
                        this.showAllResults = false;
                    }
                });
                this.$emit("updateFilters", activeFilterIds);
            },
            deep: true,
        },
    },
};
</script>
<style lang="scss">
.menu_wrapper {
    .categories {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 20px;
    }
}
</style>
