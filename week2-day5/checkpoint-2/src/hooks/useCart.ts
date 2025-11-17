import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

export const useCart = () => {
    const context = useContext(CartContext)
    if(!context) {
        throw new Error("useTode must be used within a provider");
    }
    return context
}