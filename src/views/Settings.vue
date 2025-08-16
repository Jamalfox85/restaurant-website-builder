<template>
    <div class="view-wrapper max-w-3xl mx-auto p-6">
        <div class="view-header">
            <h1 class="view-title">Settings</h1>
        </div>

        <div class="settings-form-wrapper">
            <n-form
                ref="settingsForm"
                :model="form"
                :rules="rules"
                label-placement="top"
                size="medium"
            >
                <!-- Account -->
                <div class="form-group">
                    <h2 class="group-title">Account Information</h2>
                    <n-form-item label="Email" path="email">
                        <n-input v-model:value="form.state" placeholder="CA" />
                    </n-form-item>
                </div>

                <!-- Address Info -->
                <div class="form-group">
                    <h2 class="group-title">Address Information</h2>
                    <n-form-item label="Restaurant Address" path="address">
                        <n-input
                            v-model:value="form.address"
                            placeholder="123 Main St, Springfield"
                        />
                    </n-form-item>

                    <n-form-item label="City" path="city">
                        <n-input
                            v-model:value="form.city"
                            placeholder="Springfield"
                        />
                    </n-form-item>
                    <div class="flex">
                        <n-form-item label="State" path="state">
                            <n-input
                                v-model:value="form.state"
                                placeholder="CA"
                            />
                        </n-form-item>

                        <n-form-item label="Postal Code" path="postalCode">
                            <n-input
                                v-model:value="form.postalCode"
                                placeholder="90210"
                            />
                        </n-form-item>
                    </div>
                </div>

                <!-- Business Information -->
                <div class="form-group">
                    <h2 class="group-title">Business Information</h2>
                    <n-form-item label="Business Hours" path="hours">
                        <n-dynamic-input
                            v-model:value="form.hours"
                            :on-create="
                                () => ({ day: '', open: null, close: null })
                            "
                        >
                            <template #default="{ value }">
                                <n-input
                                    v-model:value:value="value.day"
                                    placeholder="Day"
                                    style="width: 120px"
                                />
                                <n-time-picker
                                    v-model:value:value="value.open"
                                    placeholder="Open"
                                    format="hh:mm a"
                                    style="width: 120px"
                                    use12-hours
                                />
                                <n-time-picker
                                    v-model:value:value="value.close"
                                    placeholder="Close"
                                    format="hh:mm a"
                                    style="width: 120px"
                                    use12-hours
                                />
                            </template>
                        </n-dynamic-input>
                    </n-form-item>
                    <n-form-item label="Contact Phone Number" path="phone">
                        <n-input
                            v-model:value="form.phone"
                            placeholder="(555) 555-5555"
                        />
                    </n-form-item>

                    <n-form-item label="Contact Email" path="contactEmail">
                        <n-input
                            v-model:value="form.contactEmail"
                            placeholder="contact@example.com"
                        />
                    </n-form-item>
                </div>

                <!-- Save Button -->
                <n-form-item>
                    <n-button
                        type="primary"
                        @click="saveSettings"
                        :loading="saving"
                        block
                    >
                        Save Changes
                    </n-button>
                </n-form-item>
            </n-form>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import {
    NForm,
    NFormItem,
    NInput,
    NButton,
    NDynamicInput,
    NTimePicker,
} from "naive-ui";

export default {
    components: {
        NForm,
        NFormItem,
        NInput,
        NButton,
        NDynamicInput,
        NTimePicker,
    },
    setup() {
        const settingsForm = ref(null);
        const saving = ref(false);

        const form = ref({
            email: "",
            address: "",
            city: "",
            state: "",
            postalCode: "",
            hours: [],
            phone: "",
            contactEmail: "",
        });

        const rules = {
            address: [
                {
                    required: true,
                    message: "Address is required",
                    trigger: ["input"],
                },
            ],
            city: [
                {
                    required: true,
                    message: "City is required",
                    trigger: ["input"],
                },
            ],
            state: [
                {
                    required: true,
                    message: "State is required",
                    trigger: ["input"],
                },
            ],
            postalCode: [
                {
                    required: true,
                    message: "Postal code is required",
                    trigger: ["input"],
                },
            ],
            email: [
                {
                    type: "email",
                    message: "Please enter a valid email address",
                    trigger: ["input"],
                },
                {
                    required: true,
                    message: "Email is required",
                    trigger: ["input"],
                },
            ],
        };

        const saveSettings = () => {
            settingsForm.value.validate((errors) => {
                if (!errors) {
                    saving.value = true;
                    setTimeout(() => {
                        console.log("Saved settings:", form.value);
                        saving.value = false;
                    }, 1000);
                } else {
                    console.warn("Validation errors:", errors);
                }
            });
        };

        return {
            settingsForm,
            form,
            rules,
            saveSettings,
            saving,
        };
    },
};
</script>

<style lang="scss">
.settings-form-wrapper {
    margin: 2em;
    width: 50%;
    .form-group {
        margin: 1em 0;
        .group-title {
            margin-bottom: 0.5em;
            color: #333;
            font-weight: bold;
        }
        .flex {
            display: flex;
            gap: 1em;
            width: 100%;
            & > * {
                flex-grow: 1;
            }
        }
    }
}
</style>
