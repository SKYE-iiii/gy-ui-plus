<template>
  <div class="demo-container">
    <div style="display: flex; align-items: center">
      <div style="width: 140px; font-weight: 700">输入防抖时间：</div>
      <el-input-number
        style="width: 240px"
        v-model="time"
        placeholder="请输入防抖时间（毫秒）"
        :min="1000"
        :max="10000"
        :controls="false"
        @change="handleChange"
      />
    </div>
    <GyButton style="margin-top: 15px" color="#626aef" :time="time" @click="exportExcel">
      导出
    </GyButton>
  </div>
</template>
<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
const time = ref(1000)
const handleChange = (val: any) => {
  console.log('输入框的值：', val)
}
const exportExcel = () => {
  console.log('点击事件')
  ElMessage({
    message: '点击事件',
    type: 'success',
  })
}
</script>
<style scoped lang="scss">
.demo-container {
  padding: 20px;
}
</style>
