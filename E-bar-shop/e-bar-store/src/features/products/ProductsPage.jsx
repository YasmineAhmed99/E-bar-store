import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/features/products/productsSlice";
import CircularIndeterminate from "@/components/Material-UI/CircularIndeterminate";
import ProductsCard from "@/components/Material-UI/ProductsCard";
import { updateCart} from "@/api/apis";

function ProductsPage() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.productsData);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <CircularIndeterminate />;
  if (error) return <div className="text-red-500">Error loading products</div>;

  return (
   <div className="p-11 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {products.map(product => (
        <ProductsCard key={product.id} product={product} updateCart={updateCart} />
      ))}
    </div>
  );
}

export default ProductsPage;