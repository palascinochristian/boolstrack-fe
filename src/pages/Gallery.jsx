// src/pages/Gallery.jsx
import { useEffect, useState } from "react";
import axios from "../api/axios";
import ArtistCard from "../components/ArtistCard";
import AlbumCard from "../components/AlbumCard";

export default function Gallery() {
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);

  //useEffect per lo scroll automatico
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios.get("/artists").then((res) => setArtists(res.data));
    axios.get("/albums").then((res) => setAlbums(res.data));
  }, []);

  return (
    <section className="min-h-screen text-white py-10 px-4 md:px-12">
      {/* Sezione Artisti */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-[#F26722] mb-10">
        Tutti gli Artisti
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>

      {/* Sezione Album */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-[#F26722] mb-10">
        Tutti gli Album
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </section>
  );
}
