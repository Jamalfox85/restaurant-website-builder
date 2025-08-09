<template>
    <div class="app_wrapper">
        <TheSidepanel class="sidepanel_wrapper" />
        <div class="main_wrapper">
            <TheHeader class="header_wrapper" />
            <div class="content_wrapper">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script>
import TheHeader from "@/partials/core/TheHeader.vue";
import TheSidepanel from "@/partials/core/TheSidepanel.vue";

export default {
    components: { TheHeader, TheSidepanel },
};
</script>
