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
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    let result = products;
    result = filterSearchTitle(result);
    result = sortDate(result);
    result = filteSelectedCategory(result);
    setFilteredProducts(result);

  }, [products, sort, searchValue, selectedCategory])

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const searchHandler = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };

  const selectCategoryHandler = (e) => {
    setSelectedCategory(e.target.value)
  }

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

  const filteSelectedCategory = (array) => {
    if (!selectedCategory) return array
    return array.filter(item => item.categoryId === selectedCategory)
  }

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const savedCategories = JSON.parse(localStorage.getItem('categories')) || [];
    setProducts(savedProducts);
    setCategories(savedCategories);
  }, []);

  useEffect(() => {
    if (products.length) {
      localStorage.setItem('products', JSON.stringify(products))
    }
  }, [products]);

  useEffect(() => {
    if (categories.length) {
      localStorage.setItem('categories', JSON.stringify(categories))
    }
  }, [categories]);

  return (
    <div className='App bg-indigo-100 min-h-screen font-sans text-gray-700'>
      <NavBar />
      <div className='md:w-max flex flex-col space-y-4 m-w-screen-sx m-auto p-3'>
        <Category setCategories={setCategories} />
        <ProductsForm categories={categories} setProducts={setProducts} />
        <Filter
          searchValue={searchValue}
          sort={sort}
          onSort={sortHandler}
          onSearch={searchHandler}
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={selectCategoryHandler}
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
