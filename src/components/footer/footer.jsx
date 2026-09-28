import { Link } from "react-router";
import Container from "../container/container";

function Footer() {
  return (
    <footer className="py-11 bg-dark text-white">
      <Container className="grid gap-7 sm:grid-cols-[1.2fr_1fr_auto] sm:items-center">
        <div>
          <Link to="/" className="text-2xl font-extrabold tracking-tight">
            BIZO<span className="text-primary">STORE</span>
          </Link>
          <p className="text-muted">
            A simple modern storefront for CRUD operations.
          </p>
        </div>

        <div className="flex flex-wrap justify-start gap-x-5 gap-y-2 text-sm text-muted sm:justify-center">
          <Link
            to="/"
            className="text-muted hover:text-white transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-muted hover:text-white transition-colors duration-200"
          >
            Products
          </Link>
          <Link
            to="/about"
            className="text-muted hover:text-white transition-colors duration-200"
          >
            About
          </Link>
        </div>

        <span className="text-sm text-muted sm:text-right">
          © 2026 BIZOSTORE
        </span>
      </Container>
    </footer>
  );
}

export default Footer;
