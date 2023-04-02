import { useContext } from "react"
import Link from "next/link"
import { AiOutlineShoppingCart } from "react-icons/ai"

import { cartContext } from "@/contexts/CartContext"

export default function Topbar({ children }: { children: React.ReactNode }) {
  const { cart } = useContext(cartContext)

  return (
    <div className="w-screen h-screen ">
      <div className="flex h-1/5 bg-cyan-700 justify-around p-10 fixed w-screen">
        <Link href={"/"}>
          <span className="text-6xl cursor-pointer hover:underline">
            Shop<span className="text-white">App</span>
          </span>
        </Link>

        <div className="flex p-5">
          <span className="mx-10 text-3xl hover:underline hover:text-white cursor-pointer">
            Categories
          </span>

          <Link
            href={"/cart"}
            className="mx-10 text-3xl hover:text-white hover:underline cursor-pointer pt-1 flex"
          >
            <span className="text-3xl">
              <AiOutlineShoppingCart />
            </span>{" "}
            {cart && cart.length > 0 && (
              <span className="ml-3">x {cart.length}</span>
            )}
          </Link>
        </div>
      </div>
      <div className="h-1/5 w-screen"></div>
      <div className="flex w-4/6 mx-auto p-10">{children}</div>
      <div className=" h-32 w-screen"></div>
    </div>
  )
}
