import React, { createContext, useState } from "react"

import { cartItem, product } from "@/types/type"

type contextType<T = Array<cartItem>> = {
  cart: T
  setCart: (nextState: T) => void
  addToCart: (x: product) => void
  removeFromCart: (x: product) => void
}

export const cartContext = createContext<contextType>(null as any)

export default function CartContext({
  children,
}: {
  children: React.ReactNode
}) {
  const [cart, setCart] = useState<contextType["cart"]>([])

  const addToCart = (x: product) => {
    const newCartItem: cartItem = {
      item: x,
      quantity: 1,
    }

    const newCart = [...cart]
    newCart.push(newCartItem)

    setCart(newCart)
  }

  const removeFromCart = (x: product) => {
    if (cart.filter((i) => i.item.id == x.id)) {
      const newCart = [...cart].filter((i) => i.item.id != x.id)
      setCart(newCart)
    } else {
      console.log("item not in cart")
    }
  }

  const contextValue = {
    cart,
    setCart,
    addToCart,
    removeFromCart,
  }

  return (
    <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
  )
}
