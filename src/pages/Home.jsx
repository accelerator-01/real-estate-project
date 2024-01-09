import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="flex flex-wrap gap-3 justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
