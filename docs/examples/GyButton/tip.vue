<template>
  <div class="demo-container">
    <gy-button text style="font-size: 28px" tip="编辑" icon="Edit" />
    <gy-button text tip="删除" icon="Delete" />
    <gy-button link tip="primary" icon="Search" />
    <gy-button text tip="primary" icon="Search" />
    <gy-button text type="primary" tip="primary" icon="Edit" />
    <gy-button text type="success" tip="success" icon="Check" />
    <gy-button text type="info" tip="info" icon="Message" />
    <gy-button text type="warning" tip="warning" icon="Star" />
    <gy-button
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
