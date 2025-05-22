import { Outlet } from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  return (
    <div className="text-white font-sans bg-[url('/images/bg.png')] bg-no-repeat bg-center bg-cover bg-fixed text-white font-sans">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
