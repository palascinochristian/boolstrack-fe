import { BrowserRouter, Route, Routes } from "react-router";
// LAYOUT
import DefaultLayout from "./layouts/DefaultLayout";

// PAGES
import HomePage from "./pages/HomePage";
import ArtistPage from "./pages/ArtistPage";
import Gallery from "./pages/Gallery";
import SongPage from "./pages/SongPage";
import AlbumPage from "./pages/AlbumPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index path="/" element={<HomePage />} />
            <Route index path="/gallery" element={<Gallery />} />
            <Route index path="/artist/:id" element={<ArtistPage />} />
            <Route index path="/album/:id" element={<AlbumPage />} />
            <Route index path="/song/:id" element={<SongPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
