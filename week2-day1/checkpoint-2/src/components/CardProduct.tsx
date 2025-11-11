import { useState, type FunctionComponent } from "react";

interface CardProductProps {
    imageUrl: string
    name: string
    price: number
    qty: number
}

const CardProduct: FunctionComponent<CardProductProps> = (props) => {
    const [qty, setQty] = useState(0)

    const tambahQty = () => {
        setQty(qty + 1)
    }

    return (
        <div className=" flex flex-col w-64 bg-white shadow rounded items-start ">
            <img className="w-64" src={props.imageUrl} alt="" />
            <div className="p-3">
                <p className="text-3xl font-bold">{props.name}</p>
                <p className="font-light">Rp. {props.price}</p>
            </div>
            <div className="p-3 flex gap-2">
                <div className="w-6 bg-white shadow border border-gray-600 rounded hover:bg-gray-600 hover:text-white cursor-pointer"s>
                    -
                </div>
                <p>{qty}</p>
                <div className="w-6 bg-white shadow border border-green-600 rounded  hover:bg-green-600 hover:text-white cursor-pointer">
                    +
                </div>

            </div>
        </div>
    );
}

export default CardProduct;