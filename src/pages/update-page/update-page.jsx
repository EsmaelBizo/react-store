import { useParams } from "react-router";
import SectionHead from "../../components/section-head/section-head";
import ManageForm from "../../components/manage-form/manage-form";
import useGetProduct from "../../hooks/use-get-product";
import Container from "../../components/container/container";

function UpdatePage() {
  const { id } = useParams();

  const product = useGetProduct(id);
  console.log("product.message", product.message);

  return (
    <section
      className="w-full py-20 bg-surface border-block border-border"
      id="manage"
    >
      {!product.message?.includes("not found") && (
        <Container>
          <SectionHead
            eyebrow="Store Management"
            title={"Update Product"}
            description={"Update the product."}
          />

          <ManageForm key={product.id ?? "loading"} id={id} product={product} />
        </Container>
      )}
      {product.message?.includes("not found") && (
        <Container>
          <div className="text-center text-muted">Product not found.</div>
        </Container>
      )}
    </section>
  );
}

export default UpdatePage;
