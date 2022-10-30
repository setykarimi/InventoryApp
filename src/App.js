import { useState } from 'react';
import './App.css';
import Category from './components/Category';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import ProductsForm from './components/ProductsForm';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  


  return (
    <div className='App bg-slate-500 min-h-screen'>
      <NavBar />
      <div className='container m-w-screen-sx m-auto '>
        <Category setCategories={setCategories}/>
        <ProductsForm categories={categories} setProducts={setProducts}/>
        <ProductList products={products} categories={categories} setProducts={setProducts}/>
      </div>
    </div>
  );
}

export default App;
