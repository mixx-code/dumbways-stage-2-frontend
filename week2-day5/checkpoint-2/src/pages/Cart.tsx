import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/hooks/useCart";
import type { Product } from "@/types/Products";
import { useState } from "react";

const Cart = () => {
    const { products, updateQty, loading, deleteCart } = useCart()
    const [carts, setCarts] = useState<Product[]>(products)

    console.log(carts)


    const handleMinusQty = (id: number) => {
        setCarts((prev) =>
            prev.map((data) =>
                data.id === id
                    ? { ...data, qty: Math.max(1, data.qty - 1), update: true }
                    : data
            )
        );
    };

    const handlePlusQty = (id: number) => {
        setCarts((prev) =>
            prev.map((data) =>
                data.id === id
                    ? { ...data, qty: data.qty + 1, update: true }
                    : data
            )
        );
    };

    const handleUpdateQty = (id: number, qty: number) => {
        setCarts((prev) =>
            prev.map((data) =>
                data.id === id
                    ? { ...data, update: false }
                    : data
            )
        );
        updateQty(id, qty)

    }

    const handleDelete = (id: number) => {
        setCarts((prev) =>
            prev.filter((prev) => prev.id !== id)
        )
        deleteCart(id)
    }


    return (
        <div className="w-full flex flex-col items-start">
            <p className="p-5 font-bold text-2xl">List Carts</p>
            <div className=" w-full min-h-[500px] grid grid-cols-3 gap-14">
                {carts.length === 0 ? <p>Belum ada data</p> : <></>}
                {
                    carts.map((cart, index) => (
                        <Card
                            className="w-[350px] min-h-[500px] p-2 shadow-2xl box-content transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                            key={index}
                        >
                            <div className="w-[350px] h-[300px]">
                                <img className="object-contain w-[350px] h-[300px] rounded-t" src={cart.image} alt="" />
                            </div>
                            <div className="flex flex-col items-start px-1.5 pb-3">
                                <p className="font-bold text-[1.5rem]">{cart.title.substring(0, 20)}</p>
                                <p className="text-left">{cart.description.substring(0, 100)}</p>
                                <p className="text-left text-2xl font-light">${cart.price}</p>
                            </div>
                            <div>
                                <Button variant="secondary" className="cursor-pointer hover:bg-accent-foreground hover:text-accent" onClick={() => handleMinusQty(cart.id)}>-</Button>
                                <span className="p-2">{cart.qty}</span>
                                <Button variant="secondary" className="cursor-pointer hover:bg-accent-foreground hover:text-accent" onClick={() => handlePlusQty(cart.id)}>+</Button>
                            </div>
                            {loading && <p>sedang loading</p>}
                            {
                                cart.update ? (
                                    <Button className="cursor-pointer" onClick={() => handleUpdateQty(cart.id, cart.qty)} disabled={loading}>Save Update</Button>
                                ) : (
                                    <></>
                                )
                            }
                            {
                                // <Button variant="destructive" className="bg-red-500 cursor-pointer" onClick={() => handleDelete(cart.id)} disabled={loading}>Delete Product</Button>
                                <AlertDialog>
                                    <AlertDialogTrigger asChild >
                                        <Button variant="destructive" className="bg-red-500 cursor-pointer" disabled={loading}>Delete Product</Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Anda Yakin Ingin Menghapus Product ini?</AlertDialogTitle>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Tidak</AlertDialogCancel>
                                            <AlertDialogAction onClick={() => handleDelete(cart.id)} className="bg-red-500 text-white cursor-pointer">Ya</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            }

                        </Card>
                    ))
                }
            </div>
        </div>
    );
}

export default Cart;