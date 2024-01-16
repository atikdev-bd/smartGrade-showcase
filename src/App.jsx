import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import Student from "./components/student-information";

function App() {
  return (
    <>
      <div className="bg-[#172227] font-[Inter] text-white">
        <Navbar />
        <HeroSection />
        <Student />
        <Footer />
      </div>
    </>
  );
}

export default App;
