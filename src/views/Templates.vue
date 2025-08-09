<template lang="">
    <div>
        <h1>Templates</h1>
        <div class="template-grid">
            <Template
                v-for="template in templates"
                :key="template.id"
                :name="template.name"
                :description="template.description"
                :img="template.img"
            ></Template>
        </div>
    </div>
</template>
<script>
import Template from "@/partials/templates/Template.vue";
export default {
    components: {
        Template,
    },
    data() {
        return {};
    },
    computed: {
        templates() {
            return [
                {
                    id: 1,
                    name: "Template #1",
                    description:
                        "This template description This template description This template description This template description",
                    img: "https://wpdean.com/wp-content/uploads/2024/10/what-is-a-mockup.jpg",
                },
                {
                    id: 2,
                    name: "Template #2",
                    description:
                        "This template description This template description This template description This template description",
                    img: "https://static.wixstatic.com/media/c746c3_ae71f0f45ecf49d2a75d0c8d0b3ede9c~mv2.png/v1/fill/w_980,h_735,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c746c3_ae71f0f45ecf49d2a75d0c8d0b3ede9c~mv2.png",
                },
                {
                    id: 3,
                    name: "Template #3",
                    description:
                        "This template description This template description This template description This template description",
                    img: "https://img.glyphs.co/img?src=aHR0cHM6Ly9zMy5tZWRpYWxvb3QuY29tL3Jlc291cmNlcy9GcmVlLVdlYnNpdGUtTW9ja3VwLVBhY2stUHJldmlldy0xLmpwZw&q=70&enlarge=true&h=777&w=1200",
                },
                {
                    id: 4,
                    name: "Template #4",
                    description:
                        "This template description This template description This template description This template description",
                    img: "https://cdn.dribbble.com/userupload/7786799/file/original-03f0f6275fc002a74cbfa423f19d8cbf.jpg?resize=400x0",
                },
            ];
        },
    },
};
</script>
<style lang="scss">
.template-grid {
    display: grid;
    gap: 20px !important;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
</style>
