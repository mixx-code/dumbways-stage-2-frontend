import { useState, type FunctionComponent } from "react";

export type CardProductProps = {
    imageUrl: string;
    name: string;
    price: number;
    qty: number;
    onAddToCart: (productData: {
        name: string;
        price: number;
        qty: number;
        imageUrl: string;
    }) => void;
};

const CardProduct: FunctionComponent<CardProductProps> = (props) => {
    const [qtyState, setQtyState] = useState<number>(0);

    const handlePlusQty = () => {
        setQtyState(qtyState + 1);
    }
    const handleMinusQty = () => {
        if (qtyState === 0) return;
        setQtyState(qtyState - 1);
    }

    const handleAddToCart = () => {
        if (qtyState === 0) return;

        props.onAddToCart({
            name: props.name,
            price: props.price,
            qty: qtyState,
            imageUrl: props.imageUrl,
        });
        setQtyState(0);
    };

    return (
        <div className=" flex flex-col w-64 bg-white shadow rounded items-start ">
            <img className="w-64" src={props.imageUrl} alt="" />
            <div className="p-3">
                <p className="text-3xl font-bold">{props.name}</p>
                <p className="font-light">Rp. {props.price}</p>
            </div>
            <div className="p-3 flex gap-2">
                <div
                    className="w-6 bg-white shadow border border-gray-600 rounded hover:bg-gray-600 hover:text-white cursor-pointer"
                    onClick={handleMinusQty}
                >
                    -
                </div>
                <p>{qtyState}</p>
                <div
                    className="w-6 bg-white shadow border border-green-600 rounded  hover:bg-green-600 hover:text-white cursor-pointer"
                    onClick={handlePlusQty}
                >
                    +
                </div>
            </div>
            <div className="w-full bg-green-500 text-white text-center p-2 cursor-pointer hover:bg-green-600" onClick={handleAddToCart}>
                <p>Add Cart</p>
            </div>
        </div>
    );
};

export default CardProduct;
