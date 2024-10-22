<template>
  <div class="tau-gap" :style="{ height: dataHide ? '0px' : height }" />
</template>

<script setup lang="ts">
interface Props {
  height: string
  dataHide?: boolean
}

const props = defineProps<Props>()
</script>

<style lang="scss">
.tau-gap {
  gap: 10px;
}
</style>
