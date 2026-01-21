<template>
  <div class="demo-container">
    <GyButton text style="font-size: 28px" tip="编辑" icon="Edit" />
    <GyButton text tip="删除" icon="Delete" />
    <GyButton link tip="primary" icon="Search" />
    <GyButton text tip="primary" icon="Search" />
    <GyButton text type="primary" tip="primary" icon="Edit" />
    <GyButton text type="success" tip="success" icon="Check" />
    <GyButton text type="info" tip="info" icon="Message" />
    <GyButton text type="warning" tip="warning" icon="Star" />
    <GyButton
      text
      type="danger"
      tip="danger"
      icon="Delete"
      :tipProps="{
        effect: 'light',
        placement: 'bottom',
      }"
    />
  </div>
</template>
<style scoped lang="scss">
.demo-container {
  padding: 20px;
}
</style>
