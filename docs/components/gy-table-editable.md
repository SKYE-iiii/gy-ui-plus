# GyTable 可编辑表格

### 多级表头--单元格编辑

:::demo
GyTable/multileHeadEdit
:::

### 单元格编辑功能

:::demo
GyTable/configEdit
:::

### 单元格单独编辑

:::demo
GyTable/configEditUse
:::

### 单元格编辑--键盘事件

:::demo `isKeyup` 单元格编辑是否开启键盘事件;向上、向下、回车横向的下一个输入框
GyTable/singleEditKeyup
:::

### 单元格编辑--使用组件事件

:::demo `eventHandle`继承第三方组件事件，根据第三方组件事件传参，若第三方组件事件`本身有参数`则返回`三`个参数不然就是后`两`个参数：第一个就是本身自己带的参数，第二个是`porp`，第三个是`scope`(`scope.row`)--就是当前行的数据；`scope.$index`就是当前行数
GyTable/eventHandle
:::

### 单元格编辑--校验 rules

:::demo `columns`: `columns`某一项的 rules;`table`: rules; `saveMethod方法`:singleEdit.value.saveMethod((data) => {console.log('callback 返回数据', data)})
GyTable/rules
:::

### 单元格编辑--columns校验 <el-tag>v1.5.2</el-tag>

:::demo `columns`: `columns`某一项的 rules;`table`: rules; `saveMethod方法`:singleEdit.value.saveMethod((data) => {console.log('callback 返回数据', data)});`save方法`：`const tableData = await singleEdit.value.save()`接收一个`Promise`对象。
GyTable/rulesCol
:::

### 单元格编辑--TSelectTable 校验 rules

:::demo
GyTable/rulesSelectTable
:::

### 单元格编辑-- 回显TSelectTable

:::demo
GyTable/echoSelectTable
:::

### 单元格编辑--重置TSelectTable

:::demo 调用`resetTselectTable`方法，重置TSelectTable数据

GyTable/rulesSelectTableRefs
:::

### 单元格编辑--底部按钮插槽使用

:::demo 标签添加`isShowFooterBtn`属性，展示保存按钮，并点击按钮触发 `save`事件，返回当前可编辑的所有数据；若需要`自定义操作区`则需要使用`footer`插槽；`footerBtnAlign`: GyTable 底部按钮对齐方式,有三个值：`left`、`center`、`right`。
GyTable/footerSlot
:::

### 单元格编辑--单击开启模式 <el-tag>v1.4.15</el-tag>

:::demo
GyTable/editSingle
:::


### GyTable 参数配置

### 1、配置参数（Table Attributes）

| 参数                                      | 说明                                                                      | 类型             | 默认值    |
| :---------------------------------------- | :------------------------------------------------------------------------ | :--------------- | :-------- |
| 其余基础参数同 base table                  |
| canEdit                                   | 是否开启单元格编辑功能                                                    | Boolean          | false     |
| isClickEdit<el-tag>1.4.15</el-tag>        | 是否开启单击-单元格编辑功能                                               | Boolean          | false     |
| isShowEditIcon<el-tag>1.4.15</el-tag>     | 开启单击-单元格编辑后表头是否显示编辑图标                                 | Boolean          | false     |
| editIconAlign<el-tag>1.4.15</el-tag>      | 编辑icon表头的对齐方式(可选值：flex-end、center、flex-start)              | String           | 'center'  |
| configEdit                                | 表格编辑配置（开启编辑功能有效）                                          | Object           | -         |
| --- rules                                     | 规则（可依据 elementPlus el-form 配置————对应 columns 的 prop 值）        | Object           | -         |
| --- label                                     | placeholder 显示                                                          | String           | -         |
| --- editComponent                             | 组件名称可直接指定全局注册的组件，也可引入'element'如：'el-input'         | String/component | -         |
| --- eventHandle                               | 第三方 UI 的 事件（返回三个参数，需解构获取{val,prop,scope}）             | Object           | -         |
| --- bind                                      | 第三方 UI 的 Attributes，（`Function`返回值scope）                        | Object/Function  | -         |
| --- event                                     | 触发 handleEvent 事件的标志                                               | String           | -         |
| --- type                                      | 下拉或者复选框显示（select-arr/select-obj/checkbox）                      | String           | -         |
| --- list                                      | 下拉选择数据源名称                                                        | String           | -         |
| --- arrLabel                                  | type:select-arr/radio/checkbox 时对应显示的中文字段                       | String           | label     |
| --- arrKey                                    | type:select-arr/radio/checkbox 时对应显示的数字字段                       | String           | key       |
|--- ref                                        | 当前使用组件的 ref 标识（可以通过 getRefs 事件返回）                      | String           | -         |
|--- isShowTips<el-tag>1.4.15</el-tag>          | 开启单击-单元格编辑后鼠标移入是否显示tip                                  | Boolean          | false     |
| isKeyup                                   | 单元格编辑是否开启键盘事件                                                | Boolean          | false     |
| isEmptyDataRequired<el-tag>2.0.3</el-tag> | 空数据时表头是否显示校验红点                                              | Boolean          | false     |

