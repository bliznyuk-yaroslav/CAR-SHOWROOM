import { Toaster } from "react-hot-toast";
import Header from "../Header/Header";
export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
