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
        <div>
            <div>
                <label>Search</label>
                <input
                    type="search"
                    value={searchValue}
                    onChange={onSearch}
                />
            </div>

            <div>
                <label>sort</label>
                <select
                    value={sort}
                    onChange={onSort}
                >
                    <option value="latest">Latest</option>
                    <option value="earliest">Earliest</option>
                </select>
            </div>

            <div>
                <label>sort categori</label>
                <select
                    value={selectedCategory}
                    onChange={onSelectCategory}
                >
                <option selected value="">All</option>

                    {categories.map((category) => {
                        return (<option key={category.id} value={category.id}>{category.title}</option>)
                    })}

                </select>
            </div>
        </div>
    );
}

export default Filter;