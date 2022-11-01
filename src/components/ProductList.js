const ProductList = ({ products, categories, setProducts }) => {
    const findCategory = (categoryId) => {
        return categories.find(c => c.id === parseInt(categoryId)).title
    }

    const deleteproductHandler = (productId) => {
        const filteredProduct = products.filter(p => p.id !== parseInt(productId));
        setProducts(filteredProduct)
    }
    return (
        <div>
            <h2 className="font-bold text-xl text-left mb-3">Products List</h2>
            {
                products.map(product => {
                    return (
                        <div key={product.id} className="lg:grid lg:grid-cols-2 flex text-left space-y-3">
                            <span className="font-bold text-lg">{product.title}</span>
                            <div className="flex justify-between">
                                <span>{new Date(product.createdAt).toLocaleDateString("fa-IR")}</span>
                                <span>{findCategory(product.categoryId)}</span>
                                <span className="flex justify-center items-center font-bold text-indigo-500 rounded-full bg-indigo-200 w-6 h-6">{product.quantity}</span>
                                <button 
                                className="border border-red-500 text-red-500 px-3 rounded"
                                onClick={() => deleteproductHandler(product.id)}>delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ProductList;