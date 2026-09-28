import { Outlet } from "react-router";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

function StoreLayout() {
  return (
    <div className="store-layout">
      <Header />
      <main className="min-h-[calc(100vh-150px)] flex items-center justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default StoreLayout;
