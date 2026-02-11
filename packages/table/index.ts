import Table from './src/index.vue'
import GyTableColumn from './src/GyTableColumn.vue'
import { withInstall } from '@gy-ui-plus/core'

export const GyTable = withInstall(Table, { GyTableColumn })
export { GyTableColumn }
export default GyTable
