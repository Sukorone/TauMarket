<template>
  <img v-if="image" class="product-swiper__slide" :src="image" />
  <div v-else class="product-swiper__else"></div>
</template>

<script setup lang="ts">
interface Props {
  image?: string
}

const props = defineProps<Props>()
const swiper = useSwiper()
</script>

<style scoped lang="scss">
.product {
  &-swiper {
    &__slide {
      width: 100%;
      aspect-ratio: 1.325;
      position: relative;
      object-fit: cover;
      border-radius: 12px !important;
      @media screen and (max-width: 1000px) {
        border-radius: 7px;
        aspect-ratio: 1;
      }
    }
    &__else {
      width: 100%;
      height: 100%;
      background: darkgrey;
    }
  }
}
</style>
