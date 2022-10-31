import { useEffect, useState } from 'react';
import './App.css';
import Category from './components/Category';
import Filter from './components/Filter';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import ProductsForm from './components/ProductsForm';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sort, setSort] = useState("latest");

  useEffect(() => {
    let result = products;
    result = filterSearchTitle(result);
    result = sortDate(result);
    setFilteredProducts(result)
  }, [products, sort, searchValue])

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const searchHandler = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };

  const filterSearchTitle = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(searchValue));
  };

  const sortDate = (array) => {
    let sorttedProducts = [...array];
    return sorttedProducts.sort((a, b) => {
      if (sort === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    })
  };

  return (
    <div className='App bg-slate-500 min-h-screen'>
      <NavBar />
      <div className='container m-w-screen-sx m-auto '>
        <Category setCategories={setCategories} />
        <ProductsForm categories={categories} setProducts={setProducts} />
        <Filter
          searchValue={searchValue}
          sort={sort}
          onSort={sortHandler}
          onSearch={searchHandler}
        />

        <ProductList
          products={filteredProducts}
          categories={categories}
          setProducts={setProducts}
        />
      </div>
    </div>
  );
}

export default App;
