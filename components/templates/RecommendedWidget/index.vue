<script setup lang="ts">
import type { IProduct } from '~/types/product';
interface Props {
    cards: IProduct[];
    maxDisplay?: number;
}
const props = defineProps<Props>();

const displayedCards = computed(() => {
    return props.maxDisplay
        ? props.cards?.slice(0, props.maxDisplay)
        : props.cards;
});
</script>

<template>
    <div class="recommended">
        <h1>Специально для вас</h1>
        <div class="recommended_content">
            <OrganismsCardlist
                class="cardlist"
                :toggleCart="true"
                :data="displayedCards"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
.recommended {
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    &_content {
        display: flex;
        flex-direction: row;
        gap: 20px;
        width: 100%;
    }
}
</style>
