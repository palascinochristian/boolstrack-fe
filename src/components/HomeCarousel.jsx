import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import { LuMousePointerClick } from "react-icons/lu";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeCarousel() {
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        const [albumsResponse, artistsResponse] = await Promise.all([
          axios.get("/albums"),
          axios.get("/artists"),
        ]);

        //Salvo solamente artisti e album che hanno la cover/foto profilo
        const albumCover = albumsResponse.data.filter((album) => album.cover);
        const artistImg = artistsResponse.data.filter(
          (artist) => artist.profile_img
        );

        // Prendo i primi 6
        setAlbums(albumCover.slice(0, 6));
        setArtists(artistImg.slice(0, 6));
      } catch (error) {
        console.error("Errore nel recupero dei dati:", error);
      }
    };

    loadData();
  }, []);

  //Costruisco il link cliccabile
  const handleClick = (type, id) => {
    navigate(`/${type}/${id}`);
  };

  // Impostazioni per il componente Slider
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="my-2 max-w-5xl mx-auto bg-[#1e2a38] py-6 rounded-2xl">
      <Link to={"/gallery"}>
        <h3 className="text-3xl font-bold text-[#F26722] mb-8 text-center">
          <span className="inline-flex items-center gap-2 justify-center">
            Scopri la nostra galleria
            <LuMousePointerClick />
          </span>
        </h3>
      </Link>

      {/* Slider artisti */}
      <Slider {...settings}>
        {artists.map((artist) => (
          <div
            key={artist.id}
            className="cursor-pointer text-center mx-1"
            onClick={() => handleClick("artist", artist.id)}
          >
            <img
              src={`${import.meta.env.VITE_STORAGE_URL}/${artist.profile_img}`}
              alt={artist.name}
              className="rounded-full w-40 h-40 object-cover mx-auto"
            />
            <h3 className="text-white mt-2 truncate">{artist.name}</h3>
          </div>
        ))}
      </Slider>
      {/* Slider Album */}
      <Slider {...settings}>
        {albums.map((album) => (
          <div
            key={album.id}
            className="cursor-pointer text-center mx-1"
            onClick={() => handleClick("album", album.id)}
          >
            <img
              src={`${import.meta.env.VITE_STORAGE_URL}/${album.cover}`}
              alt={album.title}
              className="rounded-md w-40 h-40 object-cover mx-auto"
            />
            <h3 className="text-white mt-2 truncate">{album.title}</h3>
            <p className="text-gray-400 truncate">
              {album.artist?.name || "Artista sconosciuto"}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
