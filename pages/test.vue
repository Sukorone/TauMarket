<template>
  <div class="test">
    <OrganismsProductHero />
  </div>
</template>

<script setup lang="ts"></script>

<style scope lang="scss">
.test {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100svw;
  height: 100svh;

  @media screen and (max-width: 1000px) {
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px 10px;
  }
}
.swiper {
  &-pagination {
    &-bullet,
    &-bullet-active {
      aspect-ratio: 1;
      border-radius: 28px;
      padding: calc(100svw / 80);
      background: rgba(15, 9, 12, 0.3);
      border: 0.5px solid var(--secondary-gradient-color);
      min-width: calc(100svw / 12);
      height: unset;
      transition: all 0.3s ease;
      &__image {
        object-fit: cover;
        width: 100%;
        aspect-ratio: 1;
        border-radius: 12px;
      }
    }
  }
}
</style>
