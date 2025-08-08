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
        <n-button type="primary" @click="submitForm">Submit</n-button>
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
    data() {
        return {
            formData: {
                title: "",
                subtitle: "",
            },
            formRules: {
                title: [{ required: true, message: "Title is required" }],
            },
        };
    },
    computed: {},
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
