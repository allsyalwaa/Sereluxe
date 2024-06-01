import Footer from "../components/section/Footer";
import Navbar from "../components/section/Navbar";

// eslint-disable-next-line react/prop-types
export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}
