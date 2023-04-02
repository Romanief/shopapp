import { useContext } from "react"
import Link from "next/link"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { GiEvilMoon, GiSunPriest } from "react-icons/gi"

import { cartContext } from "@/contexts/CartContext"
import { themeContext } from "@/contexts/ThemeContext"

export default function Topbar({ children }: { children: React.ReactNode }) {
  const { cart } = useContext(cartContext)
  const { dark, setDark } = useContext(themeContext)

  return (
    <div className={dark ? "w-screen h-full myDark" : "w-screen h-full"}>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      <div className="fixed">
        <div className="flex h-32 bg-main justify-around p-10 w-screen">
          <Link href={"/"}>
            <span className="text-6xl cursor-pointer hover:underline text-black">
              Shop
              <span className="text-white dark:text-black font-extrabold">
                App
              </span>
            </span>
          </Link>
          <div className="flex p-5">
            <Link
              href={"/shoppingcart"}
              className="mx-10 text-3xl hover:text-white hover:underline cursor-pointer pt-1 flex"
            >
              <span className="text-3xl">
                <AiOutlineShoppingCart />
              </span>{" "}
              {cart && cart.length > 0 && (
                <span className="ml-3">x {cart.length}</span>
              )}
            </Link>
            <span
              className="text-3xl mt-1 cursor-pointer"
              onClick={() => setDark(dark ? false : true)}
            >
              {dark ? <GiSunPriest /> : <GiEvilMoon />}
            </span>
          </div>
        </div>
        <div
          className={
            dark
              ? "h-10 w-full bg-cyan-900 flex justify-around"
              : "h-10 w-full bg-cyan-100 flex justify-around"
          }
        >
          <Link
            href={"/electronics"}
            className="p-1 text-lg font:bold hover:underline"
          >
            Electronics
          </Link>
          <Link
            href={"/jewelery"}
            className="p-1 text-lg font:bold hover:underline"
          >
            Jewelery
          </Link>
          <Link
            href={"/men's clothing"}
            className="p-1 text-lg font:bold hover:underline"
          >
            Men's Clothing
          </Link>
          <Link
            href={"/women's clothing"}
            className="p-1 text-lg font:bold hover:underline"
          >
            Women's Clothing
          </Link>
        </div>
      </div>

      <div className=" h-28 w-screen"></div>
      <div className="flex w-4/6 mx-auto p-10">{children}</div>
      <div className=" h-32 w-screen"></div>
    </div>
  )
}
