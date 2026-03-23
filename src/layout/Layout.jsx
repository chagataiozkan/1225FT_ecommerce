import Header from "./Header";
import Footer from "./Footer";
import PageContent from "./PageContent";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
}
