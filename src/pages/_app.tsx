import "@/styles/globals.css"
import type { AppProps } from "next/app"

import CartContext from "@/contexts/CartContext"
import ThemeContext from "@/contexts/ThemeContext"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContext>
      <CartContext>
        <Component {...pageProps} />
      </CartContext>
    </ThemeContext>
  )
}
