import Container from "../../components/container/container";
import SectionHead from "../../components/section-head/section-head";

function AboutPage() {
  return (
    <section className="page">
      <Container className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-center gap-12 min-h-130">
        <SectionHead
          eyebrow="About BIZOSTORE"
          title="A simple React training store."
          description="This project combines reusable components, API requests, CRUD operations, and simple React Router pages."
        />

        <div className="p-8 grid gap-3 border border-[rgba(228,226,220,0.9)] rounded-xl bg-[rgba(246,245,241,0.9)] shadow-md">
          <strong className="text-2xl font-bold">What we use</strong>

          <span className="text-muted">React</span>

          <span className="text-muted">React Router</span>

          <span className="text-muted">GET / POST / PATCH / DELETE</span>

          <span className="text-muted">Reusable ProductForm</span>
        </div>
      </Container>
    </section>
  );
}

export default AboutPage;
