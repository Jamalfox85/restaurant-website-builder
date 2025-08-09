<template>
    <n-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-placement="top"
        size="medium"
        class="signup-form"
        :validate-trigger="[]"
    >
        <h1 class="mb-6 text-2xl font-semibold">Sign Up</h1>

        <n-form-item label="Email" path="email">
            <n-input
                v-model:value="form.email"
                type="email"
                placeholder="Enter your email"
            />
        </n-form-item>

        <n-form-item label="Password" path="password">
            <n-input
                v-model:value="form.password"
                type="password"
                placeholder="Create a password"
                show-password
            />
        </n-form-item>

        <n-form-item label="Confirm Password" path="confirmPassword">
            <n-input
                v-model:value="form.confirmPassword"
                type="password"
                placeholder="Confirm your password"
                show-password
            />
        </n-form-item>

        <n-form-item label="Restaurant Name (optional)" path="restaurantName">
            <n-input
                v-model:value="form.restaurantName"
                placeholder="Your restaurant's name"
            />
        </n-form-item>

        <n-form-item>
            <n-button
                type="primary"
                @click="handleSubmit"
                :loading="loading"
                block
            >
                Sign Up
            </n-button>
        </n-form-item>

        <p class="text-sm mt-2">
            Already have an account?
            <RouterLink to="/signin" class="text-blue-600 underline"
                >Sign In</RouterLink
            >
        </p>
    </n-form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { NForm, NFormItem, NInput, NButton } from "naive-ui";

export default {
    components: { NForm, NFormItem, NInput, NButton },
    data() {
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

        return {
            formRef: null,
            loading: false,
            form: {
                email: "",
                password: "",
                confirmPassword: "",
                restaurantName: "",
            },
            rules: {
                email: [
                    {
                        required: true,
                        message: "Email is required",
                        trigger: "input",
                    },
                    {
                        type: "email",
                        message: "Please enter a valid email address",
                        trigger: "input",
                    },
                ],
                password: [
                    {
                        required: true,
                        message: "Password is required",
                        trigger: "input",
                    },
                    {
                        validator: (rule, value) => {
                            if (!passwordRegex.test(value)) {
                                return new Error(
                                    "Password must be at least 8 characters and include uppercase, lowercase, number, and special character"
                                );
                            }
                            return true;
                        },
                    },
                ],
                confirmPassword: [
                    {
                        required: true,
                        message: "Please confirm your password",
                        trigger: ["input"],
                    },
                    {
                        validator: (rule, value) => {
                            if (value !== this.form.password) {
                                return new Error("Passwords do not match");
                            }
                            return true;
                        },
                    },
                ],
            },
        };
    },
    methods: {
        handleSubmit() {
            this.$refs.formRef.validate(async (validationErrors) => {
                if (validationErrors && validationErrors.length > 0) return;
                this.loading = true;
                try {
                    // Your signup API call here
                    // await api.signup(this.form);
                    // After signup, navigate:
                    window.$message.success("Signup successful!");
                    this.$router.push("/");
                } catch (err) {
                    window.$message.error("Signup failed. Please try again.");
                    console.error("Signup error:", err);
                } finally {
                    this.loading = false;
                }
            });
        },
    },
};
</script>

<style scoped>
.signup-form {
    max-width: 400px;
    margin: 2rem auto;
    padding: 1rem;
}
</style>
