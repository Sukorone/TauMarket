<template>
<input :value="modelValue" @input="handleInput" v-bind="$attrs" type='text'  class="tau-input">

    </input>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { defineEmits, defineProps } from 'vue'

const props = defineProps<{
    modelValue?: string | number
}>()

const emits = defineEmits<{
    (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
    passive: true,
    defaultValue: '',
})

function handleInput(event: Event) {
    const target = event.target as HTMLInputElement; target
    emits('update:modelValue', target.value);
}
</script>

<style scoped lang="scss">
.tau-input {
    display: flex;
    outline: none;
    border-radius: 12px;
    padding: 16px 20px;
    width: 100%;
    font-size: 16px;
    background: var(--primary-background-color);
    color: var(--primary-text-color);
    border: 0.5px solid var(--secondary-gradient-color);
}
</style>