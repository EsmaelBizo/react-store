import { useNavigate } from "react-router";
import defaultImg from "../assets/default-product-image.jpg";

const useAddProduct = (
  product
) => {
  const navigate = useNavigate();

  async function handleAddProduct(event) {
    event.preventDefault();
    
    if (!product.title || !product.description || product.price <= 0) {
      alert("Please fill in all fields and ensure price is greater than 0.");
      return;
    }
    
    try {
      await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: product.title,
          description: product.description,
          price: product.price,
          images: [defaultImg],
        }),
      });

    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      navigate("/products");
    }
  }

  return handleAddProduct;
};


export default useAddProduct;