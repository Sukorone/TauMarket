<template>
  <div class="tau-select">
    <button v-for="(item, idx) in items" :key="idx" :class="activeIndex === idx ? 'tau-select__btn--active' : 'tau-select__btn'" @click="activeIndex = idx">
      {{ item }}
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  items: string[]
}
const props = defineProps<Props>()
const activeIndex = ref(0)
</script>

<style scoped lang="scss">
.tau-select {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  overflow-x: scroll;
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
  &__btn,
  &__btn--active {
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    background: var(--options-btn-bg-color);
    min-width: 90px;
    min-height: 36px;
    width: 100%;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;
    @media screen and (max-width: 1000px) {
    }
    &--active {
      background: white;
      color: black;
    }
  }
}
</style>
