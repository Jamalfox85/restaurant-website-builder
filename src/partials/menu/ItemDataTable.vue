<template lang="">
    <div>
        <n-data-table
            :bordered="false"
            :single-line="false"
            :columns="createColumns()"
            :data="menuItems"
            :pagination="{ pageSize: 10 }"
        />
    </div>
</template>
<script>
import { NDataTable, NButton, NTag, NEllipsis } from "naive-ui";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { h } from "vue";
import drawer_items_edit from "@/partials/drawers/drawer_items_edit.vue";

export default {
    components: { NDataTable, NButton, NTag, NEllipsis },
    props: ["categoryIdFilters"],
    inject: ["openDrawer"],
    computed: {
        menuCategories() {
            return window.$store.getMenu.categories;
        },
        menuItemTags() {
            return window.$store.getMenu.tags;
        },
        menuItems() {
            const items = window.$store.getMenu.items;
            if (this.categoryIdFilters.length > 0) {
                return items.filter((item) =>
                    this.categoryIdFilters.includes(item.categoryId)
                );
            }
            return items;
        },
    },
    methods: {
        editItem(item) {
            this.openDrawer({
                component: drawer_items_edit,
                title: "Edit Item",
                props: {
                    item,
                },
            });
        },
        deleteItem(item) {
            window.$dialog.error({
                title: "Delete Item",
                content: `Are you sure you want to delete ${item.title}? This action cannot be undone.`,
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
                    title: "Category",
                    key: "category",
                    render(row) {
                        const category = self.menuCategories.find(
                            (cat) => cat.id === row.categoryId
                        );
                        return h(
                            NTag,
                            {
                                type: "info",
                                bordered: false,
                            },
                            {
                                default: () =>
                                    category ? category.title : "Unknown",
                            }
                        );
                    },
                },
                {
                    title: "Title",
                    key: "title",
                },
                {
                    title: "Price",
                    key: "price",
                },
                {
                    title: "Tags",
                    key: "tags",
                    render(row) {
                        const tags = row.tagIds.map((tagId) => {
                            let tag = self.menuItemTags.find(
                                (tag) => tag.id === tagId
                            );
                            return h(
                                NTag,
                                {
                                    style: {
                                        marginRight: "6px",
                                    },
                                    bordered: false,
                                    color: {
                                        color: tag.bgColor || "#f0f0f0",
                                        textColor: tag.textColor || "#000",
                                    },
                                },
                                {
                                    default: () => [
                                        tag.icon &&
                                            h(FontAwesomeIcon, {
                                                icon: ["fas", tag.icon],
                                                style: {
                                                    marginRight: "6px",
                                                },
                                            }),
                                        tag.title,
                                    ],
                                }
                            );
                        });
                        return tags;
                    },
                },
                {
                    title: "Description",
                    key: "description",
                    render(row) {
                        return h(
                            NEllipsis,
                            {
                                style: { maxWidth: "150px" },
                                tooltip: true,
                            },
                            {
                                default: () => row.description || " ",
                            }
                        );
                    },
                },
                {
                    title: "Image",
                    key: "img",
                    render(row) {
                        return h("img", {
                            src: row.img,
                            alt: row.title,
                            style: {
                                width: "35px",
                                height: "35px",
                            },
                        });
                    },
                },
                {
                    title: "Action",
                    key: "actions",
                    render(row) {
                        return [
                            h(
                                NButton,
                                {
                                    size: "small",
                                    type: "info",
                                    style: { marginRight: "8px" },
                                    onClick: () => self.editItem(row),
                                },
                                { default: () => "Edit" }
                            ),
                            h(
                                NButton,
                                {
                                    size: "small",
                                    type: "error",
                                    onClick: () => self.deleteItem(row),
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
