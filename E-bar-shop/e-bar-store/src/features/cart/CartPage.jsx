import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems, fetchCartPrices} from "./cartSlice";
import { updateCart, clearCart} from "@/api/apis";


function CartPage() {

  const dispatch = useDispatch();
  const { cart, error, loading ,subtotal, total } = useSelector((state) => state.cartData);

  useEffect(() => {
    dispatch(fetchCartItems());
    dispatch(fetchCartPrices()); 
  }, [dispatch]);

  if (error) return <div className="text-red-500">Error loading cart</div>;
  
  const handleUpdate = (bar_id, action) => {
    dispatch(updateCart({ bar_id, action })).then(() => {
      dispatch(fetchCartItems());
      dispatch(fetchCartPrices());
    });
  };

    const handleClearCart =()=>{
      dispatch(clearCart()).then(() => {
       dispatch(fetchCartItems());
       dispatch(fetchCartPrices());
      }); }


  return (
    <div className="max-w-4xl mx-auto p-4">
  {cart?.length === 0 && loading == false ? (
    <p className="text-center text-gray-500">Your cart is empty.</p>
  ) : (
    cart.map((item) => (
      <div
        key={item.id}
        className="bg-white shadow-md rounded-lg overflow-hidden mb-4"
      >
        <div className="flex flex-col sm:flex-row items-center p-4 border-b gap-4">
          <img
            src={item.bar.image}
            alt={item.bar.name.en}
            className="w-32 h-32 object-cover rounded-md"
          />
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-lg font-semibold text-gray-800">
              {item.bar.name.en}
            </h2>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-sm text-gray-600">
              Price: <span className="font-medium">{item.total}</span>
            </p>
            <p className="text-sm text-gray-800 font-bold">
             Line Total: {item.quantity * item.total}
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-2 gap-2">
          <div className="flex items-center space-x-2">
            <button className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded"
             onClick={() => handleUpdate(item.bar.id,  'DECREMENT')}> -</button>
            <span className="text-gray-800 font-medium">{item.quantity}</span>
            <button className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded"
              onClick={() => handleUpdate(item.bar.id, 'INCREMENT')}>+</button>
          </div>
          <button className="cursor-pointer text-red-500 hover:text-red-700 font-bold text-lg"
           onClick={() => handleUpdate(item.bar.id, 'DELETE')}> ×</button>
        </div>
      </div>
    ))
  )}
     <div className="flex flex-row justify-between text-left mt-4 mb-6 px-6">
    <div><p className="text-lg font-semibold">Subtotal: {subtotal}</p>
    <p className="text-xl font-bold">Total: {total}</p> </div>
    <button className="cursor-pointer bg-red-500 hover:bg-red-600 rounded text-white font-bold py-2 px-4"
    onClick={()=>{
      handleClearCart()
    }}
  >Clear cart</button>
</div>
</div>
  );
}

export default CartPage;
