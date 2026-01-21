# GyButton

一个带有防抖功能的按钮组件，基于 Element Plus Button 扩展。

## 基本用法

<ClientOnly>
  <div>
    <gy-button @click="handleClick">点击按钮</gy-button>
    <gy-button type="primary" @click="handleClick">主要按钮</gy-button>
    <gy-button type="success" @click="handleClick">成功按钮</gy-button>
  </div>
</ClientOnly>

<script setup>
const handleClick = () => {
  console.log('按钮被点击')
}
</script>

## Props

| 参数                           | 类型   | 默认值 | 说明                                |
| ------------------------------ | ------ | ------ | ----------------------------------- |
| time                           | Number | 1000   | 防抖时间（毫秒）                    |
| 其他 Element Plus Button Props | -      | -      | 支持 Element Plus Button 的所有属性 |

## Events

| 事件  | 说明                   | 参数 |
| ----- | ---------------------- | ---- |
| click | 按钮点击事件（已防抖） | -    |
