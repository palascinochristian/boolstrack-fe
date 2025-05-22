import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "../api/axios";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AlbumPage() {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const albumRes = await axios.get(`/albums/${id}`);
        const songsRes = await axios.get(`/albums/${id}/songs`);
        setAlbum(albumRes.data);
        setSongs(songsRes.data);
      } catch (err) {
        setError("Errore nel caricamento dell'album o delle canzoni");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading)
    return <div className="text-center py-20 text-white">Caricamento...</div>;
  if (error)
    return (
      <div className="text-center py-20 text-red-600 font-semibold">
        {error}
      </div>
    );
  if (!album)
    return (
      <div className="text-center py-20 text-white font-semibold">
        Album non trovato.
      </div>
    );

  const coverUrl = `${import.meta.env.VITE_STORAGE_URL}/${album.cover}`;
  const artist = album.artist;

  return (
    <div
      className="relative min-h-screen flex flex-col lg:flex-row text-white overflow-hidden"
      style={
        artist && artist.background_img
          ? {
              backgroundImage: `url(${import.meta.env.VITE_STORAGE_URL}/${
                artist.background_img
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }
          : {}
      }
    >
      {/* overlay scuro */}
      {artist && artist.background_img && (
        <div className="absolute inset-0 bg-black/70 -z-10"></div>
      )}

      <main className="relative z-10 flex-1 px-6 sm:px-10 md:px-16 py-16 flex flex-col">
        <div
          data-aos="fade-down"
          className="mb-12 max-w-4xl flex items-center gap-8"
        >
          <img
            src={coverUrl}
            alt={album.title}
            className="w-36 h-36 sm:w-48 sm:h-48 rounded-lg object-cover border-4 border-[#F26722]"
          />
          <h1 className="text-6xl sm:text-8xl font-extrabold text-[#F26722] leading-tight drop-shadow-lg select-none">
            {album.title}
          </h1>
        </div>
      </main>

      <aside className="relative z-10 w-full lg:w-56 bg-[#111]/70 backdrop-blur-md py-8 px-6 lg:px-4 lg:py-10 overflow-y-auto">
        <h2 className="text-center text-sm sm:text-base text-white/70 mb-4">
          CANZONI
        </h2>

        {songs.length > 0 ? (
          <div className="flex flex-col gap-3">
            {songs.map((song) => (
              <Link
                key={song.id}
                to={`/song/${song.id}`}
                data-aos="fade-up"
                className="group px-3 py-2 rounded-md border border-white/20 hover:border-[#F26722] transition flex justify-between items-center"
              >
                <span className="font-medium group-hover:text-[#F26722]">
                  {song.track_number}. {song.title}
                </span>
                <span className="text-xs text-white/60">{song.duration}</span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-sm text-white/60 text-center italic mt-4">
            Nessuna canzone disponibile.
          </p>
        )}
      </aside>
    </div>
  );
}
