<template>
  <div
    ref="GyLayoutPageRef"
    class="gy_layout_page"
    :class="{ layout_page_no_margin: isNoMargin }"
    @scroll="(e: any) => (scrollTop = e.target.scrollTop)"
  >
    <slot />
    <div class="back_to_top" v-if="showGoTopButton">
      <div v-if="isShowGoTopButton" @click="backToTop">
        <el-icon v-bind="{ size: 24, ...$attrs }"><CaretTop /></el-icon>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onActivated, onMounted, ref, watch } from 'vue'
import { CaretTop } from '@element-plus/icons-vue'
defineOptions({
  name: 'GyLayoutPage',
})

export interface GyLayoutPageProps {
  keepScrollDisabled?: boolean
  isNoMargin?: boolean
  showGoTopButton?: boolean
  scrollToTop?: number
}

const props = withDefaults(defineProps<GyLayoutPageProps>(), {
  keepScrollDisabled: false,
  isNoMargin: false,
  showGoTopButton: true,
  scrollToTop: 100,
})
const isShowGoTopButton = ref(false)

const GyLayoutPageRef = ref(null)
const scrollTop = ref(0)
watch(
  () => scrollTop.value,
  (newVal) => {
    if (newVal > props.scrollToTop) {
      isShowGoTopButton.value = true
    } else {
      isShowGoTopButton.value = false
    }
  }
)
const backToTop = () => {
  scrollTop.value = 0
  ;(GyLayoutPageRef.value as any).scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
onMounted(() => {
  const pageItems = (GyLayoutPageRef.value as any).querySelectorAll('.gy_layout_page_item')
  if (pageItems.length === 2) {
    pageItems[0].style.marginBottom = '8px'
  }
  if (pageItems.length > 2) {
    pageItems.forEach((item: any) => {
      item.style.marginBottom = '8px'
    })
    pageItems[pageItems.length - 1].style.marginBottom = '0'
  }
})

onActivated(() => {
  if (!props.keepScrollDisabled) {
    ;(GyLayoutPageRef.value as any).scrollTop = scrollTop
  }
})
</script>
