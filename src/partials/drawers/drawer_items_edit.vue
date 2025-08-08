<template lang="">
    <div class="form-wrapper">
        <n-form
            ref="form"
            :model="formData"
            :rules="formRules"
            label-placement="left"
            label-width="120px"
        >
            <n-form-item label="Title" path="title">
                <n-input v-model:value="formData.title" />
            </n-form-item>
            <n-form-item label="Description" path="description">
                <n-input v-model:value="formData.description" type="textarea" />
            </n-form-item>
            <n-form-item label="Price" path="price">
                <n-input-number v-model:value="formData.price" />
            </n-form-item>
            <n-form-item label="Image URL" path="img">
                <n-input v-model:value="formData.img" />
            </n-form-item>
            <n-form-item label="Category" path="category">
                <n-select
                    v-model:value="formData.category"
                    :options="menuCategories"
                    placeholder="Select a category"
                />
            </n-form-item>
            <n-form-item label="Tags" path="tags">
                <n-select
                    v-model:value="formData.tags"
                    :options="menuTags"
                    multiple
                    placeholder="Select tags"
                />
            </n-form-item>
        </n-form>
        <n-button type="primary" @click="submitForm">Save Changes</n-button>
    </div>
</template>
<script>
import {
    NForm,
    NFormItem,
    NInput,
    NInputNumber,
    NButton,
    NSelect,
} from "naive-ui";
export default {
    components: { NForm, NFormItem, NInput, NInputNumber, NButton, NSelect },
    props: ["modalProps"],
    data() {
        return {
            formData: {
                title: this.modalProps.item.title || "",
                description: this.modalProps.item.description || "",
                price: this.modalProps.item.price || 0,
                img: this.modalProps.item.img || "",
                category: this.modalProps.item.categoryId || null,
                tags: this.modalProps.item.tagIds || [],
            },
            formRules: {
                title: [{ required: true, message: "Title is required" }],
                description: [
                    { required: true, message: "Description is required" },
                ],
                price: [{ required: true, message: "Price is required" }],
                img: [{ required: true, message: "Image URL is required" }],
            },
        };
    },
    computed: {
        menuCategories() {
            let categories = window.$store.getMenu.categories;
            return categories.map((category) => ({
                label: category.title,
                value: category.id,
            }));
        },
        menuTags() {
            let tags = window.$store.getMenu.tags;
            return tags.map((tag) => ({
                label: tag.title,
                value: tag.id,
            }));
        },
    },
    methods: {
        submitForm() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.$emit("submit", this.formData);
                    this.$emit("close");
                } else {
                    console.log("Validation failed");
                }
            });
        },
    },
};
</script>
<style lang="scss">
.form-wrapper {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .n-form-item {
        margin-bottom: 20px;
    }
    .n-button {
        align-self: flex-end;
    }
}
</style>
