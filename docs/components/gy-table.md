# GyTable

一个功能丰富的表格组件，支持虚拟滚动、编辑、排序等多种功能。

## 基本用法

<ClientOnly>
  <gy-table
    :table-data="tableData"
    :columns="columns"
    :is-show-pagination="false"
  />
</ClientOnly>

<script setup>
import { ref } from 'vue'

const tableData = ref([
  { id: 1, name: '张三', age: 25 },
  { id: 2, name: '李四', age: 30 },
  { id: 3, name: '王五', age: 28 }
])

const columns = ref([
  { prop: 'id', label: 'ID' },
  { prop: 'name', label: '姓名' },
  { prop: 'age', label: '年龄' }
])
</script>

## 主要 Props

| 参数             | 类型    | 默认值                                | 说明             |
| ---------------- | ------- | ------------------------------------- | ---------------- |
| tableData        | Array   | []                                    | 表格数据         |
| columns          | Array   | []                                    | 表头配置         |
| paginationData   | Object  | { total: 0, pageNo: 1, pageSize: 10 } | 分页数据         |
| isShowPagination | Boolean | true                                  | 是否显示分页     |
| useVirtual       | Boolean | false                                 | 是否启用虚拟滚动 |
| virtualShowSize  | Number  | 30                                    | 虚拟滚动显示行数 |

## 主要 Events

| 事件        | 说明         | 参数                            |
| ----------- | ------------ | ------------------------------- |
| page-change | 分页变化事件 | page: 页码, pageSize: 每页条数  |
| sort-change | 排序变化事件 | column: 排序列, order: 排序方向 |
