import HeroZone1 from "./HeroZone_one";
import NewCollectionContent from "./NewCollection";
import PersonnalisationContent_rigth from "./Personnalisation_right";

const BoutiquePage = () => {
  return (
    <div>
      <HeroZone1 />

      {/* BEST OF SALE */}
      <div>
        {/* Quatre Produits avec CTA d'achat genre 1t-shirt, 1e tasse, un bic, un bloc note, un tapis, une broderie precision ici on ne met pas le prix du produits*/}
        <div className="w-full mx-36 mb-16 mt-14">
          <h3 className="mb-5 text-3xl md:text-4xl font-extrabold tracking-tight">
            Nos Meilleurs Ventes
          </h3>

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
      </div>

      {/* TOUS NOS PRODUITS */}
      <div>
        <div className="mt-28 mb-4 px-6 lg:px-36">
          <h3 className="mb-5 text-3xl md:text-4xl font-extrabold tracking-tight">
            Tous Nos Produits
          </h3>

          {/* ZONE DES FILTRES (DaisyUI) */}
          <div className="flex flex-col gap-y-2">
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
        <div className=" mb-28 ">
          {/* PREMIER LIGNE DU CAROUSELLE */}
          <div className="carousel carousel-center gap-2 w-full pl-36 pr-36">
            <div className="carousel-item w-2/12 lg:w-3/12 mb-4 ">
              <div className="flex-col">
                <img
                  src="/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Bleu_KX1246_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className=""
                />
                <p className="font-extrabold text-sm mt-1">50$</p>
                <p className="font-light">SHORT WAFFLE KNIT SPRINTER</p>
              </div>
            </div>

            <div className="carousel-item w-2/12 lg:w-3/12 mb-4 ">
              <div className="flex-col">
                <img
                  src="/src/assets/MAILLOT_DETE_Bleu_KX1258_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className=" "
                />
                <p className="font-bold text-sm mt-1">50$</p>
                <p className="font-light">SHORT WAFFLE KNIT SPRINTER</p>
              </div>
            </div>

            <div className="carousel-item w-2/12 lg:w-3/12 mb-4 ">
              <div className="flex-col">
                <img
                  src="/src/assets/SHORT_CHINO_DENIM_Bleu_KX1192_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className=" "
                />
                <p className="font-bold text-sm mt-1">50$</p>
                <p className="font-light">SHORT WAFFLE KNIT SPRINTER</p>
              </div>
            </div>

            <div className="carousel-item w-2/12 lg:w-3/12 mb-4 ">
              <div className="flex-col">
                <img
                  src="/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Vert_KX1247_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className=" "
                />
                <p className="font-bold text-sm mt-1">50$</p>
                <p className="font-light">SHORT WAFFLE KNIT SPRINTER</p>
              </div>
            </div>

            <div className="carousel-item w-2/12 lg:w-3/12 mb-4 ">
              <div className="flex-col">
                <img
                  src="/src/assets/T-SHIRT_CALI_DELAVE_Bleu_KX1261_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className=" "
                />
                <p className="font-bold text-sm mt-1">50$</p>
                <p className="font-light">SHORT WAFFLE KNIT SPRINTER</p>
              </div>
            </div>

            <div className="carousel-item w-2/12 lg:w-3/12 mb-4 ">
              <div className="flex-col">
                <img
                  src="/src/assets/SHORT_CHINO_DENIM_Bleu_KX1192_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className=" "
                />
                <p className="font-bold text-sm mt-1">50$</p>
                <p className="font-light">SHORT WAFFLE KNIT SPRINTER</p>
              </div>
            </div>

            <div className="carousel-item w-2/12 lg:w-3/12 mb-4 ">
              <div className="flex-col">
                <img
                  src="/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Bleu_KX1246_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className=" "
                />
                <p className="font-bold text-sm mt-1">50$</p>
                <p className="font-light">SHORT WAFFLE KNIT SPRINTER</p>
              </div>
            </div>
          </div>

          {/* SECOND LIGNE DU CAROUSELLE */}
          <div className="carousel carousel-center flex-row-reverse gap-2 w-full pl-36 pr-36 overflow-x-auto">
            <div className="carousel-item w-2/12 lg:w-3/12 mb-4 ">
              <div className="flex-col">
                <img
                  src="/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Bleu_KX1246_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className=""
                />
                <p className="font-extrabold text-sm mt-1">50$</p>
                <p className="font-light">SHORT WAFFLE KNIT SPRINTER</p>
              </div>
            </div>

            <div className="carousel-item w-2/12 lg:w-3/12 mb-4 ">
              <div className="flex-col">
                <img
                  src="/src/assets/MAILLOT_DETE_Bleu_KX1258_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className=" "
                />
                <p className="font-bold text-sm mt-1">50$</p>
                <p className="font-light">SHORT WAFFLE KNIT SPRINTER</p>
              </div>
            </div>

            <div className="carousel-item w-2/12 lg:w-3/12 mb-4 ">
              <div className="flex-col">
                <img
                  src="/src/assets/SHORT_CHINO_DENIM_Bleu_KX1192_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className=" "
                />
                <p className="font-bold text-sm mt-1">50$</p>
                <p className="font-light">SHORT WAFFLE KNIT SPRINTER</p>
              </div>
            </div>

            <div className="carousel-item w-2/12 lg:w-3/12 mb-4 ">
              <div className="flex-col">
                <img
                  src="/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Vert_KX1247_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className=" "
                />
                <p className="font-bold text-sm mt-1">50$</p>
                <p className="font-light">SHORT WAFFLE KNIT SPRINTER</p>
              </div>
            </div>

            <div className="carousel-item w-2/12 lg:w-3/12 mb-4 ">
              <div className="flex-col">
                <img
                  src="/src/assets/T-SHIRT_CALI_DELAVE_Bleu_KX1261_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className=" "
                />
                <p className="font-bold text-sm mt-1">50$</p>
                <p className="font-light">SHORT WAFFLE KNIT SPRINTER</p>
              </div>
            </div>

            <div className="carousel-item w-2/12 lg:w-3/12 mb-4 ">
              <div className="flex-col">
                <img
                  src="/src/assets/SHORT_CHINO_DENIM_Bleu_KX1192_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className=" "
                />
                <p className="font-bold text-sm mt-1">50$</p>
                <p className="font-light">SHORT WAFFLE KNIT SPRINTER</p>
              </div>
            </div>

            <div className="carousel-item w-2/12 lg:w-3/12 mb-4 ">
              <div className="flex-col">
                <img
                  src="/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Bleu_KX1246_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className=" "
                />
                <p className="font-bold text-sm mt-1">50$</p>
                <p className="font-light">SHORT WAFFLE KNIT SPRINTER</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION IDEES DE CADEAU */}
      <div className="px-6 lg:px-36 w-full mb-10">
        {/* Titre épuré et centré */}
        <h3 className="mb-10 text-2xl lg:text-3xl font-extrabold tracking-tight uppercase text-center lg:text-left">
          Idées de Cadeaux
        </h3>

        {/* Conteneur Principal : Colonne sur Mobile, Grille 4 colonnes sur PC */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* =========================================================
            1. COLONNE DES THÈMES (Filtres)
           ========================================================= */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-3 lg:pb-0 scrollbar-none lg:w-full snap-x">
            {/* Geek : Style sombre / Matrix ou Violet pop */}
            <button className="btn btn-neutral btn-sm lg:btn-md snap-pointer shrink-0 lg:w-full rounded-xl border-purple-500/30 text-purple-400">
              Geek
            </button>

            {/* Informatique : Le bleu techno */}
            <button className="btn btn-info btn-sm lg:btn-md snap-pointer shrink-0 lg:w-full rounded-xl text-white">
              Informatique
            </button>

            {/* BTP : Le jaune chantier / sécurité */}
            <button className="btn btn-warning btn-sm lg:btn-md snap-pointer shrink-0 lg:w-full rounded-xl text-warning-content">
              BTP
            </button>

            {/* Électricité : Le rouge/orange d'énergie haute tension */}
            <button className="btn btn-error btn-sm lg:btn-md snap-pointer shrink-0 lg:w-full rounded-xl text-white">
              Électricité
            </button>

            {/* Électronique : Le vert des circuits imprimés */}
            <button className="btn btn-success btn-sm lg:btn-md snap-pointer shrink-0 lg:w-full rounded-xl text-white">
              Électronique
            </button>

            {/* Fête des Pères : Bleu roi / Élégant */}
            <button className="btn btn-primary btn-sm lg:btn-md snap-pointer shrink-0 lg:w-full rounded-xl">
              Fête des Pères
            </button>

            {/* Fête des Mères : Soft / Accent (Rose/Magenta doux) */}
            <button className="btn btn-accent btn-sm lg:btn-md snap-pointer shrink-0 lg:w-full rounded-xl text-accent-content">
              Fête des Mères
            </button>

            {/* Octobre Rose : Vrai rose thématique avec Tailwind classique */}
            <button className="btn btn-sm lg:btn-md snap-pointer shrink-0 lg:w-full rounded-xl bg-pink-500 hover:bg-pink-600 text-white border-none">
              Octobre Rose
            </button>
          </div>

          {/* =========================================================
            2. GRILLE D'IMAGES ASYMÉTRIQUE (100% Visuels)
           ========================================================= */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[140px] md:auto-rows-[160px]">
            {/* Image 1 : La pièce maîtresse (Prend 2 colonnes de large ET 2 lignes de hauteur) */}
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden border border-base-300 bg-base-200 relative group shadow-sm">
              <img
                src="/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Bleu_KX1246_000_plp_model.webp"
                alt="Collection Vedette"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-blue-300 border-2 border-blue-500 text-primary-content text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                Populaire
              </div>
            </div>

            {/* Image 2 : Verticale et fine sur la droite (Prend 2 lignes de hauteur) */}
            <div className="col-span-2 md:col-span-1 row-span-2 rounded-2xl overflow-hidden border border-base-300 bg-base-200 relative group shadow-sm">
              <img
                src="/src/assets/MAILLOT_DETE_Bleu_KX1258_000_plp_model.webp"
                alt="Focus Produit"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Image 3 : Standard (Prend 1 case) */}
            <div className="rounded-2xl overflow-hidden border border-base-300 bg-base-200 relative group shadow-sm">
              <img
                src="/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Bleu_KX1246_000_plp_model.webp"
                alt="Zoom Détail"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Image 4 : Large (Prend 2 colonnes de large en bas) */}
            <div className="col-span-2 rounded-2xl overflow-hidden border border-base-300 bg-base-200 relative group shadow-sm">
              <img
                src="/src/assets/MAILLOT_DETE_Bleu_KX1258_000_plp_model.webp"
                alt="Ambiance Catalogue"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-36">
  <div 
    className="hero min-h-[380px] rounded-3xl overflow-hidden shadow-sm"
    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80')" }} 
  >
    <div className="hero-overlay bg-black/70"></div> {/* Légèrement plus sombre pour un meilleur contraste de lecture */}
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-xl px-4">
        <span className="badge badge-success font-bold mb-4 tracking-widest uppercase text-xs text-white">
          Création Sur-Mesure
        </span>
        <h2 className="mb-4 text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase">
          Rien ne vous plaît ? <br/> Créez le vôtre !
        </h2>
        <p className="mb-6 text-sm text-gray-200 font-light leading-relaxed">
          Vous avez une idée bien précise en tête, un logo d'entreprise ou un message particulier à faire passer ? Pas de panique. Transmettez-nous votre projet et nous l'imprimons pour vous à l'unité ou en grande quantité.
        </p>
        
        {/* Lien direct WhatsApp avec message pré-rempli */}
        <a 
          href="https://wa.me/226XXXXXXXX?text=Bonjour%20!%20Je%20souhaite%20réaliser%20une%20commande%20sur-mesure%20car%20j'ai%20une%20idée%20de%20design%20spécifique%20à%20vous%20partager."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success px-8 text-white font-bold tracking-wide shadow-md hover:scale-105 transition-transform bg-[#25D366] border-none"
        >
          <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.451 5.42 1.453 5.334 0 9.673-4.34 9.677-9.684.002-2.588-1.002-5.022-2.827-6.849-1.826-1.826-4.26-2.827-6.85-2.828-5.344 0-9.682 4.34-9.687 9.686-.001 1.955.509 3.864 1.48 5.519l-.97 3.543 3.633-.953z"/>
          </svg>
          Discuter de mon projet sur WhatsApp
        </a>
      </div>
    </div>
  </div>
</div>


    </div>
  );
};

export default BoutiquePage;
