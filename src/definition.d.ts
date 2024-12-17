type TicketCard = {
  id: number
  background: string
  image: {
    src: string
    alt: string
  }
  title: {
    text: string
    color: string
  }
  subtitle: {
    text: string
    color: string
  }
  price: number
  button: {
    bgColor: string
    text: string
  }
}

type Product = {
  id: number
  title: string
  price: number
  cardType: string
  description: string
  includes: string[]
  amount?: number
}

type ShoppingCart = {
  shoppingCart: Array<Product>
  itemsCount: number
  total: number
}
