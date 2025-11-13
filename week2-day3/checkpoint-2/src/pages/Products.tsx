import {
    Card
} from "@/components/ui/card"
import { Link, Outlet } from "react-router-dom";

const dataProduct = [
    { id: 1,imageUrl: "https://picsum.photos/200/300", name: "Kacamata", price: 500_000 },
    { id: 2,imageUrl: "https://picsum.photos/200/300", name: "Ganci", price: 30_000 },
    { id: 3,imageUrl: "https://picsum.photos/200/300", name: "Busur", price: 1_500_000 },
    { id: 4,imageUrl: "https://picsum.photos/200/300", name: "Galon", price: 19_000 },
]

const Products = () => {
    return (
        <div className="w-full flex flex-col items-start">
            <p className="p-5 font-bold text-2xl">List Products</p>
            <div className=" w-full min-h-[500px] flex flex-wrap justify-between">
                {
                    dataProduct.map((data, index) => (
                        <Link to={data.id.toString()}>
                        <Card className="w-[250px] max-h-[400px] p-0 shadow-2xl" key={index}>
                            <div className="w-[250px] h-[300px]">
                            <img className="object-cover w-[250px] h-[300px] rounded-t" src={data.imageUrl} alt="" />
                            </div>
                            <div className="flex flex-col items-start px-1.5 pb-3">
                                <p className="font-bold text-2xl">{data.name}</p>
                                <p >Rp. {data.price}</p>
                            </div>
                        </Card>
                        </Link>
                        
                    ))
                }
            </div>
            <p className="p-5 font-bold text-2xl">Data Product Detail</p>
            <div className=" w-full min-h-[500px] flex flex-wrap justify-between">
                <Outlet />
                {/* {
                    dataProduct.map((data, index) => (
                        <Link to={data.id.toString()}>
                        <Card className="w-[250px] max-h-[400px] p-0 shadow-2xl" key={index}>
                            <div className="w-[250px] h-[300px]">
                            <img className="object-cover w-[250px] h-[300px] rounded-t" src={data.imageUrl} alt="" />
                            </div>
                            <div className="flex flex-col items-start px-1.5 pb-3">
                                <p className="font-bold text-2xl">{data.name}</p>
                                <p >Rp. {data.price}</p>
                            </div>
                        </Card>
                        </Link>
                        
                    ))
                } */}
            </div>
        </div>
    );
}

export default Products;