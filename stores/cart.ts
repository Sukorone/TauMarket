import { defineStore } from 'pinia'
import type { IProduct } from '~/types/product'
import type { ICartStore } from '~/types/stores/cart'
export const useCartStore = defineStore({
  id: 'cart-store',
  state: (): ICartStore => {
    return {
      items: [],
    }
  },
  actions: {
    addItem(item: IProduct) {
      this.items = [...this.items, item]
    },
    deleteItem(item: IProduct) {
      this.items.splice(this.items.indexOf(item), 1)
    },
  },
})
