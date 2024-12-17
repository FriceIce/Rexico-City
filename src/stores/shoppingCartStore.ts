import { defineStore } from 'pinia'

export const useShoppingCartStore = defineStore('shoppingCart', {
  state: (): ShoppingCart => ({
    shoppingCart: [],
    itemsCount: 0,
    total: 0,
  }),
  persist: true,
  getters: {
    setTotal: (state) => {
      const listOfPrice = state.shoppingCart.map((product) => product.price)
      const sum = listOfPrice.reduce((price, currValue) => price + currValue, 0)
      return sum
    },

    setItemsCount: (state) => {
      const amountOfItems = state.shoppingCart.map((product) => Number(product.amount))
      const sum = amountOfItems.reduce((item, currValue) => item + currValue, 0)
      return sum
    },
  },
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    addProduct(ticket: Product) {
      this.shoppingCart.push(ticket)
      console.log(this.shoppingCart)
    },

    deleteProduct(id: number) {
      this.shoppingCart = this.shoppingCart.filter((product) => product.id !== id)
      console.log(this.shoppingCart)
    },
  },
})
