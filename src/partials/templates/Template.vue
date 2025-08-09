<template lang="">
    <div class="template-container">
        <div class="template-header">
            <p>{{ name }}</p>
        </div>
        <div class="template-img">
            <img :src="img" alt="Template Image" />
        </div>
        <div class="template-body">
            <p>{{ description }}</p>
            <div class="template-actions">
                <n-button
                    type="primary"
                    class="select-button"
                    @click="selectTemplate"
                    >Select</n-button
                >
                <n-button type="secondary" class="preview-button"
                    >Preview</n-button
                >
            </div>
        </div>
    </div>
</template>
<script>
import { NButton } from "naive-ui";
export default {
    components: {
        NButton,
    },
    props: ["name", "description", "img"],
    methods: {
        selectTemplate() {
            window.$dialog.warning({
                title: "Select Template",
                content: `Are you sure you want to update your template? This change will happen immediately.`,
                positiveText: "Confirm",
                negativeText: "Cancel",
                onPositiveClick: () => {
                    window.$message.success("Changes have been published.");
                },
            });
        },
    },
};
</script>
<style lang="scss">
.template-container {
    display: flex;
    flex-direction: column;
    width: 325px;
    padding: 1em;
    .template-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.2rem;
        padding: 10px;
    }
    .template-img {
        width: 100%;
        height: 200px;
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin: 10px 0;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 5px;
        }
    }
    .template-body {
        padding: 10px;
        .template-actions {
            display: flex;
            justify-content: center;
            margin-top: 14px;
            .select-button,
            .preview-button {
                margin: 0 8px;
            }
        }
    }
}
</style>
