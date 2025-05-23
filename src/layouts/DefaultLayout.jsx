import { Outlet } from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  return (
    <div className="min-h-screen flex flex-col text-white font-sans bg-[url('/images/bg.png')] bg-no-repeat bg-center bg-cover bg-fixed">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
