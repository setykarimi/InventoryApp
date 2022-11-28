import { useFormik } from "formik";

const ProductsForm = ({ categories, setProducts }) => {
   
    const handleSubmit = (values) => {
        console.log(values);

        const newProduct = {
            ...values,
            createdAt: new Date().toISOString(),
            id: new Date().getTime(),
        };

        setProducts(prevState => [...prevState, newProduct]);
        initialValues = {
            title: "",
            quantity: "",
            categoryId: ""
        }
    }

    const initialValues = {
        title: "",
        quantity: 0,
        categoryId: ""
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        enableReinitialize: true
    })

    return (
        <section className="product-section">
           <form onSubmit={formik.handleSubmit}>
                <div className="mb-6 bg-indigo-600 p-5 rounded-md">
                    <h2 className="font-bold text-lg text-left text-gray-100 mb-3">Add New Product</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center">
                        <div className="flex justify-between items-center space-x-2">
                            <label className="text-md text-gray-100">Title: </label>
                            <input
                                type="text"
                                name="title"
                                className="rounded-md py-1 border-0 focus:border-0 focus:outline-0 w-11/12"
                                {...formik.getFieldProps('title')}
                            />
                        </div>

                        <div className="flex justify-between items-center space-x-2">
                            <label className="text-md text-gray-100">Quantity: </label>
                            <input
                                type="number"
                                name="quantity"
                                className="rounded-md py-1 border-0 focus:border-0 focus:outline-0 w-11/12"
                                {...formik.getFieldProps('quantity')}
                            />
                        </div>

                        <div className="flex justify-between items-center space-x-2">
                            <label className="text-md text-gray-100">Category: </label>
                            <select
                                name="categoryId"
                                className="rounded-md py-1 border-0 focus:border-0 focus:outline-0 w-11/12"
                                {...formik.getFieldProps('categoryId')}
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
                            className="bg-indigo-200 py-2 font-bold rounded-md border border-indigo-200 text-indigo-600 sx:col-start-2 sx:col-end-3"
                            type="submit"
                            disabled={!formik.isValid}>Add new Product
                        </button>
                    </div>

                </div>
            </form>
        </section>
    );
}

export default ProductsForm;