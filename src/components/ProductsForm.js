import { useFormik } from "formik";
import * as Yup from 'yup';

const ProductsForm = ({ categories, setProducts }) => {

    const handleSubmit = (values) => {

        const newProduct = {
            ...values,
            createdAt: new Date().toISOString(),
            id: new Date().getTime(),
        };

        setProducts(prevState => [...prevState, newProduct]);

        values.title = "";
        values.quantity = "";
        values.categoryId = "";
    }

    const initialValues = {
        title: "",
        quantity: 0,
        categoryId: ""
    }

    const validationSchema = Yup.object({
        title: Yup.string().required("Title is required"),
        quantity: Yup.number().required("Quantity is required"),
        categoryId: Yup.string().required("Category is required")
    })

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema,
        enableReinitialize: true,
        validateOnMount: true

    })

    return (
        <section className="product-section">
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-6 bg-indigo-600 p-5 rounded-md">
                    <h2 className="font-bold text-lg text-left text-gray-100 mb-3">Add New Product</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-6 justify-center items-center">
                        <div className="flex flex-col relative">
                            <div className="flex justify-between items-center space-x-2">
                                <label className="text-md text-gray-100">Title: </label>
                                <input
                                    type="text"
                                    name="title"
                                    className="rounded-md py-1 border-0 focus:border-0 focus:outline-0 w-11/12"
                                    {...formik.getFieldProps('title')}
                                />
                            </div>
                            {formik.errors.title && formik.touched.title &&
                                <p className="absolute top-8 text-red-500 text-sm">{formik.errors.title}</p>}
                        </div>

                        <div className="flex flex-col relative">
                            <div className="flex justify-between items-center space-x-2">
                                <label className="text-md text-gray-100">Quantity: </label>
                                <input
                                    type="number"
                                    name="quantity"
                                    className="rounded-md py-1 border-0 focus:border-0 focus:outline-0 w-11/12"
                                    {...formik.getFieldProps('quantity')}
                                />
                            </div>
                            {formik.errors.quantity && formik.touched.quantity &&
                                <p className="absolute top-8 text-red-500 text-sm">{formik.errors.quantity}</p>}
                        </div>

                        <div className="flex flex-col relative">
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
                            {formik.errors.categoryId && formik.touched.categoryId &&
                                <p className="absolute top-8 text-red-500 text-sm">{formik.errors.categoryId}</p>}
                        </div>

                        <button
                            className="bg-green-200 py-2 mt-2 font-bold rounded-md border border-green-200 text-green-600 sx:col-start-2 sx:col-end-3 disabled:text-gray-500 disabled:bg-gray-300 disabled:border-0"
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