import type { Product } from "@/types/Products"
import { createContext } from "react"

export interface CartContextType {
    products: Product[]
    addToCart: (data: Product) => void
    updateQty: (id: number, qty:number) => void
    deleteCart: (id:number) => void
    loading: boolean

}


export const CartContext = createContext<CartContextType | undefined>(undefined)