<template>
	<div class="default">
		<OrganismsHeader />
		<OrganismsSidebar />
		<slot />
		<OrganismsFooter />
	</div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()
</script>

<style scoped lang="scss">
.default {
	width: 100%;
	height: 100svh;
}
</style>
