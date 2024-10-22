<template>
	<div class="cardList">
		<MoleculesCard
			class="cardList__card"
			v-for="(item, index) in data"
			:data="item"
			:toggleCart="toggleCart"
			:key="index"
		/>
	</div>
</template>

<script setup lang="ts">
import type { IProduct } from '~/types/product'

interface Props {
	data: IProduct[]
	toggleCart?: boolean
}
const props = defineProps<Props>()
</script>

<style scoped lang="scss">
.cardList {
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	width: 100%;

	&__card {
		width: calc((100% - 80px) / 5);

		@media (max-width: 1600px) {
			width: calc((100% - 60px) / 4);
		}
		@media (max-width: 1200px) {
			width: calc((100% - 40px) / 3);
		}
		@media (max-width: 900px) {
			width: calc((100% - 20px) / 2);
		}
		@media (max-width: 570px) {
			width: 100%;
		}
	}
}
</style>
