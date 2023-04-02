import { use, useContext } from "react"
import { MdOutlineRemoveShoppingCart } from "react-icons/md"

import { product as productType } from "@/types/type"
import { cartContext } from "@/contexts/CartContext"

function CartProductSummary({ product }: { product: productType }) {
  const { removeFromCart } = useContext(cartContext)
  return (
    <div className="flex flex-col my-7 w-full">
      <div className="h-32 flex">
        <div className=" h-40 w-28 p-3 rounded-3xl bg-white">
          <img src={product.image} className="w-28" />
        </div>

        <div className="flex flex-col ml-10 justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold ">{product.title}</span>
            <span>{product.price} $</span>
          </div>
          <div
            className="text-5xl cursor-pointer"
            onClick={() => removeFromCart(product)}
          >
            <MdOutlineRemoveShoppingCart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProductSummary
