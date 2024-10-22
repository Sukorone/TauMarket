<template>
  <div class="tau-dropdown" @mouseenter="hoverActive()" @mouseleave="hoverDisactive()" ref="aniDropdown">
    <div class="tau-dropdown_activate-button" ref="activateButton" @click="toggleActive()">
      <slot name="trigger" />
    </div>

    <div
      @click="checkContentClick()"
      :style="{ ...contentWrapperPosition, ...contentWrapperStyle }"
      class="tau-dropdown_content-wrapper"
      :class="glassmorphism ? 'glassmorphism' : ''"
      ref="contentWrapper">
      <transition :name="orientation === 'horizontal' ? 'fade' : 'options-animation'">
        <slot v-if="isActive" />
      </transition>
    </div>
  </div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'
import { nextTick } from 'vue'
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  position: {
    type: String,
    default: 'center',
  },
  modelValue: {
    type: Boolean,
  },
  margin: {
    type: Number,
    default: 5,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  glassmorphism: {
    type: Boolean,
    default: false,
  },
  autoclose: {
    type: Boolean,
    default: false,
  },
  onHover: {
    type: Boolean,
    default: false,
  },
  orientation: {
    type: String,
    default: 'vertical',
  },
  delay: {
    type: Number,
    default: 300,
  },
})
const isActive = ref(false)
const optionsLoaded = ref(false)
let aniDropdown = ref(null)
let contentWrapper = ref(null)
let activateButton = ref(null)

const checkContentClick = () => {
  const { autoclose } = props
  if (autoclose) {
    isActive.value = false
  }
}

onMounted(() => {
  isActive.value = props.modelValue
})
let activateButtonOptions = ref({
  width: 0,
  height: 0,
  posX: 0,
  posY: 0,
})

let contentWrapperOptions = ref({
  width: 0,
  height: 0,
  posX: 0,
  posY: 0,
})

let windowSizeOptions = ref({
  width: 0,
  height: 0,
})

const contentWrapperPosition = ref({})

const toggleActive = async () => {
  if (props.disabled || props.onHover) return
  isActive.value = !isActive.value
  emit('update:modelValue', isActive.value)
  if (!isActive.value) {
    optionsLoaded.value = false
    return
  }
  await nextTick()
  await getDropdownOptions()
}

const getWindowsOptions = async () => {
  windowSizeOptions.value.width = window.innerWidth
  windowSizeOptions.value.height = window.innerHeight
}

const getTriggerOptions = async () => {
  const { width, height, x, y } = activateButton.value.getBoundingClientRect()
  activateButtonOptions.value.width = width
  activateButtonOptions.value.height = height
  activateButtonOptions.value.posX = x
  activateButtonOptions.value.posY = y
}

const getWrapperOptions = async () => {
  const { width, height, x, y } = contentWrapper.value.getBoundingClientRect()
  contentWrapperOptions.value.height = height
  contentWrapperOptions.value.width = width
  contentWrapperOptions.value.posX = x
  contentWrapperOptions.value.posY = y
}

const getDropdownOptions = async () => {
  getWindowsOptions()
  getTriggerOptions()
  getWrapperOptions()
  contentWrapperPosition.value = getContentWrapperPosition()
  optionsLoaded.value = true
}

const getContentWrapperWidth = () => {
  const wrapper = activateButtonOptions.value.width
  const inner = contentWrapperOptions.value.width
  if (inner < wrapper || inner === wrapper) return '100%'
  return null
}

onClickOutside(aniDropdown, () => (isActive.value = false))

watch(
  () => isActive.value,
  () => {
    emit('update:modelValue', isActive.value)
  }
)

const getVericalOrientationParams = () => {
  const { margin } = props
  const { posY, height: wrapperHeight } = activateButtonOptions.value
  if (posY + wrapperHeight + margin + contentWrapperOptions.value.height > windowSizeOptions.value.height) {
    return {
      top: `${-contentWrapperOptions.value.height}px`,
      paddingBottom: `${margin}px`,
      width: getContentWrapperWidth(),
    }
  } else {
    return {
      top: `${activateButtonOptions.value.height}px`,
      // paddingTop: `${margin}px`,
      width: getContentWrapperWidth(),
    }
  }
}

const getHorizontalOrientationParams = () => {
  const { margin } = props
  const { posX, width: triggerWidth } = activateButtonOptions.value
  if (posX + triggerWidth + contentWrapperOptions.value.width + margin > windowSizeOptions.value.width)
    return {
      top: 0,
      right: `${triggerWidth}px`,
      paddingRight: `${margin}px`,
    }
  else
    return {
      top: 0,
      left: `${triggerWidth}px`,
      paddingLeft: `${margin}px`,
    }
}

const getContentWrapperPosition = () => {
  const { orientation } = props
  if (orientation === 'horizontal') return getHorizontalOrientationParams()
  return getVericalOrientationParams()
}

const contentWrapperStyle = computed(() => {
  const { position } = props
  if (position === 'left') {
    return {
      right: '0px',
    }
  }
  if (position === 'right') {
    return {
      left: '0px',
    }
  }
  if (position === 'center') {
    return false
  }
})

const delayTimer = ref(null)

const hoverActive = async () => {
  const { disabled, onHover, delay } = props
  clearTimeout(delayTimer.value)
  if (disabled || !onHover || isActive.value) return
  if (delay) {
    delayTimer.value = setTimeout(async () => {
      isActive.value = true
      await nextTick()
      await getDropdownOptions()
    }, delay)
  } else {
    isActive.value = true
    await nextTick()
    await getDropdownOptions()
  }
  emit('update:modelValue', isActive.value)
}

const hoverDisactive = async () => {
  const { onHover, disabled, delay } = props
  clearTimeout(delayTimer.value)
  if (disabled || !onHover) return
  if (delay) {
    delayTimer.value = setTimeout(async () => {
      isActive.value = false
    }, delay)
  } else {
    isActive.value = false
  }
  emit('update:modelValue', isActive.value)
}
</script>

<style lang="scss" scoped>
.tau-dropdown {
  display: flex;
  position: relative;
  width: auto;
  height: auto;
  justify-content: center;

  &_activate-button {
    align-self: flex-start;
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
  }

  &_content-wrapper {
    overflow: hidden;
    position: absolute !important;
    display: flex;
    width: auto;
    height: auto;
    gap: 2px;
    flex-direction: column;
    top: 53px;
    z-index: 999;
  }
}
</style>
