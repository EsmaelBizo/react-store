import { useNavigate } from "react-router";

const useUpdateProduct = (
  product,
  productId
) => {
  const navigate = useNavigate();

  async function handleEdit(event) {
    event.preventDefault();

    console.log(product);

    if (
      !product.title ||
      !product.description ||
      product.price <= 0
    ) {
      alert("Please fill in all fields and ensure price is greater than 0.");
      return;
    }

    try {
      await fetch(
        `https://dummyjson.com/products/${productId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...product,
          }),
        },
      );

    } catch (error) {
      console.error("Error updating product:", error);
    } finally {
      navigate("/products");
    }
  }

  return handleEdit;
};

export default useUpdateProduct;
