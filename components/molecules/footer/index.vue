<template>
    <div class="footer_list">
    <AtomsFooter title>{{ props.title }}</AtomsFooter>
        <div class="footer_list__items" v-for="item in props.items">
            <NuxtLink :to="item.url">
                <AtomsFooter>{{ item.text }}</AtomsFooter>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IFooter } from '~/types/footer'

const props = defineProps<IFooter>()
</script>

<style scoped lang="scss">
.footer_list {
    display: flex;
    flex-direction: column;
    gap: 25px;

    &__items {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
}
</style>