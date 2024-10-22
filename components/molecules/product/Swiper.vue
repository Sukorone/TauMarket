<template>
  <div class="swiper" v-if="slideList">
    <div class="swiper_wrapper">
      <Swiper
        :modules="[SwiperAutoplay, SwiperPagination]"
        :loop="true"
        :pagination="pagination"
        :space-between="0"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }">
        <SwiperSlide v-for="(slide, idx) in slideList" :key="idx">
          <AtomsProductSwiperSlide :image="slide" />
        </SwiperSlide>
        <AtomsProductSwiperControls />
      </Swiper>
      <TauIcon class="swiper-button__liked" @click="toggleLike()" name="heart" :filled="isLiked" />
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  slideList?: string[]
}
const props = defineProps<Props>()
const swiper = useSwiper()
const isLiked = ref(true)
const toggleLike = () => {
  isLiked.value = !isLiked.value
}
const pagination = ref({
  clickable: true,
  el: '.swiper-pagination',
  renderBullet: (index: number) => {
    if (props.slideList && props.slideList.length > index) {
      return `<div class="swiper-pagination-bullet"> <img class="swiper-pagination-bullet__image" src="${props.slideList[index]}"/> </div>`
    }
    return ''
  },
})
</script>

<style scoped lang="scss">
.swiper {
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (max-width: 1000px) {
    width: calc(100svw - 20px);
    aspect-ratio: 1;
  }
  &-slide {
    position: relative;
    padding: 24px;
    &-active {
      transition: all 0.5s ease;
    }
    &-next {
      opacity: 0.5;
      transform: scale(0.9);
    }
    &-prev {
      opacity: 0.5;
      transform: scale(0.9);
    }
  }
  &-pagination {
    position: relative;
    display: flex;
    justify-self: center;
    gap: 20px;
    overflow-x: scroll;
    max-width: 36svw;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none;
    touch-action: pan-x;
    &::-webkit-scrollbar {
      display: none;
      width: 0px;
      scrollbar-width: none;
      background: transparent;
    }
    @media screen and (max-width: 1000px) {
      display: none;
    }
  }
  &_wrapper {
    position: relative;
    max-width: 36.5svw;
    height: fit-content;
    border: 2px solid red;
    border-radius: 28px;
    border: 0.5px solid var(--secondary-gradient-color);
    background: rgba(15, 9, 12, 0.3);
    @media screen and (max-width: 1000px) {
      border-radius: 14px;
      max-width: unset;
    }
  }
}
</style>
