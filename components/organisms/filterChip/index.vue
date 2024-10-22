<template>
    <div class="chip_container" v-if="active">
        <tau-btn class="chip__button" @click="active = !active" :icons="[undefined, { name: 'close', filled: true }]"
            square></tau-btn>
        <span v-if="title" class="chip__text">{{ title }}</span>
    </div>
</template>

<script setup lang="ts">
import type { IFilterChip } from '~/types/filterchip';

const props = defineProps<IFilterChip>()
const active = ref(props.active);
</script>

<style scoped lang="scss">
.chip {
    &_container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    &__button {
        max-width: 38px;
        max-height: 38px;
        min-width: 38px;
    }

    &__text {
        color: var(--primary-text-color);
        font-size: 17px;
        font-weight: 400;
        line-height: 20px;
    }
}
</style>