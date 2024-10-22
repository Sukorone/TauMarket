<script setup lang="ts">
interface SPrefooter {
	text?: String
}
const props = defineProps<SPrefooter>()
</script>

<template>
	<div>
		<span class="prefooter"> {{ text }}</span>
	</div>
</template>

<style scoped lang="scss">
.prefooter {
	color: var(--secondary-text-color);
	border: 0.5px solid var(--secondary-gradient-color);
	background: var(--secondary-background-color);
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	border-radius: 28px;
	padding: 24px;
	font-size: 1.06rem;
}
</style>
