<template>
  <button class="swiper-button__prev" @click="swiper.slidePrev()"></button>
  <button class="swiper-button__next" @click="swiper.slideNext()"></button>
</template>

<script setup lang="ts">
const swiper = useSwiper()
</script>
<style lang="scss">
.swiper {
  &-button {
    &__prev,
    &__next {
      background-repeat: no-repeat;
      background-position: center;
      background-clip: border-box;
      max-width: 55px;
      width: 10%;
      min-width: 40px;
      aspect-ratio: 1;
      position: absolute;
      bottom: 39px;
      z-index: 1;
      cursor: pointer;
      transition: all 0.3s ease;
      background-color: rgba(15, 9, 12, 0.2);
      border-radius: 12px;
    }
    &__prev {
      background-image: url('~/assets/icons/swiper-arrow-left.svg');
      right: 109px;
      @media (max-width: 700px) {
        left: 39px;
      }
    }

    &__next {
      background-image: url('~/assets/icons/swiper-arrow-right.svg');
      right: 39px;
      @media (max-width: 700px) {
      }
    }
    &__liked {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      aspect-ratio: 1;
      position: absolute;
      top: 34px;
      right: 34px;
      z-index: 2;
      cursor: pointer;
      transition: all 0.3s ease;
      @media (max-width: 700px) {
      }
      &:active {
        transform: scale(1.15);
      }
    }
  }
}
</style>
