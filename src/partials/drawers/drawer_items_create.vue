<template lang="">
    <div class="form-wrapper">
        <n-form
            ref="form"
            :model="formData"
            :rules="formRules"
            label-placement="top"
            size="medium"
        >
            <n-form-item label="Item Name" path="title">
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

                <div v-if="formData.previewUrl" class="mt-4">
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
        <div class="modal-actions-wrapper">
            <n-button type="primary" @click="submitForm">Submit</n-button>
        </div>
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
    data() {
        return {
            formData: {
                title: "",
                description: "",
                price: 0,
                previewUrl: "",
                fileList: [],
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
<style lang="scss"></style>
