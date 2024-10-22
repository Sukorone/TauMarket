<template>
    <NuxtLink :to="path" v-if="path && label">
        <tau-btn size="sm" centerText class="breadcrumbs__item">
            {{ pageNames[label]}}
        </tau-btn>
    </NuxtLink>
</template>

<script setup lang="ts">
import type {IBreadcrumb} from "~/types/breadcrumb"
import { pageNames } from "~/content/pageNames"
const props = defineProps<IBreadcrumb>();
</script>

<style scoped lang="scss">
a {
    text-decoration: none;
}
</style>
