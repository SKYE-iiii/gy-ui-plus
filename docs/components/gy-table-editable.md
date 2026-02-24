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

| 参数                                                              | 说明                                                                      | 类型             | 默认值                                     |
| :---------------------------------------------------------------- | :------------------------------------------------------------------------ | :--------------- | :----------------------------------------- | --- | ---------------------- | ------ | --- |
| tableData                                                         | 展示数据                                                                  | Array            | []                                         |
| paginationData                                                    | 分页数据                                                                  | Object           | {}                                         |
| ---total                                                          | 数据总条数                                                                | Number           | -                                          |
| ---pageSize                                                       | 页数量                                                                    | Number           | -                                          |
| ---currentPage                                                    | 当前页数                                                                  | Number           | -                                          |     |
| table                                                             | 表格数据对象                                                              | Object           | {}                                         |
| ---layout                                                         | 分页组件布局(参考el-pagination Api)                                       | String           | `'total,sizes, prev, pager, next, jumper'` |
| ---rules                                                          | 规则（可依据 elementPlus el-form 配置————对应 columns 的 prop 值）        | Object           | -                                          |
| ---border                                                         | 是否开启边框线                                                            | Boolean          | false                                      |
| ---toolbar                                                        | 表格外操作栏选中表格某行，可以将其数据传出                                | Array            | []                                         |
| ---operator                                                       | 表格内操作栏数据                                                          | Array            | []                                         |
| -------hasPermi                                                   | 表格内操作栏按钮权限资源（必须传`btnPermissions`属性才生效）              | String           | -                                          |
| -------show                                                       | 表格内操作栏根据状态显示                                                  | Object           | -                                          |
| -------render                                                     | render 函数渲染使用的 Function(val) 可以用 tsx 方式                       | Function         | -                                          |
| -------noshow                                                     | 表格内操作栏根据多种状态不显示                                            | Array            | -                                          |
| -------bind                                                       | 继承 el-button 所有 Attributes                                            | Object           | -                                          |
| -------fun                                                        | 事件名,参数（当前行数据，scope.$index，整个table数据）                    | function         | -                                          |
| -------isDisabled <el-tag>v1.5.2</el-tag>                         | 操作按钮禁用,参数（当前行数据，当前操作项）                               | function         | -                                          |
| -------isMore <el-tag>v1.5.2</el-tag>                             | 是否增加在更多按钮下                                                      | Boolean          | false                                      |
| -------itemBind <el-tag>v1.5.2</el-tag>                           | el-dropdown-item Attributes                                               | Object           | -                                          |
| ---operatorConfig                                                 | 表格内操作栏样式                                                          | Object           | -                                          |
| --------fixed                                                     | 列是否固定在左侧或者右侧。 true 表示固定在左侧(true / 'left' / 'right')   | string / boolean | -                                          |
| --------label                                                     | 显示的标题                                                                | string           | '操作'                                     |
| --------width                                                     | 对应列的宽度(固定的)                                                      | string / number  | -                                          |
| --------minWidth                                                  | 对应列的最小宽度(会把剩余宽度按比例分配给设置了 min-width 的列)           | string / number  | -                                          |
| --------align                                                     | 对齐方式 （left / center / right）                                        | string           | 'center'                                   |
| --------bind                                                      | el-table-column Attributes                                                | Object           | -                                          |
| --------style <el-tag>v1.5.2</el-tag>                             | 操作按钮整行样式                                                          | Object           | -                                          |
| --------dropdownBind <el-tag>v1.5.2</el-tag>                      | 更多按钮配置项                                                            | Object           | -                                          |
| ---firstColumn                                                    | 表格首列(序号 index,复选框 selection,单选 radio,展开行 expand）排列       | object/Array     | -                                          |     | 是否需要显示切换页条数 | Number | -   |
| columns                                                           | 表头信息                                                                  | Array            | []                                         |
| ----sort                                                          | 排序 （设置：sort:true）                                                  | Boolean          | false                                      |
| ----sortable                                                      | 排序，若设置为 'custom'，需要监听 Table 的 sort-change 事件               | Boolean /string  | false                                      |
| ----align                                                         | 对齐方式 （left / center / right）                                        | string           | 'center'                                   |
| ----renderHeader                                                  | 列标题 Label 区域渲染使用的 Function(val) 可以用 jsx 方式                 | Function         | -                                          |
| ----render                                                        | 某列 render 函数渲染使用的 Function(val) 可以用 jsx 方式                  | Function         | -                                          |
| ----bind                                                          | el-table-column Attributes                                                | Object           | -                                          |
| ----width                                                         | 对应列的宽度(固定的)                                                      | string / number  | -                                          |
| ----minWidth                                                      | 对应列的最小宽度(会把剩余宽度按比例分配给设置了 min-width 的列)           | string / number  | -                                          |
| ----slotName                                                      | 插槽显示此列数据（其值是具名作用域插槽                                    | String           | -                                          |
| ----isShowCol<el-tag>1.4.16</el-tag>                              | 动态显示隐藏列                                                            | Boolean/Function | false                                      |
| ----formatter<el-tag>1.5.3</el-tag>                               | 格式化内容Function(row, column, cellValue, index) => VNode                | Function         | -                                          |
| ----isShowHidden<el-tag type="danger">v1.4.16 deprecated</el-tag> | 是否动态显示隐藏列设置（隐藏/显示列）                                     | Boolean          | false                                      |
| ----slotNameMerge                                                 | 合并表头插槽显示此列数据（其值是具名作用域插槽）                          | String           | -                                          |
| ----------scope                                                   | 具名插槽获取此行数据必须用解构接收{scope}.row 是当前行数据 }              | Object           | -                                          |
| ----canEdit                                                       | 是否开启单元格编辑功能                                                    | Boolean          | false                                      |
| ----isClickEdit<el-tag>1.4.15</el-tag>                            | 是否开启单击-单元格编辑功能                                               | Boolean          | false                                      |
| ----isShowEditIcon<el-tag>1.4.15</el-tag>                         | 开启单击-单元格编辑后表头是否显示编辑图标                                 | Boolean          | false                                      |
| ----editIconAlign<el-tag>1.4.15</el-tag>                          | 编辑icon表头的对齐方式(可选值：flex-end、center、flex-start)              | String           | 'center'                                   |
| ----configEdit                                                    | 表格编辑配置（开启编辑功能有效）                                          | Object           | -                                          |
| ----------rules                                                   | 规则（可依据 elementPlus el-form 配置————对应 columns 的 prop 值）        | Object           | -                                          |
| ----------label                                                   | placeholder 显示                                                          | String           | -                                          |
| ----------editComponent                                           | 组件名称可直接指定全局注册的组件，也可引入'element'如：'el-input'         | String/component | -                                          |
| ----------eventHandle                                             | 第三方 UI 的 事件（返回三个参数，需解构获取{val,prop,scope}）             | Object           | -                                          |
| ----------bind                                                    | 第三方 UI 的 Attributes，（`Function`返回值scope）                        | Object/Function  | -                                          |
| ----------event                                                   | 触发 handleEvent 事件的标志                                               | String           | -                                          |
| ----------type                                                    | 下拉或者复选框显示（select-arr/select-obj/checkbox）                      | String           | -                                          |
| ----------list                                                    | 下拉选择数据源名称                                                        | String           | -                                          |
| ----------arrLabel                                                | type:select-arr/radio/checkbox 时对应显示的中文字段                       | String           | label                                      |
| ----------arrKey                                                  | type:select-arr/radio/checkbox 时对应显示的数字字段                       | String           | key                                        |
| ----------ref                                                     | 当前使用组件的 ref 标识（可以通过 getRefs 事件返回）                      | String           | -                                          |
| ----------isShowTips<el-tag>1.4.15</el-tag>                       | 开启单击-单元格编辑后鼠标移入是否显示tip                                  | Boolean          | false                                      |
| ----------tipbind<el-tag>1.4.15</el-tag>                          | 继承el-tooltip的所有属性                                                  | Object           | -                                          |
| ----filters                                                       | 字典过滤                                                                  | Object           | -                                          |
| ----------list                                                    | listTypeInfo 里面对应的下拉数据源命名                                     | String           | -                                          |
| ----------key                                                     | 数据源的 key 字段                                                         | String           | 'value'                                    |
| ----------label                                                   | 数据源的 label 字段                                                       | String           | 'label'                                    |
| btnPermissions                                                    | 按钮权限数据集（后台返回的按钮权限集合）                                  | Array            | -                                          |
| listTypeInfo                                                      | 下拉选择数据源                                                            | Object           | -                                          |
| footer                                                            | 底部操作区（默认隐藏，使用插槽展示“保存”按钮）                            | slot             | -                                          |
| pagination                                                        | 分页器自定义内容 设置文案(table 设置 layout 才生效)                       | slot             | -                                          |
| isKeyup                                                           | 单元格编辑是否开启键盘事件                                                | Boolean          | false                                      |
| isShowFooterBtn                                                   | 是否显示保存按钮                                                          | Boolean          | false                                      |
| title                                                             | 表格左上标题                                                              | String /slot     | -                                          |
| tableTitle                                                        | 表格左上标题（为解决顶层容器会出现原生的 title 属性）同时存在优先展示插槽 | String /slot     | -                                          |
| isShowPagination                                                  | 是否显示分页(默认显示分页)                                                | Boolean          | true                                       |
| isPaginationCumulative                                            | 序列号显示是否分页累加                                                    | Boolean          | false                                      |
| isCopy                                                            | 是否允许双击单元格复制                                                    | Boolean          | false                                      |
| defaultRadioCol                                                   | 设置默认选中项（单选）defaultRadioCol 值必须大于 0！                      | Number           | -                                          |
| rowClickRadio                                                     | 是否开启点击整行选中单选框                                                | Boolean          | true                                       |
| columnSetting                                                     | 是否显示设置（隐藏/显示列）                                               | Boolean          | false                                      |
| name                                                              | 开启列拖拽，缓存唯一性标识(如果没有设置name取title或tableTitle)           | String           | -                                          |
| isRowSort                                                         | 是否开启行拖拽(`row-key` 需要设置) 可以在整行进行拖拽                     | Boolean          | false                                      |
| isRowSortIcon<el-tag>1.4.15</el-tag>                              | 是否第一列显示行拖拽图标，且只能在图标上进行拖拽(`row-key` 需要设置)      | Boolean          | false                                      |
| rowSortIconBind<el-tag>1.4.15</el-tag>                            | 第一列显示拖拽的配置                                                      | Object           | -                                          |
| isTree                                                            | 是否开启 Tree-table 样式                                                  | Boolean          | false                                      |
| columnSetBind                                                     | 列设置按钮配置（继承`el-button`所有属性）                                 | Object           | -                                          |
| ----btnTxt                                                        | 按钮显示文字                                                              | String           | '列设置'                                   |
| ----title                                                         | 点击按钮下拉显示 title                                                    | String           | '列设置'                                   |
| ----isShowTitle                                                   | 点击按钮下拉是否显示 title                                                | Boolean          | true                                       |
| ----size                                                          | el-button 的 size                                                         | String           | 'default'                                  |
| ----icon                                                          | el-button 的 icon                                                         | String           | 'Setting'                                  |
| align                                                             | table 对齐方式 可选值`left`、`center`、`right`                            | String           | 'center'                                   |
| isSlotToolbar                                                     | TAdaptivePage 组件是否使用了 Toolbar 插槽                                 | Boolean          | false                                      |
| isSlotTitle                                                       | TAdaptivePage 组件是否使用了 title 插槽                                   | Boolean          | -                                          |
| sortable                                                          | 设置为 'custom',需要监听 Table 的 sort-change 事件                        | Boolean/string   | -                                          |
| border<el-tag>1.4.12</el-tag>                                     | 是否开启边框线                                                            | Boolean          | false                                      |
| tableLoading<el-tag>1.4.12</el-tag>                               | table loading                                                             | Boolean          | false                                      |
| loadingTxt<el-tag>1.4.12</el-tag>                                 | table loading文字提示                                                     | string           | 加载中...                                  |
| useVirtual<el-tag>1.4.13</el-tag>                                 | table 是否开启虚拟滚动                                                    | Boolean          | false                                      |
| virtualShowSize<el-tag>1.4.13</el-tag>                            | 虚拟列表的渲染行数                                                        | Number           | 30                                         |
| footerBtnAlign<el-tag>1.4.14</el-tag>                             | TTable底部插槽操作布局方式有三个值（`left` `center` `right`）             | String           | 'right'                                    |
| isEmptyDataRequired<el-tag>2.0.3</el-tag>                         | 空数据时表头是否显示校验红点                                              | Boolean          | false                                      |

### 3、events 其他事件按照 el-table 直接使用（如 sort-change 排序事件）

| 事件名                          | 说明                                 | 返回值                                                     |
| :------------------------------ | :----------------------------------- | :--------------------------------------------------------- |
| page-change                     | 当前页码                             | 当前选中的页码                                             |
| save                            | 保存按钮                             | 编辑后的所有数据                                           |
| handleEvent                     | 单个输入触发事件                     | configEdit 中的 event 值和对应输入的 value 值              |
| radioChange                     | 单选选中事件                         | 返回当前选中的整行数据                                     |
| rowSort <el-tag>2.0.2</el-tag>  | 行拖拽排序后触发事件                 | 三个返回值：排序后 table 数据，拖拽前`index`,拖拽后`index` |
| validateError                   | 单元格编辑保存校验不通过触发         | 返回校验不通过的 prop--label 集合                          |
| getRefs <el-tag>1.4.15</el-tag> | 获取 TTbale单元格编辑 使用组件的 ref | -                                                          |

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
