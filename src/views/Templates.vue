<template>
    <div class="view-wrapper">
        <div class="view-header">
            <div>
                <h1 class="view-title">Choose a Template</h1>
                <p class="view-subtitle">
                    Select a template to start building your restaurant's
                    website
                </p>
            </div>
            <div>
                <h3>Select Primary Brand Color</h3>
                <n-color-picker
                    v-model:value="primaryColor"
                    :show-alpha="false"
                    size="medium"
                    style="max-width: 200px"
                />
                <p class="mt-2">
                    Selected Color:
                    <span :style="{ color: primaryColor }">{{
                        primaryColor
                    }}</span>
                </p>
            </div>
        </div>

        <div class="template-grid">
            <Template
                v-for="template in templates"
                :key="template.id"
                :name="template.name"
                :description="template.description"
                :img="template.img"
                :primary-color="primaryColor"
            />
        </div>
    </div>
</template>

<script>
import Template from "@/partials/templates/Template.vue";
import { NCard, NColorPicker } from "naive-ui";

export default {
    components: {
        Template,
        NCard,
        NColorPicker,
    },
    data() {
        return {
            primaryColor: "#409eff", // default Naive UI blue
        };
    },
    computed: {
        templates() {
            return [
                {
                    id: 1,
                    name: "Modern Bistro",
                    description:
                        "Sleek and contemporary design for modern eateries.",
                    img: "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=1200",
                },
                {
                    id: 2,
                    name: "Classic Diner",
                    description:
                        "Retro-inspired layout perfect for diners and casual spots.",
                    img: "https://cdn.pixabay.com/photo/2015/09/06/00/11/restaurant-926524_1280.jpg",
                },
                {
                    id: 3,
                    name: "Elegant Fine Dining",
                    description:
                        "Sophisticated design for upscale dining experiences.",
                    img: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg?auto=compress&cs=tinysrgb&w=1200",
                },
                {
                    id: 5,
                    name: "Trendy Foodtruck",
                    description:
                        "Vibrant and mobile-friendly design for food trucks.",
                    img: "https://images.pexels.com/photos/2227960/pexels-photo-2227960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                },
                {
                    id: 4,
                    name: "Casual Cafe",
                    description:
                        "Warm and inviting layout for cafes and coffee shops.",
                    img: "https://images.pexels.com/photos/1089570/pexels-photo-1089570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                },
                {
                    id: 7,
                    name: "Seaside Grill",
                    description:
                        "Beach-themed design perfect for seaside restaurants.",
                    img: "https://images.pexels.com/photos/10895800/pexels-photo-10895800.jpeg?auto=compress&cs=tinysrgb&w=1200",
                },
                {
                    id: 8,
                    name: "Urban Eatery",
                    description:
                        "Chic and modern design for urban dining experiences.",
                    img: "https://images.pexels.com/photos/769152/pexels-photo-769152.jpeg?auto=compress&cs=tinysrgb&w=1200",
                },
            ];
        },
    },
};
</script>

<style lang="scss">
.template-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px !important;
    justify-content: flex-start;
    padding: 2em;
    margin: 2em;
}
</style>
