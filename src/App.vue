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

<script lang="js">
import { RouterView } from 'vue-router';
import TheHeader from './partials/core/TheHeader.vue';
import TheSidepanel from './partials/core/TheSidepanel.vue';
    export default {
        components: {TheHeader, TheSidepanel}
    };
</script>

<style lang="scss">
.app_wrapper {
    height: 100vh;
    border: solid 4px blue;
    display: flex;
    .sidepanel_wrapper {
        width: 250px;
        height: 100%;
    }
    .main_wrapper {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        .header_wrapper {
            height: 75px;
        }
        .content_wrapper {
            flex-grow: 1;
            padding: 20px;
            border: solid 4px purple;
            background-color: rgba(175, 4, 175, 0.275);
        }
    }
}
</style>
