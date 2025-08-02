<template lang="">
    <div class="sidepanel_wrapper">
        <p v-for="route in routes" @click="nav(route.name)">
            {{ route.label }}
        </p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            routes: [
                { name: "home", path: "/", label: "Home" },
                { name: "menu", path: "/menu", label: "Menu" },
                { name: "templates", path: "/templates", label: "Templates" },
            ],
        };
    },
    methods: {
        nav(view) {
            this.$router.push({ name: view });
        },
    },
};
</script>
<style lang="scss">
.sidepanel_wrapper {
    border: solid 4px green;
    background-color: rgba(0, 255, 0, 0.553);
}
</style>
