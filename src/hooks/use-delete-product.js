const useDeleteProduct = ({
  products,
  setProducts,
  setOperationInProgress,
  setIsLoading,
}) => {
  const handleDelete = async (productId) => {
    setOperationInProgress("Deleting...");
    setIsLoading(true);

    await fetch(`https://dummyjson.com/products/${productId}`, {
      method: "DELETE",
    });

    setProducts(products.filter((product) => product.id !== productId));
    setIsLoading(false);
  };

  return { handleDelete };
};

export default useDeleteProduct;
