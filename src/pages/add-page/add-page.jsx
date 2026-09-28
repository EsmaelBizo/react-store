import SectionHead from "../../components/section-head/section-head";
import ManageForm from "../../components/manage-form/manage-form";
import Container from "../../components/container/container";

function AddPage() {

  const product = {
    title: "",
    price: 0,
    description: "",
    category: "",
  };

  return (
    <section className="w-full py-20 bg-surface border-block border-border" id="manage">
      <Container>
        <SectionHead
          eyebrow="Store Management"
          title={"Add Product"}
          description={"Add a new product."}
        />

        <ManageForm id={0} product={product} />
      </Container>
    </section>
  );
}

export default AddPage