import { useEffect, useState } from "react";

const useGetProducts = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("https://dummyjson.com/products?limit=5");
      const data = await response.json();
      setProducts(data.products);
      setIsLoading(false);
    }
    getProducts();
  }, []);

  return { products, setProducts, isLoading };
};

export default useGetProducts;