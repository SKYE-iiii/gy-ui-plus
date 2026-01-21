import Table from './src/index.vue'
import { withInstall } from '../withInstall'

export * from './src/tableProps'
export * from './src/useExpose'

const JTable = withInstall(Table)
export default JTable
