<template>
  <div class="product-hero">
    <MoleculesProductSwiper :slide-list="['/img/blogbackground.png', '/img/blogbackground2.png', '/img/cardphoto.png', '/png/prefooter.png', 'https://placehold.co/50x120']" />
    <MoleculesProductDescription
      :data="{
        name: 'Apple MacBook Air 13 (M3, 8C CPU/8C GPU, 2024), 8 ГБ, 256 ГБ SSD, «сияющая звезда»',
        price: '110 990 P',
        code: '043AF43',
        dropdownParams: {
          title: 'Цвет',
          selectItems: ['Черынй', 'Черынй', 'Черынй', 'Черынй', 'asd'],
        },
        params: [
          {
            title: 'ПЗУ',
            selectItems: ['256gb', '512gb', '1tb', '2tb', '4tb', '8tb'],
          },
          {
            title: 'paramsTitle2',
            selectItems: ['1', '2', '3'],
          },
          {
            title: 'ОЗУ',
            selectItems: ['12gb', '24gb', '36gb'],
          },
        ],
      }" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.product-hero {
  display: grid;
  grid-template-columns: 1.64fr 1.336fr;
  width: 100%;
  gap: calc(100svw / 64);
  max-width: 57.3svw;
  @media screen and (max-width: 1000px) {
    grid-template-columns: calc(100svw - 20px);
    grid-template-rows: auto;
    gap: 10px;
  }
}
</style>
