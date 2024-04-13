import Contacts from "@/components/Contacts";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import About from "@/components/Sections/About";
import Footer from "@/components/Sections/Footer";
import Jobs from "@/components/Sections/Jobs";
import Projects from "@/components/Sections/Projects";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <Intro></Intro>
          <Navbar></Navbar>
        </div>
        <Contacts></Contacts>
      </header>
      <main className="pt-24 lg:w-1/2 lg:py-24">
        <About></About>
        <Jobs></Jobs>
        <Projects></Projects>
        <Footer></Footer>
      </main>
    </div>
  );
}
