<template>
  <div class="pagination_container">
    <div class="pagination">
      <tau-btn :class="['pagination__button', currentPage === 1 ? 'pagination__button-active' : '']"
        @click="updatePage(1)">
        1
      </tau-btn>
      <tau-btn class="pagination__button" v-if="currentPage >= 2">
        ...
      </tau-btn>
      <tau-btn :class="['pagination__button', num === currentPage ? 'pagination__button-active' : '']"
        v-show="num > 1 && num !== totalPages" v-for="(num, idx) in visiblePages" :key="idx" @click="updatePage(num)">
        {{ num }}
      </tau-btn>
      <tau-btn class="pagination__button" v-if="currentPage < totalPages - 6">
        ...
      </tau-btn>
      <tau-btn :class="['pagination__button', currentPage === totalPages ? 'pagination__button-active' : '']"
        @click="updatePage(totalPages)">
        {{ totalPages }}
      </tau-btn>
    </div>
    <div class="pagination_controller">
      <tau-btn square class="pagination__button-prev" :icons="[{ name: 'arrow-swiper', filled: true }]"
        @click="goToPrevPage" />
      <tau-btn square class="pagination__button-next" :icons="[{ name: 'arrow-swiper', filled: true }]"
        @click="goToNextPage" />
    </div>
  </div>
</template>

<script setup lang="ts">
// Define props
interface Props {
  totalPages: number
}

const props = defineProps<Props>();

//pagesArray.slice(currentPage - 1, currentPage + 5)
const visiblePages = computed(() => {
  return pagesArray.value.slice(Math.max(1, currentPage.value - 3), Math.min(props.totalPages, currentPage.value + 3));
});

const router = useRouter();
const route = useRoute();
const currentPage = ref<number>(1);

const pagesArray = computed<number[]>(() => {
  const pages = [];
  for (let i = 1; i <= props.totalPages; i++) {
    pages.push(i);
  }

  return pages;
});

watchEffect(() => {
  const page = parseInt(route.query.page as string) || 1;
  currentPage.value = Math.min(Math.max(1, page), props.totalPages);
});

const updatePage = (currentPage: number) => {
  if (currentPage < 1 || currentPage > props.totalPages) return;
  router.push({ query: { ...route.query, page: currentPage.toString() } });
}

const goToPrevPage = () => {
  updatePage(currentPage.value - 1);
}

const goToNextPage = () => {
  updatePage(currentPage.value + 1);
}
</script>

<style lang="scss">
.pagination {
  display: flex;
  align-items: center;
  gap: 15px;

  &_container {
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 30px 0;
  }

  &_controller {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  &__button {
    width: 56px;
    height: auto !important;
    font-size: 22px;
    font-weight: 500;
    line-height: 20px;

    &-active {
      background: var(--primary-text-color);
      color: var(--primary-text-color-hover);
    }

    &-next {
      transform: rotate(180deg);
    }
  }
}
</style>
