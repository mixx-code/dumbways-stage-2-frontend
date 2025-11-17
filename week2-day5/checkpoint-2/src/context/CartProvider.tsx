import type { Product } from "@/types/Products"
import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(false)

    const addToCart = (data: Product) => {
        setLoading(true)
        const newCart:Product = data
        const cekCart = products.some(product => product.id === data.id)
        if (cekCart) {
            setProducts((prev) =>
            prev.map((product) => product.id === data.id ? { ...product, qty: (product.qty + 1) } : product))
            setTimeout(() => {
                setLoading(false)
            }, 1000)
            return
        }
        
        setProducts((prev) => [newCart, ...prev])
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }
    const updateQty = (id: number, qty: number) => {
        setLoading(true)
        setProducts((prev) =>
            prev.map((product) => product.id === id ? { ...product, qty: qty } : product))
        setTimeout(() => {
            setLoading(false)
            console.log("products provider: ", products)
        }, 1000)
    }
    const deleteCart = (id: number) => {
        setLoading(true)
        console.log('tes delete dengan id: ', id)
        setProducts((prev) =>
        prev.filter((product) => product.id !== id))
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    return (
        <CartContext.Provider value={{products, addToCart, updateQty, deleteCart, loading}}>
            {children}
        </CartContext.Provider>
    )
}