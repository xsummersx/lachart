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
                    required: true,
                    message: '账号不能为空',
                    trigger: 'blur',
                },
                {
                    min: 6,
                    max: 30,
                    message: '请输入密码6~30位',
                },
            ]"
        >
            <el-input autocomplete="off" placeholder="请输入账号" v-model="formData.emailText"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="danger" @click="forget(formRef)" class="submit_btn">重置密码</el-button>
        </el-form-item>
    </el-form>
</template>
<script setup lang="ts">
import { ref } from "vue"
import { forget } from "@/utils/login/login";
import type { ElForm } from "element-plus";
type FormInstance = InstanceType<typeof ElForm>;
const formData = ref({
    emailText: "",
    pwdText: "",
});

const formRef = ref<FormInstance>();
</script>
