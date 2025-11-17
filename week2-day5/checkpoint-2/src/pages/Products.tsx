import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { useCart } from "@/hooks/useCart";
import { api } from "@/services/api";
import type { Product } from "@/types/Products";
import { useEffect, useState } from "react";



const Products = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [onLoading, setOnLoading] = useState(false)
    const [qty, setQty] = useState(1)

    const {addToCart, loading} = useCart()

    useEffect(() => {
        const fetchData = async () => {
            try {
                setOnLoading(true)
                const res = await api.get("/products")
                setProducts(res.data)
            } catch (error) {
                console.error(error);
                console.error("gagal get products");
            } finally {
                setOnLoading(false)
            }
        }

        fetchData()
    }, [])

    const handleAddToCart = (data: Product) => {
        console.log(data)
        const newData = {...data, qty, update: false}
        console.log('new data: ', newData)
        addToCart(newData)
        setQty(1)

    }


    return (
        <div className="w-full flex flex-col items-start">
            <p className="p-5 font-bold text-2xl">List Products</p>
                {onLoading && (
                    <div className="flex justify-center items-center w-full h-screen -mt-56">
                        <Spinner className="size-10" />
                    </div>
                )}
            <div className=" w-full min-h-[500px] grid grid-cols-3 gap-14">
                {
                    products.map((data, index) => (
                        <Card 
                        className="w-[350px] min-h-[500px] p-2 shadow-2xl box-content transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl" 
                        key={index}
                        >
                            <div className="w-[350px] h-[300px]">
                                <img className="object-contain w-[350px] h-[300px] rounded-t" src={data.image} alt="" />
                            </div>
                            <div className="flex flex-col items-start px-1.5 pb-3">
                                <p className="font-bold text-[1.5rem]">{data.title.substring(0, 20)}</p>
                                <p className="text-left">{data.description.substring(0, 100)}</p>
                                <p className="text-left text-2xl font-light">${data.price}</p>
                            </div>

                            <Button className="cursor-pointer" onClick={() => handleAddToCart(data)} disabled={loading}>{loading ? <Spinner /> : 'add to cart'}</Button>
                        </Card>
                    ))
                }
            </div>
        </div>
    );
}

export default Products;