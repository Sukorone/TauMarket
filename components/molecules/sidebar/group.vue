<script setup lang="ts">
import type { ISidebarButton } from '@/types/sidebar'
const appStore = toRefs(useAppStore())
const { toggleSidebar, sidebar } = appStore
interface Props {
	buttons: ISidebarButton[]
	title?: string
	hide?: boolean
}

const props = defineProps<Props>()
const drop = ref(false)
</script>

<template>
	<div class="group">
		<p class="group__title" v-if="title">{{ title }}</p>
		<div class="group_buttons">
			<TauAccordion
				hovered
				:disabled="sidebar.open ? false : true"
				v-for="(button, idx) in props.buttons"
				:key="idx"
				:size="button.size"
				:rounded="button.rounded"
			>
				<template #trigger>
					<TauBtn class="group__button" v-bind="button">
						{{ sidebar.open ? button.text : undefined }}
					</TauBtn>
				</template>
				<TauIcon class="group__icon" name="tree" />
				<div class="group__drop">
					<TauBtn class="group__drop-button" size="sm">Главная </TauBtn>
					<TauBtn class="group__drop-button" size="sm">Каталог </TauBtn>
					<TauBtn class="group__drop-button" size="sm" square>О нас </TauBtn>
				</div>
			</TauAccordion>
		</div>
	</div>
</template>

<style scoped lang="scss">
.group {
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 20px;

	&__icon {
		position: absolute;
		font-size: 110px;
		top: 41.3px;
		right: 117px;
	}

	&__drop {
		display: flex;
		flex-direction: column;
		gap: 8px;
		z-index: 99;
		align-items: end;
		position: relative;

		&-button {
			padding: 8px 14px 8px 14px;
			display: flex;
			justify-content: start;
			border-radius: 12px;
			width: 158px;
		}
	}

	&__button {
		width: 100%;
	}

	&_buttons {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	&__title {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-transform: uppercase;
		color: var(--secondary-text-color);
		font-weight: 500;
		font-size: 0.563rem;
		line-height: 24px;

		&::after {
			display: flex;
			content: '';
			background: var(--background-gradient-color);
			opacity: 0.32;
			width: 56px;
			height: 1px;
		}
	}
}
</style>
