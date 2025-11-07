import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-100 to-green-200 text-gray-800 w-full">
      <Navbar />
    
      {/* Page Content */}
      <main className="flex-1 w-full">
        <Outlet />  {/* React Router will render the page here */}
      </main>
      {/* Footer always visible */}
      <Footer />
   
    </div>
  );
}
