import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

type Product = {
  id: number
  imageUrl: string
  name: string
  price: number
}

const dataProduct: Product[] = [
  { id: 1, imageUrl: "https://picsum.photos/200/300", name: "Kacamata", price: 500000 },
  { id: 2, imageUrl: "https://picsum.photos/200/300", name: "Ganci", price: 30000 },
  { id: 3, imageUrl: "https://picsum.photos/200/300", name: "Busur", price: 1500000 },
  { id: 4, imageUrl: "https://picsum.photos/200/300", name: "Galon", price: 19000 }
]

const DetailProduct = () => {
  const [dataProductDetail, setDataProductDetail] = useState<Product | null>(null)
  const { productId } = useParams()

  useEffect(() => {
    const found = dataProduct.find(item => item.id === Number(productId)) || null
    setDataProductDetail(found)
  }, [productId])

  return (
    <>
      {dataProductDetail === null ? (
        <p>data kosong</p>
      ) : (
        <Card className="w-[250px] max-h-[400px] p-0 shadow-2xl">
          <div className="w-[250px] h-[300px]">
            <img
              className="object-cover w-[250px] h-[300px] rounded-t"
              src={dataProductDetail.imageUrl}
              alt={dataProductDetail.name}
            />
          </div>
          <div className="flex flex-col items-start px-1.5 pb-3">
            <p className="font-bold text-2xl">{dataProductDetail.name}</p>
            <p>Rp. {dataProductDetail.price.toLocaleString()}</p>
          </div>
        </Card>
      )}
    </>
  )
}

export default DetailProduct
