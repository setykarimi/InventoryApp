import { useState } from "react";

const CategoryForm = ({setCategories}) => {
    const [isShow, setIsShow] = useState(false);
    const [categoryFormData, setCategoryFormData] = useState({
        title: "",
        description: ""
    });
   

    const changeInputHandler = ({target}) => {
        setCategoryFormData({...categoryFormData, [target.name] : target.value})
    };

    const addNewCategoryHandler = (e) => {
        e.preventDefault();
        const newCategory = {... categoryFormData, createdAt: new Date().toISOString(), id: new Date().getTime()};
        // setCategories([...categories,  newCategory])
        setCategories(prevState => [...prevState,  newCategory]);
        setCategoryFormData({title: "", description: ""})
    }

    return (
        <div className="">
            <div className={`mb-6 ${isShow ? "" : "hidden"}`}>
                <h2>Add New Category</h2>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={categoryFormData.title}
                        onChange={changeInputHandler}
                    />
                </div>

                <div>
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={categoryFormData.description}
                        onChange={changeInputHandler}
                    />
                </div>

                <div className="flex gap-5 justify-center">
                    <button onClick={() => setIsShow(false)}>Cancel</button>
                    <button onClick={addNewCategoryHandler}>Add Category</button>
                </div>
            </div>

            <button
                onClick={() => setIsShow(prevState => !prevState)}
                className={`${isShow ? "hidden" : ""}`}>Add new Category</button>


        </div>
    );
}

export default CategoryForm;