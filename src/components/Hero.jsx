import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex flex-col items-center justify-center text-center p-4">
        <Logo size="w-190 h-auto" animate={true} />
        <h1 className="text-4xl md:text-6xl font-bold text-[#F26722] drop-shadow-md">
          Scopri. Organizza. Ama la musica.
        </h1>
        <p className="text-lg mt-4 text-white/90 max-w-xl">
          Boolstrack ti aiuta a gestire i tuoi artisti e album preferiti in modo
          semplice e moderno.
        </p>
      </div>
      {/* Bottone per scrollare */}
      <a
        href="#intro"
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition duration-300 animate-bounce"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-15 w-15"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>
    </section>
  );
}
