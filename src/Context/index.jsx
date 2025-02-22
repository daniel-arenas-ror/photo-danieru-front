import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const initializeLocalStorage = () => {

}

export const ShoppingCartProvider = ({children}) => {
  return (
    <ShoppingCartContext.Provider value={{

    }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}