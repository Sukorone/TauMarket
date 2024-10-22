<template>
    <span class="footer__text" :class="{'footer__title': title, 'footer__description': description}"
    >
        <slot />
    </span>
</template>

<script setup lang="ts">
interface IProps {
    title?: boolean,
    description?: boolean,
}

const props = defineProps<IProps>()
</script>

<style scoped lang="scss">
.footer {
    &__text {
        font-size: 19px;
        font-weight: 400;
        line-height: 23px;
        color: var(--primary-text-color);
        opacity: 0.5;
    }

    &__title {
        font-size: 22px;
        line-height: 27px;
        opacity: 1;
    }

    &__description {
        font-size: 22px;
        line-height: 24px;
        letter-spacing: 0.4px;
    }
}
</style>