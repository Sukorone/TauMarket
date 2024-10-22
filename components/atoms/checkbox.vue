<script setup lang="ts">
import type { ICheckbox } from '~/types/checkbox'

const props = defineProps<ICheckbox>()
const emit = defineEmits(['update:modelValue', 'change'])

const checkbox = ref<ICheckbox>()
const isChecked = computed(() => checkbox.value?.checked ?? false)

const handleToggle = () => {
	if (!checkbox.value) return
	checkbox.value.checked = !isChecked.value
}

watch(
	() => props,
	() => {
		if (props) checkbox.value = { ...props }
	},
	{
		immediate: true,
		deep: true,
	}
)

watch(
	() => checkbox.value?.checked,
	() => {
		if (!checkbox.value) return
		if (props.checked === checkbox.value?.checked) return
		emit('change', checkbox.value)
		emit('update:modelValue', checkbox.value)
	},
	{
		deep: true,
		immediate: true,
	}
)
</script>

<template>
	<div class="checkbox">
		<div class="checkbox__item">
			<TauIcon
				@click="handleToggle()"
				class="checkbox__icon"
				filled
				:name="isChecked ? 'checked-mark' : 'unchecked-mark'"
			/>
			<p class="checkbox__title" v-if="label">{{ label }}{{ isChecked }}</p>
		</div>
	</div>
</template>

<style scoped lang="scss">
.checkbox {
	&__item {
		display: flex;
		align-items: center;
	}
	&__icon {
		background: var(--secondary-background-color);
		border: 0.5px solid var(--secondary-gradient-color);
		padding: 5px 7px;
		border-radius: 12px;
		margin-right: 8px;
	}
	&__title {
		font-weight: 400;
		font-size: 1.06rem;
		line-height: 20px;
	}
}
</style>
