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
            <n-form-item label="Subtitle" path="subtitle">
                <n-input v-model:value="formData.subtitle" type="textarea" />
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
                title: this.modalProps.cat.title || "",
                subtitle: this.modalProps.cat.subtitle || "",
            },
            formRules: {
                title: [{ required: true, message: "Title is required" }],
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
