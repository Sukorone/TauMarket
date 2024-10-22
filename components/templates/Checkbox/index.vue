<template>
	<OrganismsCheckbox v-model="state" class="checkbox" />
</template>

<script setup lang="ts">
import { ICheckbox } from '~/types/checkbox'

interface Props {
	modelValue?: ICheckbox | ICheckbox[]
}

const props = defineProps<Props>()
const state = ref<ICheckbox | ICheckbox[]>()
const emit = defineEmits(['update:modelValue'])

watch(
	() => props.modelValue,
	() => {
		if (!props.modelValue) return
		state.value = props.modelValue
	},
	{
		immediate: true,
	}
)

watch(
	() => state.value,
	() => {
		if (!state.value) return
		if (JSON.stringify(state.value) === JSON.stringify(props.modelValue)) return
		emit('update:modelValue', state.value)
	},
	{
		immediate: true,
	}
)
</script>

<style scoped lang="scss">
.checkbox {
	padding: 30px;
}
</style>
