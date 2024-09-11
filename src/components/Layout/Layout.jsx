import { Toaster } from "react-hot-toast";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
