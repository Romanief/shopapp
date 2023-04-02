import { useContext } from "react"
import {
  MdOutlineAddShoppingCart,
  MdOutlineRemoveShoppingCart,
} from "react-icons/md"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

import { cartContext } from "@/contexts/CartContext"
import { product as productType } from "@/types/type"

function Product({ product }: { product: productType }) {
  const { cart, addToCart, removeFromCart } = useContext(cartContext)

  return (
    <div className="my-3 h-96 flex flex-col rounded-3xl p-10">
      <span className="text-3xl mb-10 border-b pb-3 border-cyan-700">
        {product.title}
      </span>
      <div className="flex h-3/4 justify-between">
        <div className="rounded-3xl m-3 bg-white p-3">
          <img src={product.image} className="h-full" />
        </div>
        <div className="w-1/2 ml-10 flex flex-col justify-between">
          <div>
            <div>{product.description}</div>
            <div className="my-3 font-bold">{product.price} $</div>
          </div>
          <div className="flex">
            <div className="flex text-xl mt-1">
              {[...new Array(Math.floor(product.rating.rate)).fill(0)].map(
                (a) => (
                  <AiFillStar />
                )
              )}
              {[...new Array(5 - Math.floor(product.rating.rate)).fill(0)].map(
                (a) => (
                  <AiOutlineStar />
                )
              )}
            </div>
            <div className="mx-2">({product.rating.count})</div>
          </div>
        </div>
        {cart.filter((x) => x.id == product.id).length == 0 ? (
          <div
            onClick={() => addToCart(product)}
            className="text-5xl hover:underline cursor-pointer"
          >
            <MdOutlineAddShoppingCart />
          </div>
        ) : (
          <div
            onClick={() => removeFromCart(product)}
            className="text-5xl hover:underline cursor-pointer"
          >
            <MdOutlineRemoveShoppingCart />
          </div>
        )}
      </div>
    </div>
  )
}

export default Product
