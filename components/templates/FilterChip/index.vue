<template>
    <div class="chip" >
        <OrganismsFilterChip v-for="chip in chips" v-bind="chip" v-model:active="chip.active" :key="chip.title" />
    </div>
</template>

<script setup lang="ts">
import type { IFilterChip } from '~/types/filterchip';

interface IProps {
    chips: IFilterChip[]
}

const props = defineProps<IProps>()
</script>

<style lang="scss">
.chip {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 14px;
}
</style>