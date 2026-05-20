import { useState } from "react";
import { X} from "lucide-react";

const Header = () => {



    const [infoPlus, setInfoPlus] = useState(false);

    return(
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
        </div>
    );
}

export default Header