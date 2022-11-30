import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

const CategoryForm = ({ setCategories }) => {
    const [isShow, setIsShow] = useState(false);
    
    const addNewCategoryHandler = (values) => {
        const newCategory = { ...values, createdAt: new Date().toISOString(), id: new Date().getTime() };
        setCategories(prevState => [...prevState, newCategory]);
     
        values.title = "";
        values.description = "";
    }

    let initialValues = {
        title: "",
        description: ""
    }

    const validationSchema = Yup.object({
        title: Yup.string().required("Title is required"),
        description: Yup.string().required("Description is required")
    })

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: addNewCategoryHandler,
        validationSchema: validationSchema,
        enableReinitialize: true,
        validateOnMount: true
    })

    return (
        <section className="category-section">
            <div className={`mb-6 bg-indigo-500 p-5 rounded-md ${isShow ? "" : "hidden"}`}>
                <h2 className="font-bold text-lg text-left text-gray-100 mb-3">Add New Category</h2>

                <form onSubmit={formik.handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-3  md:gap-5 gap-6  justify-center items-center">
                        <div className="flex flex-col relative">
                            <div className="flex justify-between items-center space-x-2">
                                <label className="text-md text-gray-100">Title: </label>
                                <input
                                    type="text"
                                    name="title"
                                    className="rounded-md py-1 border-0 focus:border-0 focus:outline-0 w-full"
                                    {...formik.getFieldProps('title')}
                                />
                            </div>
                            {formik.errors.title && formik.touched.title &&
                                <p className="absolute top-8 text-red-400 text-sm">{formik.errors.title}</p>}
                        </div>

                        <div className="flex flex-col relative md:col-span-2">
                            <div className="flex  justify-between items-center space-x-2">
                                <label className="text-md text-gray-100">Description: </label>
                                <textarea
                                    name="description"
                                    className="rounded-md py-1 border-0 focus:border-0 focus:outline-0 w-full"
                                    {...formik.getFieldProps('description')}
                                />
                            </div>
                            {formik.errors.description && formik.touched.description &&
                                <p className="absolute top-14 text-red-400 text-sm">{formik.errors.description}</p>}
                        </div>

                        <button
                            className="border border-indigo-200 py-2 font-bold rounded-md text-indigo-200 hover:bg-indigo-200 hover:text-indigo-600 transition ease-in md:col-start-1 md:col-end-2"
                            onClick={() => setIsShow(false)} type="button">
                            Cancel
                        </button>
                        <button
                            className="bg-green-200 py-2 font-bold rounded-md border border-green-200 text-green-600 md:col-start-3 md:col-end-4 disabled:text-gray-500 disabled:bg-gray-300 disabled:border-0"
                            type="submit" disabled={!formik.isValid}>
                            Add Category
                        </button>
                    </div>
                </form>
            </div>


            <button
                onClick={() => setIsShow(prevState => !prevState)}
                className={`w-full text-left ${isShow ? "hidden" : ""}`}>Add new Category!</button>
        </section>
    );
}

export default CategoryForm;