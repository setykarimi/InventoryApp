import { useState } from "react";

const ProductsForm = ({ categories, setProducts }) => {
    const [productsFormData, setProductsFormData] = useState({
        title: "",
        quantity: 0,
        categoryId: ""
    });
    

    const changeHandler = ({target}) => {
        setProductsFormData({...productsFormData, [target.name]: target.value})
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
        <div>
            <form>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={productsFormData.title}
                        onChange={changeHandler}
                    />
                </div>

                <div>
                    <label>Quantity</label>
                    <input
                        type="number"
                        name="quantity"
                        value={productsFormData.quantity}
                        onChange={changeHandler}
                    />
                </div>

                <div>
                    <label>category</label>
                    <select
                        name="categoryId"
                        value={productsFormData.categoryId}
                        onChange={changeHandler}
                    >
                        <option>select a category</option>
                        {categories && categories.map((category) => {
                            return (
                                <option name="categoryId" key={category.id} value={category.id}>{category.title}</option>
                            )
                        })}
                    </select>
                </div>

                <button onClick={addNewProductHandler}>Add new Product</button>
            </form>
        </div>
    );
}

export default ProductsForm;