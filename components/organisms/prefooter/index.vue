<script setup lang="ts">
interface PrefooterProps {
	text: string
	title: string
}
const props = defineProps<PrefooterProps>()
</script>

<template>
	<div class="prefooter">
		<div class="prefooter__content">
			<div class="prefooter__left-side">
				<MoleculesPrefooter :title="props.title" />
				<AtomsPrefooter :text="props.text" />
				<AtomsPrefooter :text="props.text" />
			</div>
			<div class="prefooter__right-side">
				<img
					class="prefooter__img"
					src="/png/prefooter.png"
					alt="Изображение продукции"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.prefooter {
	display: flex;
	width: 100%;
	justify-content: space-between;
	gap: 20px;
	flex-direction: column;

	&__content {
		display: flex;
		gap: 20px;

		@media (max-width: 768px) {
			flex-direction: column;
		}
	}

	&__img {
		border-radius: 28px;
		padding: 24px;
		font-size: 1.06rem;
		border: 0.5px solid var(--secondary-gradient-color);
		background: var(--secondary-background-color);
	}

	&__left-side {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 700px;
	}
}
</style>
