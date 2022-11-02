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
            <h2 className="font-bold text-xl text-left mb-4">Products List</h2>
            {
                products.map(product => {
                    return (
                        <div key={product.id} className= "flex justify-between text-left space-y-3 items-center">
                            <span className="font-bold text-lg mt-2">{product.title}</span>
                            <div className="flex space-x-3 items-center mt-0">
                                <span>{new Date(product.createdAt).toLocaleDateString("fa-IR")}</span>
                                <span>{findCategory(product.categoryId)}</span>
                                <span className="flex justify-center items-center font-bold text-indigo-500 rounded-full bg-indigo-200 w-6 h-6">{product.quantity}</span>
                                <button 
                                className="border border-red-500 text-red-500 px-2 py-1 rounded font-bold text-sm"
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