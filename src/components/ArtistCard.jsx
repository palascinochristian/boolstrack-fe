import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ArtistCard({ artist }) {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="bg-[#1e2a38] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/artist/${artist.id}`)}
    >
      <img
        src={`${import.meta.env.VITE_STORAGE_URL}/${artist.background_img}`}
        alt={artist.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <img
          src={`${import.meta.env.VITE_STORAGE_URL}/${artist.profile_img}`}
          alt={artist.name}
          className="w-20 h-20 rounded-full object-cover -mt-12 border-4 border-[#0B121D]"
        />
        <h3 className="text-xl font-bold mt-2 text-[#F26722]">{artist.name}</h3>
        <p className="text-white/80 text-sm mt-1 line-clamp-3">{artist.bio}</p>
      </div>
    </div>
  );
}
