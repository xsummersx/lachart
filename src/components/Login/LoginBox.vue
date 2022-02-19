<template>
    <!-- 登录 -->
    <el-form
        autocomplete="off"
        ref="formRef"
        label-width="60px"
        :model="formData"
        class="loginForm sign-in-form"
    >
        <el-form-item
            label="账号"
            prop="emailText"
            :rules="[
                {
                    min: 6,
                    max: 30,
                    message: '请输入账号6~30位',
                },
                {
                    required: true,
                    message: '账号不能为空',
                    trigger: 'blur',
                },
            ]"
        >
            <el-input autocomplete="off" placeholder="请输入账号" v-model="formData.emailText"></el-input>
        </el-form-item>
        <el-form-item
            label="密码"
            prop="pwdText"
            :rules="[
                {
                    required: true,
                    message: '密码不能为空',
                    trigger: 'blur',
                },
                {
                    min: 6,
                    max: 30,
                    message: '请输入密码6~30位',
                },
            ]"
        >
            <el-input
                autocomplete="off"
                type="password"
                placeholder="请输入密码"
                v-model="formData.pwdText"
            ></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="success" class="submit_btn">游客登录</el-button>
            <el-button type="primary" @click="submitForm(formRef)" class="submit_btn">登录</el-button>
        </el-form-item>
        <slot name="forget"></slot>
    </el-form>
</template>
<script setup lang="ts">
import { ref } from "vue"
import { submitForm } from "@/utils/login/login";
import type { ElForm } from "element-plus";
type FormInstance = InstanceType<typeof ElForm>;
const formData = ref({
    emailText: "",
    pwdText: "",
});

const formRef = ref<FormInstance>();
</script>
<style scoped>
.sign-in-form {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
    background: #fff;
    padding: 35px;
    border: 1px solid #f1f3f7;
    border-radius: 16px;
}
</style>