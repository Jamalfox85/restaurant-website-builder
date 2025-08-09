<template>
    <n-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-placement="top"
        size="medium"
        class="signin-form"
    >
        <h1 class="mb-6 text-2xl font-semibold">Sign In</h1>

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
                placeholder="Enter your password"
                show-password
            />
        </n-form-item>

        <n-form-item>
            <n-button
                type="primary"
                @click="handleSubmit"
                :loading="loading"
                block
            >
                Sign In
            </n-button>
        </n-form-item>

        <p class="text-sm mt-2">
            Don't have an account?
            <RouterLink to="/signup" class="text-blue-600 underline"
                >Sign Up</RouterLink
            >
        </p>
    </n-form>
</template>

<script>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { NForm, NFormItem, NInput, NButton } from "naive-ui";

export default {
    components: { NForm, NFormItem, NInput, NButton },
    data() {
        return {
            formRef: null,
            loading: false,
            form: {
                email: "",
                password: "",
            },
            rules: {
                email: [
                    {
                        required: true,
                        message: "Email is required",
                        trigger: ["input", "submit"],
                    },
                    {
                        type: "email",
                        message: "Please enter a valid email address",
                        trigger: ["input", "submit"],
                    },
                ],
                password: [
                    {
                        required: true,
                        message: "Password is required",
                        trigger: ["input", "submit"],
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
                    // Call your sign-in API here, e.g.:
                    // await api.signin(this.form);

                    // After successful sign-in, redirect to dashboard or home
                    window.$message.success("Signin successful!");
                    this.$router.push("/");
                } catch (error) {
                    window.$message.error(
                        "Signin failed. Please check your credentials."
                    );
                    console.error("Signin error:", error);
                } finally {
                    this.loading = false;
                }
            });
        },
    },
};
</script>

<style scoped>
.signin-form {
    max-width: 400px;
    margin: 2rem auto;
    padding: 1rem;
}
</style>
