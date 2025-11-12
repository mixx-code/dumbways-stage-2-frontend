import type { FunctionComponent } from "react";

interface CardProductProps {
    name: string
    price: number
    imageUrl: string
}
 
const CardProduct: FunctionComponent<CardProductProps> = (props) => {
    return ( 
        <div className="w-72 h-auto bg-white shadow-2xl rounded pb-2 box-border">
            <img className="w-full rounded-t" src={props.imageUrl} alt="" />
            <p className="font-bold text-[2rem] p-2">{props.name}</p>
            <p className="font-light text-[1.5rem] p-2">Rp. {props.price}</p>
        </div>
     );
}
 
export default CardProduct;