<template lang="">
    <div class="form-wrapper">
        <n-form
            ref="form"
            :model="formData"
            :rules="formRules"
            label-placement="top"
            size="medium"
        >
            <n-form-item label="Title" path="title">
                <n-input v-model:value="formData.title" />
            </n-form-item>
            <n-form-item label="Description" path="description">
                <n-input v-model:value="formData.description" type="textarea" />
            </n-form-item>
            <div class="flex">
                <n-form-item label="Price" path="price">
                    <n-input-number v-model:value="formData.price" />
                </n-form-item>
                <n-form-item label="Category" path="category">
                    <n-select
                        v-model:value="formData.category"
                        :options="menuCategories"
                        placeholder="Select a category"
                    />
                </n-form-item>
            </div>
            <n-card title="Image Upload" class="max-w-md mx-auto">
                <n-upload
                    :default-file-list="formData.fileList"
                    list-type="image-card"
                    accept="image/*"
                    :max="1"
                    :on-change="handleChange"
                    :on-remove="handleRemove"
                >
                </n-upload>

                <div
                    v-if="formData.previewUrl"
                    class="mt-4"
                    style="margin-top: 1em"
                >
                    <n-image
                        :src="formData.previewUrl"
                        width="200"
                        class="rounded-md shadow"
                        preview-disabled
                    />
                </div>
            </n-card>
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
    NCard,
    NUpload,
    NImage,
} from "naive-ui";
export default {
    components: {
        NForm,
        NFormItem,
        NInput,
        NInputNumber,
        NButton,
        NSelect,
        NCard,
        NUpload,
        NImage,
    },
    props: ["modalProps"],
    data() {
        return {
            formData: {
                title: this.modalProps.item.title || "",
                description: this.modalProps.item.description || "",
                price: this.modalProps.item.price || 0,
                previewUrl: this.modalProps.item.img || "",
                category: this.modalProps.item.categoryId || null,
                tags: this.modalProps.item.tagIds || [],
                fileList: this.modalProps.item.fileList || [],
            },
            formRules: {
                title: [{ required: true, message: "Title is required" }],
                description: [
                    { required: true, message: "Description is required" },
                ],
                price: [{ required: true, message: "Price is required" }],
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
        handleChange() {
            console.log("File changed");
        },
        handleRemove() {
            console.log("File removed");
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
}
</style>
