<template>
	<div class="checkboxes">
		<TauCheckbox
			:data="state"
			@change="(checkbox: ICheckbox) => handleUpdateState(checkbox) "
		/>
	</div>
</template>

<script setup lang="ts">
import { ICheckbox } from '~/types/checkbox'

interface Props {
	modelValue?: ICheckbox | ICheckbox[]
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const isMultiply = computed(() => {
	const { modelValue } = props
	if (modelValue && Array.isArray(modelValue)) return true
	return false
})

const handleUpdateState = (data: ICheckbox | ICheckbox[]) => {
	console.log(data)
	if (isMultiply.value && Array.isArray(props.modelValue)) state.value = data
	else state.value = data
	emit('update:modelValue', state.value)
}

const state = ref<ICheckbox | ICheckbox[]>()

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
</script>

<style scoped lang="scss">
.checkboxes {
	display: flex;
	border: 0.5px solid var(--secondary-gradient-color);
	box-sizing: border-box;
	border-radius: 28px;
	width: 100%;
	background: var(--secondary-background-color);
}
</style>
