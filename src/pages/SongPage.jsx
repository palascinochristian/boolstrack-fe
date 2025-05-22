import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SongPage() {
  const { id } = useParams();
  const [song, setSong] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchSong = async () => {
      try {
        const res = await axios.get(`/songs/${id}`);
        setSong(res.data);
      } catch (err) {
        console.error("Errore caricamento canzone:", err);
      }
    };

    fetchSong();
  }, [id]);

  if (!song)
    return <div className="text-center py-20 text-white">Caricamento...</div>;

  const coverUrl = `${import.meta.env.VITE_STORAGE_URL}/${song.album.cover}`;
  const artistName = song.album.artist.name;

  let embedUrl = null;
  if (song.audio_sample_url) {
    const trackId = song.audio_sample_url.match(/track\/([a-zA-Z0-9]+)/)?.[1];
    if (trackId) {
      embedUrl = `https://open.spotify.com/embed/track/${trackId}`;
    }
  }

  return (
    <div className="min-h-screen  text-white px-6 py-10 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        <div
          className="lg:w-1/3 flex flex-col items-center lg:items-start"
          data-aos="fade-right"
        >
          <img
            src={coverUrl}
            alt={song.album.title}
            className="w-64 h-64 object-cover rounded-xl border-4 border-[#F26722] shadow-lg"
          />
          <h1 className="text-3xl sm:text-4xl font-bold text-[#F26722] mt-6 text-center lg:text-center">
            {song.title}
          </h1>
          <h2 className="text-xl text-white/80 mt-2 text-center lg:text-center">
            {artistName}
          </h2>

          {embedUrl ? (
            <div data-aos="zoom-in" className="w-full max-w-xl mt-12">
              <iframe
                style={{ borderRadius: "12px" }}
                src={embedUrl}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          ) : null}
        </div>

        <div
          className="lg:w-2/3 bg-white/5 backdrop-blur-md p-6 sm:p-10 rounded-xl shadow-lg max-h-[80vh] overflow-y-auto scrollbar-hide"
          data-aos="fade-left"
        >
          <pre className="whitespace-pre-wrap text-base sm:text-lg leading-loose font-medium text-white/90 scrollbar-hide">
            {song.lyrics}
          </pre>
        </div>
      </div>
    </div>
  );
}
