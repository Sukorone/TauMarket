<template>
  <button :style="getCurrentSize" :class="getAdditionalStyles" class="tau-btn">
    <tau-icon v-bind="icons[0]" v-if="icons && icons[0]" />
    <transition name="fadeBtn">
      <p class="tau-btn__text" v-if="showText">
        <slot />
      </p>
    </transition>
    <tau-icon v-bind="icons[1]" v-if="icons && icons[1]" />
  </button>
</template>

<script setup lang="ts">
import { BtnSizes } from '@/configs/sizes'

interface ITauBtn {
  icons?: Array<
    | {
        name: string
        filled?: boolean
      }
    | undefined
  >
  rounded?: boolean
  size?: 'sm' | 'md' | 'xl'
  centerText?: boolean
  square?: boolean
  open?: boolean
  spaceBetween?: boolean
  transparent?: boolean
  active?: boolean
  subActive?: boolean
}

const props = withDefaults(defineProps<ITauBtn>(), {
  size: 'md',
  centerText: true,
})

const slots = useSlots()

const slot = computed(() => {
  if (slots?.default) return !!slots?.default()[0]?.children
  return false
})
const showText = ref(false)

watch(
  () => slot.value,
  () => {
    showText.value = slot.value
  },
  {
    deep: true,
    immediate: true,
  }
)

const getCurrentSize = computed(() => {
  const { size } = props
  return BtnSizes[size]
})
const getAdditionalStyles = computed(() => {
  const { centerText, rounded, square, spaceBetween, transparent, active, subActive } = props
  let classes = []
  if (centerText) classes.push('text-center')
  if (rounded && !slot.value) classes.push('rounded')
  if (square && !slot.value) classes.push('square')
  if (spaceBetween) classes.push('space-between')
  if (transparent) classes.push('transparent')
  if (active) classes.push('active')
  if (subActive) classes.push('sub-active')

  return classes
})
</script>

<style lang="scss">
.tau-btn {
  border: 0.5px solid;
  display: flex;
  align-items: center;
  cursor: pointer;
  aspect-ratio: unset;
  transition: background 0.3s ease, width 0.5s ease, border-radius 0.5s ease;
  background: var(--button-main-bg);
  color: var(--primary-text-color);
  border-image-source: radial-gradient(100% 100% at 0% 0%, rgba(184, 110, 159, 0.12) 0%, rgba(102, 37, 37, 0.12) 100%);
  .tau-icon {
    font-size: 1.2rem;
  }
  &:hover {
    background: var(--button-main-bg-hover);
    .tau-btn__text {
      color: var(--primary-text-color-hover) !important;
    }
    .tau-icon.tau-icon {
      color: var(--primary-text-color-hover) !important;
    }
  }
}
.square {
  aspect-ratio: 1;
  min-width: 56px;
  max-width: 56px;
  padding: unset !important;
  justify-content: center;
}

.rounded {
  border-radius: 50% !important;
  aspect-ratio: 1 !important;
  min-width: 56px;
  max-width: 56px;
  padding: unset !important;
  justify-content: center;
}

.text-center {
  justify-content: center;
}
.space-between {
  justify-content: space-between;
}
.transparent {
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03) radial-gradient(50% 50% at 50% 50%, rgba(204, 139, 139, 0.1), rgba(163, 59, 59, 0) 100%);
}
.active {
  background: rgb(37, 37, 37);
  color: var(--primary-text-color);
  border-radius: 15px 15px 0 0 !important;
}
.sub-active {
  background: rgb(37, 37, 37);
  color: var(--primary-text-color);
}
</style>
