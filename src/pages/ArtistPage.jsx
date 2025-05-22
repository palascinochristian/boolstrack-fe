import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "../api/axios";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ArtistPage() {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchArtist = async () => {
      try {
        const res = await axios.get(`/artists/${id}`);
        setArtist(res.data);
      } catch (err) {
        console.error("Errore caricamento artista:", err);
      }
    };

    fetchArtist();
  }, [id]);

  if (!artist) return <div className="text-center py-20">Caricamento...</div>;

  const bgUrl = `${import.meta.env.VITE_STORAGE_URL}/${artist.background_img}`;
  const profileUrl = `${import.meta.env.VITE_STORAGE_URL}/${
    artist.profile_img
  }`;

  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row text-white overflow-hidden">
      {/* Sfondo */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-30 z-0"
        style={{ backgroundImage: `url(${bgUrl})` }}
      ></div>

      {/* Contenuto principale */}
      <main className="relative z-10 flex-1 px-6 sm:px-10 md:px-16 py-16">
        {/* Intestazione artista */}
        <div
          data-aos="fade-down"
          className="flex items-center gap-6 flex-wrap mb-12"
        >
          <img
            src={profileUrl}
            alt={artist.name}
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-[#F26722]"
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#F26722] leading-tight">
            {artist.name}
          </h1>
        </div>

        {/* Biografia */}
        <p
          data-aos="fade-up"
          className="text-white/90 leading-relaxed max-w-3xl text-base sm:text-lg"
        >
          {artist.bio}
        </p>
      </main>

      {/* Sidebar con gli album */}
      <aside className="relative z-10 w-full lg:w-56 bg-[#111]/70 backdrop-blur-md py-8 px-6 lg:px-4 lg:py-10 overflow-y-auto">
        <h2 className="text-center text-sm sm:text-base text-white/70 mb-4">
          ALBUM
        </h2>

        {artist.albums.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {artist.albums.map((album) => (
              <Link
                to={`/album/${album.id}`}
                key={album.id}
                data-aos="fade-up"
                className="group"
              >
                <img
                  src={`${import.meta.env.VITE_STORAGE_URL}/${album.cover}`}
                  alt={album.title}
                  className="w-full h-45 object-cover rounded-lg border-2 border-white/20 group-hover:border-[#F26722] transition"
                />
                <p className="text-xs text-center mt-1 group-hover:text-[#F26722]">
                  {album.title}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-sm text-white/60 text-center italic mt-4">
            Nessun album disponibile.
          </p>
        )}
      </aside>
    </div>
  );
}
