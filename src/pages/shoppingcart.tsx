import { useContext } from "react"
import Link from "next/link"

import Layout from "@/components/Layout"
import { cartContext } from "@/contexts/CartContext"
import { themeContext } from "@/contexts/ThemeContext"
import CartProductSummary from "@/components/CartProductSummary"
import Head from "next/head"

function ShoppingCart() {
  const { cart } = useContext(cartContext)
  const { dark } = useContext(themeContext)
  let total = 0

  cart.forEach((x) => {
    total += x.item.price
  })

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <Layout>
        {total != 0 ? (
          <div className="flex flex-col mx-auto mt-10 h-screen">
            <div className="flex flex-col align-baseline">
              {cart.map((x) => (
                <CartProductSummary product={x.item} />
              ))}
            </div>
            <div
              className={
                dark
                  ? "text-3xl p-3 m-10 border-2 border-main rounded-3xl bg-black flex justify-between cursor-pointer hover:bg-main"
                  : "text-3xl p-3 m-10 border-2 border-main rounded-3xl bg-gray-50 flex justify-between cursor-pointer hover:bg-main"
              }
            >
              <div className="mx-3">Total: {total.toFixed(2)}$</div>
              <div className="mx-3">Buy</div>
            </div>
          </div>
        ) : (
          <div className="text-5xl text-center font-extrabold mx-auto my-16 h-screen">
            Nothing on cart. Go{" "}
            <Link href="/" className="text-main">
              Shopping
            </Link>
          </div>
        )}
      </Layout>
    </>
  )
}

export default ShoppingCart
