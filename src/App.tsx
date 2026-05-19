import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {} from "lucide-react";
import "./App.css";
import ProductCarousel from "./carousel";

function App() {
  const [infoPlus, setInfoPlus] = useState(false);

  return (
    <>
      <div className="relative w-full">
        {/* 2. LE MÉGA-MENU ANIMÉ (Qui descend) */}
        {/* 2. LE MÉGA-MENU ANIMÉ */}
        <div
          className={`absolute left-0 right-0 z-50 w-full bg-white shadow-xl border-b border-gray-200 transition-all duration-500 ease-in-out overflow-hidden ${infoPlus ? "max-h-125 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
        >
          {/* Conteneur parent en 'relative' pour caler la croix de fermeture */}
          <div className="relative max-w-7xl mx-auto px-16 py-12">
            {/* BOUTON CROIX DE FERMETURE */}
            <button
              onClick={() => setInfoPlus(false)}
              className="border border-red-400 absolute top-6 right-6 p-2 text-gray-400 hover:text-black rounded-full hover:bg-red-100 transition-all duration-300 ease-in-out group"
              aria-label="Fermer le panneau"
            >
              {/* Utilisation de l'icône Lucide avec les classes de transition de Tailwind */}
              <X
                size={24}
                className=" text-red-500 transform transition-transform duration-100 group-hover:rotate-90"
              />
            </button>

            {/* Grille d'informations (Contenu inchangé) */}
            <div className="grid grid-cols-3 gap-16 pt-4">
              {/* Première Info */}
              <div>
                <h2 className="text-lg font-bold text-black mb-2">
                  Livraison standard gratuite
                </h2>
                <p className="text-[15px] text-zinc-600 font-normal mb-4 leading-relaxed">
                  Inscris-toi à l'adiClub pour profiter de la livraison standard
                  gratuite et gagner des points à chaque commande.
                </p>
                <div className="space-y-2">
                  <a
                    href="#"
                    className="block text-sm font-bold text-black underline hover:text-amber-500 transition-colors"
                  >
                    Rejoindre l'adiClub gratuitement
                  </a>
                  <a
                    href="#"
                    className="block text-sm font-bold text-black underline hover:text-amber-500 transition-colors"
                  >
                    En savoir plus
                  </a>
                </div>
              </div>

              {/* Seconde Information */}
              <div>
                <h2 className="text-lg font-bold text-black mb-2 uppercase">
                  Personnalise ton maillot de la coupe du monde 26™
                </h2>
                <p className="text-[15px] text-zinc-600 font-normal mb-4 leading-relaxed">
                  Personnalise ton maillot préféré maintenant pour le recevoir à
                  temps pour le tournoi.
                </p>
                <a
                  href="#"
                  className="text-sm font-bold text-black underline hover:text-amber-500 transition-colors"
                >
                  Acheter
                </a>
              </div>

              {/* Troisième information */}
              <div>
                <h2 className="text-lg font-bold text-black mb-2">
                  Retours et échanges gratuits
                </h2>
                <p className="text-[15px] text-zinc-600 font-normal mb-4 leading-relaxed">
                  Échange ou retourne tes articles gratuitement pendant 30
                  jours. Les produits personnalisés ne peuvent pas être
                  retournés.
                </p>
                <div className="space-y-2">
                  <a
                    href="#"
                    className="block text-sm font-bold text-black underline hover:text-amber-500 transition-colors"
                  >
                    En savoir plus sur les retours
                  </a>
                  <a
                    href="#"
                    className="block text-sm font-bold text-black underline hover:text-amber-500 transition-colors"
                  >
                    En savoir plus sur les échanges
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-black py-2 cursor-pointer transition-colors hover:bg-zinc-900"
          onClick={() => setInfoPlus(!infoPlus)} // Alterne entre ouvert et fermé
        >
          <p className="text-amber-300 text-center text-sm font-medium tracking-wide flex items-center justify-center gap-2">
            Retours et Échanges Gratuits
            {/* Petite flèche qui tourne selon l'état */}
            <span
              className={`transform transition-transform duration-300 ${infoPlus ? "rotate-180" : ""}`}
            >
              ▼
            </span>
          </p>
        </div>

        {/* 3. NAVIGATION PRINCIPALE */}
        <nav className="flex items-end justify-between px-16 lg:px-40 pt-1 bg-white">
          {/* Logo */}
          <div className="max-w-32 shrink-0">
            <a href="#">
              <img
                src="/src/assets/FIlon.svg"
                alt="Filon Logo"
                className="w-full h-auto"
              />
            </a>
          </div>

          {/* Liens de Navigation */}
          <ul className="flex flex-wrap items-end justify-center gap-4 lg:gap-8 text-md text-zinc-900 ">
            <li className=" px-3 hover:border-b-3 py-2   font-semibold hover:text-amber-300 cursor-pointer">
              Accueil
            </li>
            <li className="hover:border-b-3 py-2 px-3 transition-all font-semibold hover:text-amber-300 cursor-pointer">
              Boutique
            </li>
            <li className="hover:border-b-3 py-2 px-3 transition-all font-semibold hover:text-amber-300 cursor-pointer">
              Personnalisation
            </li>
            <li className="hover:border-b-3 py-2 px-3 transition-all font-semibold hover:text-amber-300 cursor-pointer">
              Nous Contacter
            </li>
          </ul>

          {/* Réseaux Sociaux */}
          <div className="text-md font-semibold text-zinc-700 hidden md:block">
            <p>Nos Réseaux</p>
          </div>
        </nav>

        {/* 4. BANDEAU INFÉRIEUR PROMOTION */}
        <div className="bg-blue-50 py-2 px-4 border-t border-b text-center border-blue-100">
          <a className="text-blue-600 text-sm font-bold tracking-wide">
            Notre Promotion en cours
          </a>
        </div>

        <div className="bg-gray-200 w-ful py-76"> </div>

        <div className="mt-10 mb-4 px-6 lg:px-36">
          <h3 className="text-2xl font-bold uppercase tracking-wide mb-6">
            Nos Produits
          </h3>

          {/* ZONE DES FILTRES (DaisyUI) */}
          <div className="flex flex-col gap-4">
            {/* Filtre 1 : Types de vêtements */}
            <form className="filter">
              <input
                className="btn"
                type="radio"
                name="frameworks"
                aria-label="T-shirt"
              />
              <input
                className="btn"
                type="radio"
                name="frameworks"
                aria-label="La Coste"
              />
              <input
                className="btn"
                type="radio"
                name="frameworks"
                aria-label="Pull"
              />
              <input
                className="btn"
                type="radio"
                name="frameworks"
                aria-label="Puzzle"
              />
              <input
                className="btn"
                type="radio"
                name="frameworks"
                aria-label="Tasse"
              />
              <input
                className="btn"
                type="radio"
                name="frameworks"
                aria-label="Casquette"
              />
              <input className="btn btn-square" type="reset" value="×" />
            </form>

            {/* Filtre 2 : Thématiques / Collections */}
            <form className="filter">
              <input
                className="btn"
                type="radio"
                name="frameworks"
                aria-label="Burkina"
              />
              <input
                className="btn"
                type="radio"
                name="frameworks"
                aria-label="AES"
              />
              <input
                className="btn"
                type="radio"
                name="frameworks"
                aria-label="Motivation"
              />
              <input
                className="btn"
                type="radio"
                name="frameworks"
                aria-label="Manga"
              />
              <input className="btn btn-square" type="reset" value="×" />
            </form>
          </div>
        </div>

        {/* CAROUSEL DE PRODUITS */}
        <div className=" mb-10">
          <div className="carousel carousel-center gap-2 w-full pl-36 pr-36">
            <div className="carousel-item w-3/12 ">
              <div className="flex-col">
                <img
                  src="/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Bleu_KX1246_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className=" "
                />
                <p className="font-bold text-sm my-2">50$</p>
                <p className="font-light    my-1">SHORT WAFFLE KNIT SPRINTER</p>
                <p className="text-gray-400 text-sm">Originals</p>
              </div>
            </div>

            <div className="carousel-item w-3/12">
              <div className="flex-col">
                <img
                  src="/src/assets/MAILLOT_DETE_Bleu_KX1258_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className=" "
                />
                <p className="font-bold text-sm my-2">50$</p>
                <p className="font-light    my-1">SHORT WAFFLE KNIT SPRINTER</p>
                <p className="text-gray-400 text-sm">Originals</p>
              </div>
            </div>

            <div className="carousel-item w-3/12">
              <div className="flex-col">
                <img
                  src="/src/assets/SHORT_CHINO_DENIM_Bleu_KX1192_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className=" "
                />
                <p className="font-bold text-sm my-2">50$</p>
                <p className="font-light    my-1">SHORT WAFFLE KNIT SPRINTER</p>
                <p className="text-gray-400 text-sm">Originals</p>
              </div>
            </div>

            <div className="carousel-item w-3/12">
              <div className="flex-col">
                <img
                  src="/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Vert_KX1247_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className=" "
                />
                <p className="font-bold text-sm my-2">50$</p>
                <p className="font-light    my-1">SHORT WAFFLE KNIT SPRINTER</p>
                <p className="text-gray-400 text-sm">Originals</p>
              </div>
            </div>

            <div className="carousel-item w-3/12">
              <div className="flex-col">
                <img
                  src="/src/assets/T-SHIRT_CALI_DELAVE_Bleu_KX1261_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className=" "
                />
                <p className="font-bold text-sm my-2">50$</p>
                <p className="font-light    my-1">SHORT WAFFLE KNIT SPRINTER</p>
                <p className="text-gray-400 text-sm">Originals</p>
              </div>
            </div>

            <div className="carousel-item w-3/12">
              <div className="flex-col">
                <img
                  src="/src/assets/SHORT_CHINO_DENIM_Bleu_KX1192_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className=" "
                />
                <p className="font-bold text-sm my-2">50$</p>
                <p className="font-light    my-1">SHORT WAFFLE KNIT SPRINTER</p>
                <p className="text-gray-400 text-sm">Originals</p>
              </div>
            </div>

            <div className="carousel-item w-3/12">
              <div className="flex-col">
                <img
                  src="/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Bleu_KX1246_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className=" "
                />
                <p className="font-bold text-sm my-2">50$</p>
                <p className="font-light    my-1">SHORT WAFFLE KNIT SPRINTER</p>
                <p className="text-gray-400 text-sm">Originals</p>
              </div>
            </div>
          </div>
        </div>

        {/* PARTIE PERSONALISATION */}
        <div className="flex  mx-28 p-2 bg-gray-100  mt-24 mb-16">
          {/* Image */}
          <div>
            {" "}
            <img
              src="/src/assets/MAILLOT_DETE_Bleu_KX1258_000_plp_model.webp"
              alt=""
              className="scale-110"
            />{" "}
          </div>

          {/* Text */}
          <div className="flex mx-auto font-mono font-bold">
            <h3 className="text-black text-2xl">Personnalisation sur mesure</h3>
          </div>
        </div>

        {/* Full Image d'une Tendance avec Call to Action pour achats */}
        <div className="bg-gray-200 py-80  mt-24 mb-8 "></div>a quoi peu resembler  catalogue d un site de vente d'objet personaliser ?

        {/* Quatre Produits avec CTA d'achat genre 1t-shirt, 1e tasse, un bic, un bloc note, un tapis, une broderie precision ici on ne met pas le prix du produits*/}
        <div className="w-full mx-36 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
            {/* Produit 1 */}
            <div className="group flex flex-col bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
              <div className="overflow-hidden bg-gray-50 aspect-[3/4]">
                <img
                  src="/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Bleu_KX1246_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-3 flex flex-col flex-grow">
                <p className="font-bold text-lg text-black">Nom du produit</p>
                <p className="text-sm font-medium text-zinc-800 line-clamp-2 flex-grow">
                  Description du produits
                </p>
                <button className="btn  border-2 border-green-200 btn-success btn-soft mt-4 mb-2">
                  Acheter
                </button>
              </div>
            </div>

            {/* Produit 2 */}
            <div className="group flex flex-col bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
              <div className="overflow-hidden bg-gray-50 aspect-[3/4]">
                <img
                  src="/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Bleu_KX1246_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-3 flex flex-col flex-grow">
                <p className="font-bold text-lg text-black">Nom du produit</p>
                <p className="text-sm font-medium text-zinc-800 line-clamp-2 flex-grow">
                  Description du produits
                </p>
                <button className="btn  border-2 border-green-200 btn-success btn-soft mt-4 mb-2">
                  Acheter
                </button>
              </div>
            </div>

            {/* Produit 3 */}
            <div className="group flex flex-col bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
              <div className="overflow-hidden bg-gray-50 aspect-[3/4]">
                <img
                  src="/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Bleu_KX1246_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-3 flex flex-col flex-grow">
                <p className="font-bold text-lg text-black">Nom du produit</p>
                <p className="text-sm font-medium text-zinc-800 line-clamp-2 flex-grow">
                  Description du produits
                </p>
                <button className="btn  border-2 border-green-200 btn-success btn-soft mt-4 mb-2">
                  Acheter
                </button>
              </div>
            </div>

            {/* Produit 4 */}
            <div className="group flex flex-col bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
              <div className="overflow-hidden bg-gray-50 aspect-[3/4]">
                <img
                  src="/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Bleu_KX1246_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-3 flex flex-col flex-grow">
                <p className="font-bold text-lg text-black">Nom du produit</p>
                <p className="text-sm font-medium text-zinc-800 line-clamp-2 flex-grow">
                  Description du produits
                </p>
                <button className="btn  border-2 border-green-200 btn-success btn-soft mt-4 mb-2">
                  Acheter
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* NOS OFFRES POUR LES ENTREPRISES */}
        <div className="flex  mx-28 p-2 bg-gray-100  mt-24 mb-16">
          {/* Text */}
          <div className="flex mx-auto font-mono font-bold">
            <h3 className="text-black text-2xl">Offres Entreprise</h3>
          </div>

          {/* Image */}
          <div>
            {" "}
            <img
              src="/src/assets/MAILLOT_DETE_Bleu_KX1258_000_plp_model.webp"
              alt=""
              className="scale-110"
            />{" "}
          </div>
        </div>

        {/* FOOTER */}
        <div>
          <footer className="footer sm:footer-horizontal bg-base-200 text-base-content py-10 px-36 ">
            <aside>
              <div className="flex items-center gap-2">
                <img src="/Filon_favicon.svg" alt="" width="65" />
                <p className="text-5xl font-black ">
                  FILON
                  <p className="text-sm font-normal text-gray-500 pl-1">
                    vous connectez a vos opportunites
                  </p>
                </p>
              </div>
            </aside>
            <nav>
              <h6 className="text-md font-black uppercase">Nos Services</h6>
              <a className="link link-hover font-semibold text-gray-500">
                Repographie
              </a>
              <a className="link link-hover font-semibold text-gray-500">
                Design
              </a>
              <a className="link link-hover font-semibold text-gray-500">
                Marketing
              </a>
              <a className="link link-hover font-semibold text-gray-500">
                Inforatique
              </a>
            </nav>
            <nav>
              <h6 className="text-md font-black uppercase ">FILON PRINT</h6>
              <a className="link link-hover font-semibold text-gray-500 ">
                A Propos de Nous
              </a>
              <a className="link link-hover font-semibold text-gray-500">
                Nous Contacter
              </a>
              <a className="link link-hover font-semibold text-gray-500">
                Fourniture
              </a>
            </nav>

            <div className="flex flex-col  gap-4 ">
              <div>
                <p className="text-md font-black">NOS RESEAUX</p>
              </div>
              <div className="grid grid-flow-col gap-4">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </footer>
          <div className=" bg-black text-gray-100 footer sm:footer-horizontal footer-center p-4">
            <aside>
              <p>Copyright © 2026 - All right reserved by FILON TECH</p>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
