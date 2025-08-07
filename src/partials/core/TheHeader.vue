<template>
    <div class="header_wrapper">
        <n-dropdown
            trigger="hover"
            :options="dropdownOptions"
            @select="handleSelect"
        >
            <div class="profile-group"></div>
        </n-dropdown>
    </div>
</template>

<script>
import { NDropdown } from "naive-ui";

export default {
    components: { NDropdown },
    data() {
        return {
            dropdownOptions: [
                {
                    label: "Profile", // and settings
                    key: "profile",
                },
                {
                    label: "Logout",
                    key: "logout",
                },
            ],
        };
    },
    methods: {
        handleSelect(key) {
            this.$router.push(`/${key}`);
        },
    },
};
</script>

<style scoped>
.header_wrapper {
    display: flex;
    align-items: center;
    padding: 0 3em;
    border: solid 1px black;
}
.profile-group {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: solid 2px black;
    margin-left: auto;
    cursor: pointer;
}
</style>
