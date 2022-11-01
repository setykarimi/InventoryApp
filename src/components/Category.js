import { useState } from "react";

const CategoryForm = ({ setCategories }) => {
    const [isShow, setIsShow] = useState(false);
    const [categoryFormData, setCategoryFormData] = useState({
        title: "",
        description: ""
    });

    const changeInputHandler = ({ target }) => {
        setCategoryFormData({ ...categoryFormData, [target.name]: target.value })
    };

    const addNewCategoryHandler = (e) => {
        e.preventDefault();
        const newCategory = { ...categoryFormData, createdAt: new Date().toISOString(), id: new Date().getTime() };
        // setCategories([...categories,  newCategory])
        setCategories(prevState => [...prevState, newCategory]);
        setCategoryFormData({ title: "", description: "" })
    }

    return (
        <section className="category-section">
            <div className={`mb-6 bg-indigo-500 p-5 rounded-md ${isShow ? "" : "hidden"}`}>
                <h2 className="font-bold text-lg text-left text-gray-100 mb-3">Add New Category</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center items-center">
                    <div className="flex justify-between items-center space-x-2">
                        <label className="text-md text-gray-100">Title: </label>
                        <input
                            type="text"
                            name="title"
                            value={categoryFormData.title}
                            onChange={changeInputHandler}
                            className="rounded-md py-1 border-0 focus:border-0 focus:outline-0 w-60"
                        />
                    </div>
                    <div className="flex lg:col-span-2 justify-between items-center space-x-2">
                        <label className="text-md text-gray-100">Description: </label>
                        <textarea
                            name="description"
                            value={categoryFormData.description}
                            onChange={changeInputHandler}
                            className="rounded-md py-1 border-0 focus:border-0 focus:outline-0 w-full"
                        />
                    </div>
                    <button
                        className="border border-indigo-200 py-2 font-bold rounded-md text-indigo-200 hover:bg-indigo-200 hover:text-indigo-600 transition ease-in lg:col-start-1 lg:col-end-2"
                        onClick={() => setIsShow(false)}>
                        Cancel
                    </button>
                    <button
                        className="bg-indigo-200 py-2 font-bold rounded-md border border-indigo-200 text-indigo-600 lg:col-start-3 lg:col-end-4"
                        onClick={addNewCategoryHandler}>
                        Add Category
                    </button>
                </div>

            </div>

            <button
                onClick={() => setIsShow(prevState => !prevState)}
                className={`w-full text-left ${isShow ? "hidden" : ""}`}>Add new Category!</button>
        </section>
    );
}

export default CategoryForm;