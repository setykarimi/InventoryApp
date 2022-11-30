import { useState } from "react";

const Filter = ({
    searchValue,
    sort,
    onSort,
    onSearch,
    categories,
    selectedCategory,
    onSelectCategory }) => {

    return (
        <section className="filter-section mb-6 bg-indigo-700 p-5 rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center">
                <div className="flex justify-between items-center space-x-2">
                    <label className="text-md text-gray-100">Search</label>
                    <input
                        type="search"
                        value={searchValue}
                        onChange={onSearch}
                        className="rounded-md py-1 border-0 focus:border-0 focus:outline-0 w-11/12"
                    />
                </div>

                <div className="flex justify-between items-center space-x-2">
                    <label className="text-md text-gray-100">Sort: </label>
                    <select
                        defaultValue={sort}
                        onChange={onSort}
                        className="rounded-md py-1 border-0 focus:border-0 focus:outline-0 w-11/12"
                    >
                        <option value="latest">Latest</option>
                        <option value="earliest">Earliest</option>
                    </select>
                </div>

                <div className="flex justify-between items-center space-x-2">
                    <label className="text-md text-gray-100">Categori: </label>
                    <select
                        defaultValue={selectedCategory}
                        onChange={onSelectCategory}
                        className="rounded-md py-1 border-0 focus:border-0 focus:outline-0 w-11/12"
                    >
                        <option defaultValue="">All</option>

                        {categories.map((category) => {
                            return (<option key={category.id} value={category.id}>{category.title}</option>)
                        })}

                    </select>
                </div>
            </div>
        </section>
    );
}

export default Filter;