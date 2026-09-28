import { Link } from "react-router";
import StatCard from "../../components/stat-card/stat-card";
import SectionHead from "../../components/section-head/section-head";
import Container from "../../components/container/container";

function HomePage() {
  return (
    <section className="pt-13.5 pb-8.5" id="home">
      <Container className="grid items-center gap-10 md:min-h-147.5 md:grid-cols-[0.95fr_1.05fr] md:gap-14">
        <div>
          <SectionHead
            eyebrow="New Collection 2026"
            title="Simple products. Better everyday."
            description="Discover our new collection of products designed to make your daily life easier."
          />

          <div className="flex flex-wrap gap-3 mt-7">
            <Link className="btn btn--dark" to="/products">
              Shop Products
            </Link>
            <Link className="btn btn--light" to="/add">
              Manage Store
            </Link>
          </div>

          <div className="flex flex-wrap gap-9 mt-11">
            <StatCard value="30+" label="Products" />
            <StatCard value="10+" label="Categories" />
            <StatCard value="24/7" label="Available" />
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85"
            alt="Modern store"
            className="h-80 rounded-xl object-cover shadow-md sm:h-105 md:h-140"
          ></img>

          <div className="absolute bottom-5 left-4 rounded-md border border-[rgba(255,255,255,0.8)] bg-[rgba(255,255,255,0.9)] px-4 py-3 shadow-sm backdrop-blur-md sm:-left-6.5 sm:bottom-7.5 sm:px-5 sm:py-4">
            <span className="block text-muted text-[12px]">Featured</span>
            <strong className="block text-[18px]">Fresh Picks</strong>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomePage;
