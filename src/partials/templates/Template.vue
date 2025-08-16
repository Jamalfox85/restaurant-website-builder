<template lang="">
    <div class="template-container">
        <div class="template-img">
            <img :src="img" alt="Template Image" />
        </div>
        <div class="template-block-header">
            <p>{{ name }}</p>
        </div>
        <div class="template-body">
            <p>{{ description }}</p>
            <div class="template-actions">
                <n-button
                    color="#03256C"
                    class="select-button"
                    @click="selectTemplate"
                    >Select</n-button
                >
                <n-button ghost class="preview-button">Preview</n-button>
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
    width: 300px;
    padding: 1em;

    .template-img {
        width: 100%;
        // height: 200px;
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        border-radius: 8px;
        // margin: 10px 0;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 5px;
        }
    }
    .template-block-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.2rem;
        margin: 8px 0;
        // padding: 10px;
    }
    .template-body {
        // padding: 10px;
        font-size: 16px;
        .template-actions {
            display: flex;
            justify-content: center;
            margin-top: 8px;
            .select-button,
            .preview-button {
                flex-grow: 1;
                border-radius: 8px;
            }
            .select-button {
                margin-right: 8px;
            }
        }
    }
}
</style>
