"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface JsonModeContextType {
  jsonMode: boolean
  setJsonMode: (v: boolean) => void
}

const JsonModeContext = createContext<JsonModeContextType>({
  jsonMode: false,
  setJsonMode: () => {},
})

export function JsonModeProvider({ children }: { children: ReactNode }) {
  const [jsonMode, setJsonMode] = useState(false)
  return (
    <JsonModeContext.Provider value={{ jsonMode, setJsonMode }}>
      {children}
    </JsonModeContext.Provider>
  )
}

export function useJsonMode() {
  return useContext(JsonModeContext)
}
