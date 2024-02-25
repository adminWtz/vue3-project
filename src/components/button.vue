// 子组件
<script setup>
// 声明接收父组件传递的属性值：自定义属性
let propsData = defineProps(["title", "error", "flat"]);

function showPropsData() {
  // 在 JS 中，需要通过 defineProps 返回对象来访问 props 的内容
  console.log(propsData);
  console.log(propsData.title);
  console.log(propsData.error);
  console.log(propsData.flat);
}

function changeErrorProps() {
  // 不能直接修改 props 的数据，因为是只读的
  propsData.error = !propsData.error;
}
</script>

<template>
  <!-- 在视图模板上，可直接使用 props 中的属性 -->
  <button
    :class="{ error, flat }"
    @click="showPropsData"
    @mousedown.right="changeErrorProps"
  >
    {{ title }}
  </button>
</template>

<style>
button {
  border: none;
  padding: 12px 25px;
}

.error {
  background-color: rgb(197, 75, 75);
  color: white;
}

.flat {
  box-shadow: 0 0 10px grey;
}
</style>
