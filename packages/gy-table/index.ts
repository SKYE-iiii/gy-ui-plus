import Table from './src/index.vue'
import { withInstall } from '../withInstall'

export * from './src/tableProps'
export * from './src/useExpose'

const GyTable = withInstall(Table)
export default GyTable
