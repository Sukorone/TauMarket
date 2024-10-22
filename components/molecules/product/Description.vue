<template>
  <div v-if="data" class="product">
    <p v-if="data?.code" class="product__code">
      Код товара:
      <span v-if="data?.code" class="text-sub">
        {{ data?.code }}
      </span>
    </p>
    <div class="product_wrapper">
      <p v-if="data?.name" class="product__name">
        {{ data?.name }}
      </p>
      <TauDropdown v-model="isDropdownActive" class="product_dropdown">
        <template #trigger>
          <TauBtn
            :icons="[
              undefined,
              {
                name: isDropdownActive ? 'arrow-up' : 'arrow-down',
              },
            ]"
            :space-between="true"
            :center-text="false"
            class="product_dropdown__btn-select"
            :transparent="!isDropdownActive"
            :active="isDropdownActive"
            >{{ data?.dropdownParams!.title }}</TauBtn
          >
        </template>
        <div class="product_dropdown_options_wrapper" v-if="isDropdownActive">
          <TauBtn
            v-for="(item, idx) in data?.dropdownParams!.selectItems"
            :square="true"
            :key="idx"
            :space-between="true"
            :center-text="false"
            class="product_dropdown__btn-option"
            :sub-active="true"
            >{{ item }}</TauBtn
          >
        </div>
      </TauDropdown>
      <div v-for="(item, idx) in data?.params" :key="idx" class="product_param">
        <p v-if="item.title" class="product_param__title">
          {{ item.title }}
        </p>
        <TauSelect v-if="item.selectItems" :items="item.selectItems" />
      </div>
      <p v-if="data?.price" class="product__price">{{ data?.price }}</p>
      <TauBtn v-if="!equalProductsAmount" :icons="[undefined, { name: 'shop', filled: true }]" :center-text="false" :space-between="true" @click="addItem(data!)"> Добавить в корзину</TauBtn>
      <div class="product__counter" v-else>
        <TauBtn @click="deleteItem(data!)">-</TauBtn>
        <p>
          {{ equalProductsAmount }}
        </p>
        <TauBtn @click="addItem(data!)">+</TauBtn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProduct } from '~/types/product'
const cartStore = useCartStore()
const { deleteItem, addItem } = cartStore
const { items } = storeToRefs(cartStore)
interface Props {
  data?: IProduct
}

const props = defineProps<Props>()

const isDropdownActive = ref(false)
const equalProductsAmount = computed(() => {
  return items.value.filter((item) => item.name === props.data?.name).length
})
</script>

<style scoped lang="scss">
.product {
  max-width: 370px;
  padding: 29px 24px;
  border-radius: 28px;
  background: rgba(15, 9, 12, 0.3);
  border: 1px solid var(--secondary-gradient-color);
  height: fit-content !important;
  @media screen and (max-width: 1000px) {
    max-width: unset;
  }
  &_wrapper {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  &__code {
    font-size: 0.875rem;
    margin-bottom: 15px;
    color: var(--secondary-text-color);
  }
  &__name {
    font-size: 1.375rem;
  }
  &_dropdown {
    &__btn {
      &-select {
        width: 100%;
      }
      &-option {
        width: 100%;
      }
    }
    &_options {
      &_wrapper {
        border-radius: 0 0 15px 15px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        gap: 4px;
        background: var(--options-background-color);
        padding: 15px;
      }
    }
  }
  &_param {
    display: flex;
    flex-direction: column;
    gap: 15px;
    &__title {
      font-size: 1.125rem;
    }
  }
  &__price {
    font-size: 1.375rem;
    &::before {
      display: flex;
      content: '';
      background: var(--background-gradient-color);
      opacity: 0.32;
      width: 100%;
      height: 1px;
      margin-bottom: 25px;
    }
  }
  &__counter {
    text-align: center;
    font-size: 1.375rem;
    display: grid;
    grid-template-columns: 1fr 1.5fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
  }
}
</style>
