<template>
    <div class="breadcrumb-list" v-if="items">
        <AtomsBreadcrumb v-for="(item, idx) in items" :key="idx" v-bind="item" />
        <AtomsBreadcrumbSeparator v-for="(item, idx) in items" v-if="idx < items.length - 1"
            :key="`separator-__${idx}`" />
    </div>
</template>

<script setup lang="ts">
import type { IBreadcrumb } from "~/types/breadcrumb"

interface Props {
    items?: IBreadcrumb[]
}
const props = defineProps<Props>()
</script>

<style scoped lang="scss">
.breadcrumb-list {
    display: flex;
    align-items: center;
    gap: 22px;
}
</style>