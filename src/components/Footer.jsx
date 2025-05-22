export default function Footer() {
  return (
    <footer className="bg-[#0B121D] text-white text-sm border-t border-[#1e2a38]">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Informazioni */}
        <div>
          <h4 className="text-[#F26722] font-semibold mb-3">Boolstrack</h4>
          <ul className="space-y-2 text-white/80">
            <li>
              <a href="#">Chi siamo</a>
            </li>
            <li>
              <a href="#">Lavora con noi</a>
            </li>
            <li>
              <a href="#">Assistenza</a>
            </li>
            <li>
              <a href="#">Contatti</a>
            </li>
          </ul>
        </div>

        {/* Legale */}
        <div>
          <h4 className="text-[#F26722] font-semibold mb-3">Legale</h4>
          <ul className="space-y-2 text-white/80">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Termini e Condizioni</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-[#F26722] font-semibold mb-3">Seguici</h4>
          <ul className="space-y-2 text-white/80">
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">YouTube</a>
            </li>
          </ul>
        </div>

        {/* Extra */}
        <div>
          <h4 className="text-[#F26722] font-semibold mb-3">Altro</h4>
          <ul className="space-y-2 text-white/80">
            <li>
              <a href="#">Partner</a>
            </li>
            <li>
              <a href="#">Diventa un artista</a>
            </li>
            <li>
              <a href="#">Sponsor</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer base */}
      <div className="text-center py-6 border-t border-[#1e2a38] px-4">
        <p className="text-white/60 mb-1">
          © {new Date().getFullYear()} Boolstrack. Tutti i diritti riservati.
        </p>
        <p className="text-white/50 text-xs">
          Made with <span className="text-red-500">❤️</span> by Christian
          Palascino
        </p>
      </div>
    </footer>
  );
}
