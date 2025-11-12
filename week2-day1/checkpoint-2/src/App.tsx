// import { useState } from 'react'
import { useState } from 'react';
import './App.css'
import CardProduct from './components/CardProduct'
import Cart from './components/Cart';

type Product = {
  name: string;
  price: number;
  imageUrl: string;
  qty: number;
}


const dataListProduct: Product[] = [
  {
    name: "sapu",
    price: 20000,
    imageUrl: "https://placehold.co/200x200",
    qty: 0,
  },
  {
    name: "kain",
    price: 15000,
    imageUrl: "https://placehold.co/200x200",
    qty: 0,
  },
  {
    name: "piring",
    price: 25000,
    imageUrl: "https://placehold.co/200x200",
    qty: 0,
  },
];
function App() {
  const [listProduct, setListProduct] = useState(dataListProduct);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleAddToCart = (productData: Product) => {
    setCartItems((prevCart) => {
      const cekProductCart = prevCart.findIndex(
        (item) => item.name === productData.name
      );

      if (cekProductCart !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[cekProductCart].qty += (productData.qty / 2);
        return updatedCart;
      } else {
        return [...prevCart, productData];
      }
    });
  };

  return (
    <div className="flex flex-col gap-4 p-4 items-start">
      <h1 className="text-4xl font-bold">List Product</h1>
      <div className="flex gap-4 flex-wrap">
        {
          
        }


        {listProduct.length === 0 ? (
          <p>Data produk kosong</p>
        ) : (
          listProduct.map((product, index) => (
            <CardProduct
              key={index}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              qty={product.qty}
              onAddToCart={handleAddToCart}

            />
          ))
        )}
      </div>
        <h1 className="text-4xl font-bold">Cart</h1>
        <div className="flex gap-4 flex-wrap">
          {cartItems.length === 0 ? (
            <p>Keranjang kosong</p>
          ) : (
            cartItems.map((item, index) => (
              <Cart key={index} name={item.name} price={item.price} imageUrl={item.imageUrl} qty={item.qty} />
            ))
          )}
        </div>
      </div>
  );
}

export default App
