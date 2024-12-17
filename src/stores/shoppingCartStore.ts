import { defineStore } from 'pinia'

export const useShoppingCartStore = defineStore('shoppingCart', {
  state: (): ShoppingCart => ({
    shoppingCart: [],
    itemsCount: 0,
    total: 0,
    openShoppingCart: false,
  }),
  persist: true,
  getters: {
    setTotal: (state) => {
      const listOfPrice = state.shoppingCart.map(
        (product) => product.price * Number(product.amount),
      )
      const sum = listOfPrice.reduce((price, currValue) => price + currValue, 0)

      // calculating the amount of decimal numbers.
      const decimalIndex = sum.toString().indexOf('.')
      return decimalIndex > 2 ? sum.toFixed(2) : sum
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
      const exists = this.shoppingCart.find((product) => product.id === ticket.id)

      // If ticket exist in the shopping cart run this code
      if (exists) {
        this.shoppingCart = this.shoppingCart.map((product) => {
          // The reason for using ticket.amount and not exist.amount is because we want to add the new amount to the existing one. exist.amount is the same as product.amount wich will double the value.
          if (exists.id === product.id && product.amount && ticket.amount) {
            return { ...product, amount: (product.amount += ticket.amount) }
          }

          return product
        })

        return // this return is used as an exit.
      }

      this.shoppingCart.push(ticket)
      console.log(this.shoppingCart)
    },

    deleteProduct(ticket: Product) {
      // [1]. First, I map through the list and update the amout property value by subtracting the value with the ticket.amount.
      // [2]. Secondly, I filter the list to remove all products with amount prperty value 0.
      this.shoppingCart = this.shoppingCart
        .map((product) => {
          if (product.id === ticket.id && ticket.amount && product.amount) {
            return { ...product, amount: product.amount - ticket.amount }
          }

          return product
        })
        .filter((product) => Number(product.amount) > 0)

      console.log(this.shoppingCart)
    },

    calcProductTotal(ticket: Product) {
      const amount = Number(ticket.amount)
      const price = ticket.price * amount
      const decimalIndex = price.toString().split('.')[1]

      return decimalIndex && decimalIndex.length > 2 ? price.toFixed(2) : price
    },
  },
})
