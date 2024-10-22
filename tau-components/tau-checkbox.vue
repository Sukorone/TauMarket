<script setup lang="ts">
import { ICheckbox } from '@/types/checkbox'

interface Props {
	data?: ICheckbox | ICheckbox[]
}

const emit = defineEmits(['update:modelValue', 'change'])
const props = defineProps<Props>()

const isMultiply = computed(() => {
	const { data } = props
	if (data && Array.isArray(data)) return true
	return false
})

const multiplyState = ref<ICheckbox[]>([])
const state = ref<ICheckbox>()

const handleToggleMultiply = (checkbox: ICheckbox) => {
	multiplyState.value = multiplyState.value?.map(item => {
		if (item.id === checkbox.id) return checkbox
		return item
	})
	const index = multiplyState.value.findIndex(item => item.id === checkbox.id)
	const [item] = multiplyState.value.splice(index, 1)
	if (item.checked) {
		multiplyState.value.unshift(item)
	} else {
		multiplyState.value.push(item)
	}
}

watch(
	() => multiplyState.value,
	() => {
		if (!multiplyState.value) return
		if (!isMultiply.value) return
		emit('update:modelValue', multiplyState.value)
		emit('change', multiplyState.value)
	},
	{
		deep: true,
	}
)

watch(
	() => state.value,
	() => {
		if (!state.value) return
		if (isMultiply.value) return
		emit('update:modelValue', state.value)
		emit('change', state.value)
	},
	{
		deep: true,
	}
)

watch(
	() => props.data,
	() => {
		if (!props.data) return
		if (Array.isArray(props.data) && isMultiply.value)
			multiplyState.value = props.data
		else state.value = props.data as ICheckbox
	},
	{
		immediate: true,
		deep: true,
	}
)
</script>

<template>
	<div class="tau-checkbox">
		<div class="tau-checkbox_multiply" v-if="isMultiply && Array.isArray(data)">
			<AtomsCheckbox
				@change="checkbox => handleToggleMultiply(checkbox)"
				v-for="(item, idx) in data"
				:key="`tau-checkbox_multiply__${idx}`"
				v-bind="item"
			/>
		</div>
		<AtomsCheckbox v-model="state" v-bind="data" v-else />
	</div>
</template>

<style scoped lang="scss">
.tau-checkbox {
	&_multiply {
		display: flex;
		gap: 25px;
	}
}
</style>
