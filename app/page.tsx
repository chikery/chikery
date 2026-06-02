import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Career from "./components/Career";
import Awards from "./components/Awards";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative z-10">
      <Nav />
      <Hero />
      <About />
      <Career />
      <Awards />
      <Skills />
      <Footer />
    </main>
  );
}
