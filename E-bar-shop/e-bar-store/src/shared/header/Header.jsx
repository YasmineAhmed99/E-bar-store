import React from "react";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";


function Header() {

   const navigate = useNavigate();
  return (
    <header className="bg-white shadow-md py-4 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition "
        onClick={()=>{
         navigate('/')
        }}>
          <ShoppingBagIcon style={{ fontSize: 30 }} />
          <span className="text-lg font-semibold">HomePage</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition"
        onClick={()=>{
         navigate('/cart')
        }}>
          <ShoppingCartIcon style={{ fontSize: 30 }} />
          <span className="text-lg font-semibold">Cart</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
