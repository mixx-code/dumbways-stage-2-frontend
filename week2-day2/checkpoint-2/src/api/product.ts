export const dataProduct = [
    {name: "buku", price: 20000, imageUrl: "https://placehold.co/400"},
    {name: "pensil", price: 1000, imageUrl: "https://placehold.co/400"},
    {name: "gunting", price: 15000, imageUrl: "https://placehold.co/400"},
    {name: "penghapus", price: 500, imageUrl: "https://placehold.co/400"},
    {name: "gelang", price: 300000, imageUrl: "https://placehold.co/400"},
]




export async function fetchProduct(name:string): Promise<{product:object}>{
    return new Promise((resolve) => {
        setTimeout(() => {
            const foundProduct = dataProduct.find(product => 
                product.name.toLowerCase() === name.toLowerCase()
            );
            resolve({
                product: foundProduct || {}
            });
        }, 1000)
    })
}