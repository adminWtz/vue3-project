<script setup>
import { ref } from "vue";
import buttonVue from "./components/button.vue";

let isError = ref(false); // 主题
let isFlat = ref(false); // 阴影
let btnText = ref("普通按钮"); // 按钮文本
</script>

<template>
  主题：<input type="checkbox" v-model="isError" /> 阴影：<input
    type="checkbox"
    v-model="isFlat"
  />
  按钮文本：<input type="text" v-model="btnText" />
  <hr />
  <!-- 父向子传值，可采用属性的方式赋值 -->
  <buttonVue :title="btnText" :error="isError" :flat="isFlat" />
  <el-button>是</el-button>
</template>
