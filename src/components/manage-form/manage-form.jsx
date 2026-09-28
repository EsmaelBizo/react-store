import { useState } from "react";
import useUpdateProduct from "../../hooks/use-update-product";
import useAddProduct from "../../hooks/use-add-product";
import FormInput from "../form-input/form-input";

function ManageForm({ id, product: initialProduct }) {
  const [product, setProduct] = useState(initialProduct);

  const handleEdit = useUpdateProduct(product, id);
  const handleAdd = useAddProduct(product);

  return (
    <form
      className="rounded-lg border border-border bg-bg p-4 sm:p-7"
      id="productForm"
      onSubmit={id == 0 ? handleAdd : handleEdit}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <FormInput
          id="title"
          type="text"
          placeholder="Product Title"
          required={true}
          value={product.title}
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
        />

        <FormInput
          id="price"
          type="number"
          placeholder="99.99"
          required={true}
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />

        <FormInput
          id="category"
          type="text"
          placeholder="electronics"
          required={true}
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
        />

        <FormInput
          id="description"
          type="textarea"
          placeholder="Write a short description..."
          required={true}
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />
      </div>

      <div className="flex flex-wrap gap-3 mt-5">
        <button className="btn btn--dark" id="submitButton" type="submit">
          {id == 0 ? "Add" : "Update"} Product
        </button>
        <button
          className="btn btn--light cancel"
          id="cancelButton"
          type="button"
          onClick={() => navigation.back()}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ManageForm;
