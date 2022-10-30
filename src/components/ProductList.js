const ProductList = ({products, categories, setProducts}) => {
    const findCategory = (categoryId) => {
        return categories.find(c => c.id === parseInt(categoryId)).title
    }

    const deleteproductHandler = (productId) => {
        const filteredProduct = products.filter(p => p.id !== parseInt(productId));
        setProducts(filteredProduct)
    }
    return ( 
        <div>
            <h2>ProductsList</h2>
            {
                products.map(product => {
                    return (
                        <div key={product.id}>
                            <span>{new Date(product.createdAt).toLocaleDateString("fa-IR")}</span>
                            <span>{product.title}</span>
                            <span>{findCategory(product.categoryId)}</span>
                            <span>{product.quantity}</span>
                            <button onClick={() => deleteproductHandler(product.id)}>delete</button>
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default ProductList;