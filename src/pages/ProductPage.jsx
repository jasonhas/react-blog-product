import { useEffect, useState } from "react"

const ProductPage = () => {

    const [products, setProducts] = useState([])

    const fetchProductData = () => {
        fetch("https://fakestoreapi.com/products")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setProducts(data)
          })
    }

    useEffect(() => {
        fetchProductData()
    }, [])

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-light">Products</h1>
            {products.length > 0 && (
                <ul>
                    {products.map(product => (
                        <li key={product.id}>{product.title}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ProductPage