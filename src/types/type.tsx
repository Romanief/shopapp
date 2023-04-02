export type product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    count: number
    rate: number
  }
}

export type cartItem = {
  item: product
  quantity: number
}
