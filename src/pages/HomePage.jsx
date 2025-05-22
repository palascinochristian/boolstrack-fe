import Hero from "../components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HomeCarousel from "../components/HomeCarousel";

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Hero />
      <section id="intro" className="max-w-5xl mx-auto px-4 py-6 space-y-16">
        <div data-aos="fade-up" className="text-center">
          <h2 className="text-3xl font-bold text-[#F26722] mb-4">
            Organizza la tua musica
          </h2>
          <p className="text-lg text-white/80">
            Boolstrack è la piattaforma dove puoi tenere traccia dei tuoi
            artisti e album preferiti aggiungendo tutte le informazioni
            necessarie.
          </p>
        </div>
        <div data-aos="fade-up" className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1e2a38] p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#F26722] mb-2">
              Crea e gestisci album
            </h3>
            <p>
              Carica le copertine, inserisci titoli, date e generi per ogni tuo
              album preferito.
            </p>
          </div>
          <div className="bg-[#1e2a38] p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#F26722] mb-2">
              Segui gli artisti
            </h3>
            <p>
              Aggiungi biografie, foto e discografie complete dei tuoi artisti
              del cuore.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 py-1 space-y-16">
        <div data-aos="fade-up">
          <HomeCarousel />
        </div>
      </section>
    </>
  );
}