### 3、events 其他事件按照 el-table 直接使用（如 sort-change 排序事件）

| 事件名                          | 说明                                 | 返回值                                                     |
| :------------------------------ | :----------------------------------- | :--------------------------------------------------------- |
| 其余基础事件同 base table        
| save                            | 保存按钮                             | 编辑后的所有数据                                           |
| handleEvent                     | 单个输入触发事件                      | configEdit 中的 event 值和对应输入的 value 值              |
| validateError                   | 单元格编辑保存校验不通过触发          | 返回校验不通过的 prop--label 集合                          |
| getRefs <el-tag>1.4.15</el-tag> | 获取 TTbale单元格编辑 使用组件的 ref  | -                                                          |

### 4、Methods 方法 继承 el-table 所有方法(Expose)

| 事件名                                   | 说明                                                           | 返回值              |
| :--------------------------------------- | :------------------------------------------------------------- | :------------------ |
| saveMethod                               | 单元格编辑保存方法                                             | callback(tableData) |
| save<el-tag>1.5.2</el-tag>               | 单元格编辑后调用save方法返回Promise                            | Promise(tableData)  |
| resetFields                              | 对表单进行重置，并移除校验结果（单元格编辑时生效）             | —                   |
| clearValidate                            | 清空校验规则（单元格编辑时生效）                               | -                   |
| defaultRadioSelect                       | 单选默认选中--且只能默认选中第一页的数据--传入值必须大于等于 1 | -                   |
| reSetColumnSet                           | 开启columnSetting，调用此方法columnSet显示修改后缓存数据       | -                   |
| clearRadioHandle<el-tag>1.4.14</el-tag>  | 清除单选框选中状态                                             | -                   |
| resetTselectTable<el-tag>1.4.15</el-tag> | 单元格编辑时清除下拉选择表格数据                               | -                   |

### 5、Slots 插槽

| 插槽名     | 说明                                                | 参数  |
| :--------- | :-------------------------------------------------- | :---- |
| title      | GyTable 左侧 Title                                  | -     |
| titleTip   | GyTable 头部 tip                                    | -     |
| toolbar    | GyTable 右侧 toolbar                                | -     |
| expand     | table.firstColumn.type：`expand` 展开行插槽         | scope |
| -          | el-table-column 某列自定义插槽（slotName 命名）     | scope |
| -          | el-table-column 单元格编辑插槽（editSlotName 命名） | scope |
| -          | el-table-column 表头合并插槽（slotNameMerge 命名）  | scope |
| -          | 操作列前一列自定义默认内容插槽                      | -     |
| footer     | 底部操作区具名插槽需要设置`isShowFooterBtn`         | -     |
| pagination | 分页器自定义内容 设置文案(table 设置 layout 才生效) | -     |
