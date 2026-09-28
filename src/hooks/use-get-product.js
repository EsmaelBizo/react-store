import { useEffect, useState } from "react";

const emptyProduct = {
  title: "",
  price: 0,
  description: "",
  category: "",
};

const useGetProduct = (id) => {
  const [product, setProduct] = useState(emptyProduct);

  useEffect(() => {
    async function getProduct() {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    }
    getProduct();
  }, [id]);

  return product;
};

export default useGetProduct;
