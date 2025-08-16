<template lang="">
    <div>
        <n-data-table
            :bordered="false"
            :single-line="false"
            :columns="createColumns()"
            :data="menuCategories"
            :pagination="{ pageSize: 10 }"
        />
    </div>
</template>
<script>
import { NDataTable, NButton, NTag, NEllipsis, NText } from "naive-ui";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { h } from "vue";
import drawer_category_edit from "@/partials/drawers/drawer_category_edit.vue";

export default {
    components: { NDataTable, NButton, NTag, NEllipsis, NText },
    inject: ["openDrawer"],
    computed: {
        menuCategories() {
            return window.$store.getMenu.categories;
        },
    },
    methods: {
        editCategory(cat) {
            this.openDrawer({
                component: drawer_category_edit,
                title: "Edit Category",
                props: {
                    cat,
                },
            });
        },
        deleteCategory(cat) {
            window.$dialog.error({
                title: "Delete Category",
                content: `Are you sure you want to delete the category: ${cat.title}? This action cannot be undone.`,
                positiveText: "Delete",
                negativeText: "Cancel",
                onPositiveClick: () => {
                    window.$message.success("Sure");
                },
            });
        },
        createColumns() {
            const self = this;

            return [
                {
                    title: "Category Name",
                    key: "title",
                },
                {
                    title: "Subtitle",
                    key: "subTitle",
                },
                {
                    title: "Action",
                    key: "actions",
                    render(row) {
                        return [
                            h(
                                NText,
                                {
                                    style: {
                                        color: "#03256C",
                                        cursor: "pointer",
                                        marginRight: "8px",
                                    },
                                    onClick: () => self.editCategory(row),
                                },
                                { default: () => "Edit" }
                            ),
                            h(
                                "NText",
                                {
                                    style: {
                                        marginRight: "8px",
                                    },
                                },
                                "|"
                            ),
                            h(
                                NText,
                                {
                                    style: {
                                        color: "#03256C",
                                        cursor: "pointer",
                                    },
                                    onClick: () => self.deleteCategory(row),
                                },
                                { default: () => "Delete" }
                            ),
                        ];
                    },
                },
            ];
        },
    },
};
</script>
<style lang=""></style>
