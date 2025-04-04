import Header from "@/components/header";
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
        <Footer/>
      </main>
      {/* <div className="p-10 text-center bg-gray-800 mt-10">
        Made with HireMitra
      </div> */}
    </div>
  );
};

export default AppLayout;
