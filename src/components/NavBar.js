const NavBar = ({products}) => {
    
    return ( 
        <nav className="text-center bg-indigo-500 py-3 flex justify-center items-center">
            <h1 className="text-2xl font-bold text-white">Inventory App</h1>
            <span className="ml-3 w-6 h-6 bg-indigo-100 rounded-full text-indigo-500 font-bold">{products.length}</span>
        </nav>
     );
}
 
export default NavBar;