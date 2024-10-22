<script setup lang="ts">
import type { ITauIcon } from '@/types/icon'

const props = defineProps<ITauIcon>()
</script>

<template>
  <nuxt-icon class="tau-icon" :name="name" :filled="filled" />
</template>

<style lang="scss">
.tau-icon {
}
</style>
