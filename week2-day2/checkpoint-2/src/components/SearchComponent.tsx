import React, { useEffect, useState, type FunctionComponent } from "react";
import { useDebounce } from "../hooks/debounce";
import { fetchProduct } from "../api/product";


interface SearchComponentProps {
    onDataProduct: (product: object | null) => void;
    onLoading: (loading: boolean) => void;
}
 
const SearchComponent: FunctionComponent<SearchComponentProps> = (props) => {
    const [name, setName] = useState("");
    const debounceProduct = useDebounce(name, 500);
    
    

     useEffect(() => {
        if (debounceProduct) {
            props.onLoading(true)
            fetchProduct(debounceProduct)
                .then((dataFetch) => {
                    props.onDataProduct(dataFetch.product);
                })
                .catch((error) => {
                    console.error("Error fetching product:", error);
                    props.onDataProduct(null);
                })
                .finally(() => {
                    props.onLoading(false)
                });
        } else {
            // Reset ketika search kosong
            props.onDataProduct(null);
        }
    }, [debounceProduct, props]);


    const handleInputChange = (i: React.ChangeEvent<HTMLInputElement>) => {
        setName(i.target.value)
    }
    return ( 
        <div className="flex w-4/5 bg-white shadow p-5 rounded mt-5 jus">
            <p className="p-2">Cari Product : </p>
            <input className="w-11/12 border-2 border-gray-400 p-2" type="text" placeholder="Masukan Nama Product" onChange={(i)=> handleInputChange(i)} />
        </div>
     );
}
 
export default SearchComponent;