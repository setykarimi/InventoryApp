import { useState } from "react";

const Filter = ({ searchValue, sort, onSort, onSearch }) => {

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
        </div>
    );
}

export default Filter;