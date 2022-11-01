import { useState } from "react";

const ProductsForm = ({ categories, setProducts }) => {
    const [productsFormData, setProductsFormData] = useState({
        title: "",
        quantity: 0,
        categoryId: ""
    });

    const changeHandler = ({ target }) => {
        setProductsFormData({ ...productsFormData, [target.name]: target.value })
    };

    const addNewProductHandler = (e) => {
        e.preventDefault();

        const newProduct = {
            ...productsFormData,
            createdAt: new Date().toISOString(),
            id: new Date().getTime(),
        };

        setProducts(prevState => [...prevState, newProduct]);
        setProductsFormData({
            title: "",
            quantity: "",
            categoryId: ""
        })
    }


    return (
        <section className="product-section">
            <form>
                <div className="mb-6 bg-indigo-600 p-5 rounded-md">
                    <h2 className="font-bold text-lg text-left text-gray-100 mb-3">Add New Product</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center items-center">
                        <div className="flex justify-between items-center space-x-2">
                            <label className="text-md text-gray-100">Title: </label>
                            <input
                                type="text"
                                name="title"
                                value={productsFormData.title}
                                onChange={changeHandler}
                                className="rounded-md py-1 border-0 focus:border-0 focus:outline-0 w-11/12"
                            />
                        </div>

                        <div className="flex justify-between items-center space-x-2">
                            <label className="text-md text-gray-100">Quantity: </label>
                            <input
                                type="number"
                                name="quantity"
                                value={productsFormData.quantity}
                                onChange={changeHandler}
                                className="rounded-md py-1 border-0 focus:border-0 focus:outline-0 w-11/12"
                            />
                        </div>

                        <div className="flex justify-between items-center space-x-2">
                            <label className="text-md text-gray-100">Category: </label>
                            <select
                                name="categoryId"
                                value={productsFormData.categoryId}
                                onChange={changeHandler}
                                className="rounded-md py-1 border-0 focus:border-0 focus:outline-0 w-11/12"
                            >
                                <option>select a category</option>
                                {categories && categories.map((category) => {
                                    return (
                                        <option name="categoryId" key={category.id} value={category.id}>{category.title}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <button
                            className="bg-indigo-200 py-2 font-bold rounded-md border border-indigo-200 text-indigo-600 lg:col-start-2 lg:col-end-3"
                            onClick={addNewProductHandler}>Add new Product</button>
                    </div>

                </div>
            </form>
        </section>
    );
}

export default ProductsForm;