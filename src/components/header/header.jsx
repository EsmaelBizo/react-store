import { Link, NavLink } from "react-router";
import Container from "../container/container";

function Header() {
  return (
    <header className="sticky top-0 z-100 bg-[rgba(246,245,241,0.9)] backdrop-blur-lg border-b border-[rgba(228,226,220,0.9)]">
      <Container className="flex min-h-20 flex-wrap items-center justify-between gap-x-6 gap-y-3 py-3 sm:flex-nowrap sm:py-0">
        <Link
          to="/"
          className="shrink-0 text-2xl font-extrabold tracking-tight"
        >
          BIZO<span className="text-primary">STORE</span>
        </Link>
        <nav className="order-3 flex w-full justify-center gap-5 text-sm font-bold text-muted sm:order-none sm:w-auto sm:gap-7">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-text underline transition-colors duration-200"
                : "hover:text-text transition-colors duration-200"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-text underline transition-colors duration-200"
                : "hover:text-text transition-colors duration-200"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-text underline transition-colors duration-200"
                : "hover:text-text transition-colors duration-200"
            }
          >
            About
          </NavLink>
        </nav>

        <Link
          to="/add"
          className="shrink-0 rounded-full bg-dark px-3 py-2 text-sm font-bold text-white transition-colors duration-200 hover:bg-dark-soft sm:px-4 sm:py-3"
        >
          + Add Product
        </Link>
      </Container>
    </header>
  );
}

export default Header;
