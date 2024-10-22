<template>
	<div class="index">
		<div class="index_content">
			<!-- <OrganismsPrefooter
				title="Будьте в курсе последних новостей и акций "
			text="Мы продаем компьютеры, клавиатуры, мышки, мониторы, плееры, телефоны  и многое другое. Мы работаем, чтобы вам было удобно. Центры продаж  техники Apple расположены по всей России. Вы можете прийти, чтобы лично  ознакомиться с тем или иным устройством. У нас предусмотрена  и возможность заказа через интернет. Как покупать — выбор за вами!"
			/> -->
			<TemplatesRecommendedWidget :maxDisplay="4" />
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.index {
}
</style>

<!-- v-for="(item, index) in mokoDataCard"  :data="item" :key="index" -->
