<script setup lang="ts">
const prefooter = ref(false)
const model = defineModel()

interface IPrefooterProps {
	title?: string
}
const props = defineProps<IPrefooterProps>()
</script>

<template>
	<div class="prefooter__mail">
		<div class="prefooter__mail-title" for="emailInput">{{ title }}</div>
		<div class="prefooter__mail-form">
			<TauInput placeholder="Ваш Email" v-model="model" />
			<TauBtn
				class="prefooter__mail-btn"
				:class="[prefooter ? 'shown' : 'undefined']"
				>Отправить
			</TauBtn>
		</div>
	</div>
</template>

<style scoped lang="scss">
.prefooter__mail {
	display: flex;
	flex-direction: column;
	gap: 10px;
	border-radius: 28px;
	padding: 24px;
	font-size: 1.06rem;
	background: var(--secondary-background-color);
	border: 0.5px solid var(--secondary-gradient-color);

	&-title {
		font-size: 1.375rem;
		line-height: 1.5rem;
		font-weight: 400;
		color: var(--primary-text-color);
	}

	&-input {
		background: var(--primary-background-color);
		outline: none;
		border-radius: 12px;
		padding: 16px 20px;
		width: 100%;
		color: var(--primary-text-color);
	}

	&-form {
		display: flex;
		gap: 10px;
	}
}
</style>
