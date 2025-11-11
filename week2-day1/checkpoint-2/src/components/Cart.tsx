import type { FunctionComponent } from "react";

interface CartProps {
    name: string;
    price: number;
    imageUrl: string;
    qty: number;
}

const Cart: FunctionComponent<CartProps> = (props) => {
    return (
        <div>
            <div className=" flex flex-col w-64 bg-white shadow rounded items-start ">
                <img className="w-64" src={props.imageUrl} alt="" />
                <div className="p-3">
                    <p className="text-3xl font-bold">{props.name}</p>
                    <p className="font-light">Rp. {props.price}</p>
                </div>
                <div className="p-3">
                    <p>Quantity: {props.qty}</p>
                </div>
                
            </div>
        </div>
    );
}

export default Cart;