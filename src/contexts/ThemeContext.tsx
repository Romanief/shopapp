import React, { createContext, useState } from "react"

type contextType = {
  dark: boolean
  setDark: React.Dispatch<React.SetStateAction<boolean>>
}
export const themeContext = createContext<contextType>(null as any)

export default function ThemeContext({
  children,
}: {
  children: React.ReactNode
}) {
  const [dark, setDark] = useState<boolean>(false)

  const contextValue = {
    dark,
    setDark,
  }

  return (
    <themeContext.Provider value={contextValue}>
      {children}
    </themeContext.Provider>
  )
}
