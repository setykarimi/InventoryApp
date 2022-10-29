import { useState } from "react";

const Category = () => {
    const [isShow, setIsShow] = useState(false);
   

    return (
        <div className="">
            <div className={`mb-6 ${isShow ? "" : "hidden"}`}>
                <h2>Add New Category</h2>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" />
                </div>

                <div>
                    <label>Description</label>
                    <textarea name="description" />
                </div>

                <div className="flex gap-5 justify-center">
                    <button onClick={()=> setIsShow(false) }>Cancel</button>
                    <button>Add Category</button>
                </div>
            </div>

            <button 
            onClick={() => setIsShow(prevState => !prevState)}
            className={`${isShow ? "hidden" : ""}`}>Add new Category</button>


        </div>
    );
}

export default Category;