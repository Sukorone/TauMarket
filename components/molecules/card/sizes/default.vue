<template>
	<div class="card">
		<div class="card__content">
			<div class="card__image">
				<div class="card__image__content">
					<img class="card__img" :src="data.photo" alt="" />
				</div>
			</div>
			<div class="card__title">{{ data?.title }}</div>
			<div class="card__price">{{ data?.price }}</div>
			<tau-btn
				v-if="props.toggleCart"
				class="card__btn"
				:icons="[undefined, { name: 'shop' }]"
				:center-text="false"
			>
				В корзину
			</tau-btn>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IProduct } from '~/types/product'

interface Props {
	data: IProduct
	toggleCart?: boolean
}
const props = defineProps<Props>()
</script>

<style scoped lang="scss">
.card {
	width: 100%;
	border: 1px solid var(--border-color);
	border-radius: 20px;
	&__content {
		background: var(--secondary-background-color);
		display: flex;
		flex-direction: column;
		gap: 15px;
		align-items: center;
		border-radius: 20px;
		padding: 20px;
	}

	&__img {
		max-width: 30dvw;
		max-height: 25dvh;
	}

	&__image {
		padding: 15px 60px;
		border-radius: 10px;
		background: var(--primary-background-color);
		&__content {
		}
	}

	&__btn {
		width: 100%;
		justify-content: space-between;
	}
}
</style>
