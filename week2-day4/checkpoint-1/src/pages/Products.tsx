import { Card } from "@/components/ui/card";
import { api } from "@/services/api";
import { useEffect, useState } from "react";

type ProductType = {
    id: number
    title: string
    description: string
    image: string
    price: number
}


const Products = () => {
    const [products, setProducts] = useState<ProductType[]>([])
    const [onLoading, setOnLoading] = useState(false)
    const [selectedProduct, setSelectedproduct] = useState<ProductType | null>(null)


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


    return (
        <div className="w-full flex flex-col items-start">
            <p className="p-5 font-bold text-2xl">List Products</p>
            <div className=" w-full min-h-[500px] grid grid-cols-3 gap-14">
                {
                    products.map((data, index) => (
                        <Card 
                        className="w-[350px] min-h-[500px] p-2 shadow-2xl box-content" 
                        key={index}
                        onClick={() => setSelectedproduct(data)}
                        >
                            <div className="w-[350px] h-[300px]">
                                <img className="object-contain w-[350px] h-[300px] rounded-t" src={data.image} alt="" />
                            </div>
                            <div className="flex flex-col items-start px-1.5 pb-3">
                                <p className="font-bold text-[1.5rem]">{data.title.substring(0, 20)}</p>
                                <p className="text-left">{data.description.substring(0, 100)}</p>
                                <p className="text-left text-2xl font-light">${data.price}</p>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </div>
    );
}

export default Products;