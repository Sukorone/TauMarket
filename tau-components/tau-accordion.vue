<template>
  <div class="accordion" ref="accordionBody">
    <transition-group key="group" name="group">
      <div class="active-wrapper" :key="props.title" @click="toggleActive">
        <slot name="trigger" />
      </div>
      <div class="accordion_inner-wrapper" v-if="isActive">
        <slot />
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'

interface Props {
  title?: string
  disabled: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Name of accordion',
  disabled: false,
})

const accordionBody: Ref<HTMLElement | null> = ref(null)
const isActive = ref(false)
const svgStyle = ref<Record<string, string>>(isActive.value ? { transform: 'rotate(90deg)' } : { transform: 'rotate(0)' })
const showInner = ref<Record<string, string | number>>(isActive.value ? { display: 'flex', top: '24px', opacity: '1' } : { top: '20px', opacity: '0' })

const toggleActive = () => {
  if (props.disabled) return
  isActive.value = !isActive.value
  svgStyle.value = isActive.value ? { transform: 'rotate(90deg)' } : { transform: 'rotate(0)' }
  showInner.value = isActive.value ? { display: 'flex', top: '24px', opacity: '1' } : { top: '20px', opacity: '0' }
}

const handler = () => {
  isActive.value = false
  svgStyle.value = { transform: 'rotate(0)' }
}
</script>

<style scoped lang="scss">
.active-wrapper {
  user-select: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  &__title {
    white-space: nowrap;
  }
  img {
    transition: all 0.2s ease;
  }
}

.accordion_inner-wrapper {
  width: 100%;
  height: auto;
  transition: all 0.3s ease;
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-top: 5px;
  border-radius: 12px;
}

.accordion {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 12px;
}
</style>
