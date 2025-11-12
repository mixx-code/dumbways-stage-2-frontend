import { useState } from 'react';
import { dataProduct } from './api/product'
import './App.css'
import CardProduct from './components/CardProduct'
import SearchComponent from './components/SearchComponent'

interface Product {
  name: string;
  price: number;
  imageUrl: string;
}

function App() {

  const [dataFetch, setDataFetch] = useState<Product | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const handleOnDataProduct = (dataProduct: Product | null) => {
    console.log(dataProduct)
    setDataFetch(dataProduct)
  }

  const handleLoading = (loading: boolean) => {
    setIsLoading(loading)
  }


  return (
    <div className='w-full flex flex-col items-center gap-3'>
      <SearchComponent onDataProduct={handleOnDataProduct} onLoading={handleLoading} />
      <div className='flex flex-col h-auto bg-white rounded items-center pb-8'>
        <h1 className='w-4/5 text-2xl font-bold m-12 '>List product</h1>
        <div className='flex flex-wrap w-4/5 gap-5 box-border'>
        {
          isLoading ? (<p>Loading....</p>) : (
            dataFetch === null ? (
              dataProduct === null ? null : (
                dataProduct.map((data, index) => (
                  <div className='box-border' key={index}>
                    <CardProduct
                      name={data.name}
                      price={data.price}
                      imageUrl={data.imageUrl}
                    />
                  </div>
                ))
              )
            ) : (
                    <CardProduct
                      name={dataFetch.name}
                      price={dataFetch.price}
                      imageUrl={dataFetch.imageUrl}
                    />
                )

          )
        }

          {
          } 



        </div>
      </div>
    </div>
  )
}

export default App
