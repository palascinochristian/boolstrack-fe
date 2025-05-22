import { useNavigate } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function AlbumCard({ album }) {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <div
      data-aos="fade-up"
      onClick={() => navigate(`/album/${album.id}`)}
      className="cursor-pointer group overflow-hidden rounded-2xl bg-[#1E2A38] hover:bg-[#243647] transition-all duration-300 shadow-lg"
    >
      <div className="w-full h-52 overflow-hidden">
        <img
          src={`${import.meta.env.VITE_STORAGE_URL}/${album.cover}`}
          alt={album.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#F26722]">{album.title}</h3>
        <p className="text-sm text-white/80 mt-1">{album.artist?.name}</p>
      </div>
    </div>
  );
}
