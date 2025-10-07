// src/components/layout/Layout.jsx
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, onOpenSearch }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header onOpenSearch={onOpenSearch} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
