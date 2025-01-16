import Hero from "./components/Hero";
import About from "./components/About";
import Models from "./components/Models";
import Contac from "./components/Contac";
//this is the home page it contains the hero and the footer and the hero image
export default function Home() {
  return (
    <div className="font-montserrat-alternates">
      <main className="flex flex-col">
        <Hero />
        <About />
        <Models />
        <Contac />
      </main>
    </div>
  );
}
