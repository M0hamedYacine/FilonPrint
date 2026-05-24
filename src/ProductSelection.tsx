import React, { useRef } from 'react';

interface Product {
  id: number;
  src: string;
  alt: string;
  price: string;
  name: string;
}

export default function ProductCarousel() {
  // Les refs pour cibler nos deux lignes de carrousel
  const carouselRow1Ref = useRef<HTMLDivElement>(null);
  const carouselRow2Ref = useRef<HTMLDivElement>(null);

  // Variable de verrouillage pour éviter les boucles infinies d'événements de scroll
  const isScrolling = useRef(false);

  const products: Product[] = [
    { id: 1, src: "/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Bleu_KX1246_000_plp_model.webp", alt: "SHORT WAFFLE", price: "50$", name: "SHORT WAFFLE KNIT SPRINTER" },
    { id: 2, src: "/src/assets/MAILLOT_DETE_Bleu_KX1258_000_plp_model.webp", alt: "MAILLOT DETE", price: "50$", name: "SHORT WAFFLE KNIT SPRINTER" },
    { id: 3, src: "/src/assets/SHORT_CHINO_DENIM_Bleu_KX1192_000_plp_model.webp", alt: "SHORT CHINO", price: "50$", name: "SHORT WAFFLE KNIT SPRINTER" },
    { id: 4, src: "/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Vert_KX1247_000_plp_model.webp", alt: "SHORT VERT", price: "50$", name: "SHORT WAFFLE KNIT SPRINTER" },
    { id: 5, src: "/src/assets/T-SHIRT_CALI_DELAVE_Bleu_KX1261_000_plp_model.webp", alt: "T-SHIRT CALI", price: "50$", name: "SHORT WAFFLE KNIT SPRINTER" },
    { id: 6, src: "/src/assets/SHORT_CHINO_DENIM_Bleu_KX1192_000_plp_model.webp", alt: "SHORT CHINO 2", price: "50$", name: "SHORT WAFFLE KNIT SPRINTER" },
    { id: 7, src: "/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Bleu_KX1246_000_plp_model.webp", alt: "SHORT WAFFLE 2", price: "50$", name: "SHORT WAFFLE KNIT SPRINTER" },
  ];

  // Fonction magique de synchronisation inversée
  const handleScroll = (source: 'row1' | 'row2') => {
    if (isScrolling.current) return; // Si un scroll est déjà en cours de calcul, on stoppe

    const row1 = carouselRow1Ref.current;
    const row2 = carouselRow2Ref.current;

    if (!row1 || !row2) return;

    isScrolling.current = true;

    // Calcul de la position maximale scrollable pour inverser correctement
    const maxScroll1 = row1.scrollWidth - row1.clientWidth;
    const maxScroll2 = row2.scrollWidth - row2.clientWidth;

    if (source === 'row1') {
      // Si l'utilisateur scrolle la ligne 1, on fait bouger la ligne 2 à l'envers
      const percentage = row1.scrollLeft / maxScroll1;
      row2.scrollLeft = maxScroll2 - (percentage * maxScroll2);
    } else {
      // Si l'utilisateur scrolle la ligne 2, on fait bouger la ligne 1 à l'envers
      const percentage = row2.scrollLeft / maxScroll2;
      row1.scrollLeft = maxScroll1 - (percentage * maxScroll1);
    }

    // On libère le verrouillage après le calcul
    // (requestAnimationFrame garantit que le rendu reste fluide à 60 FPS+)
    requestAnimationFrame(() => {
      isScrolling.current = false;
    });
  };

  const renderProductCard = (product: Product) => (
    <div key={product.id} className="carousel-item w-5/12 sm:w-4/12 md:w-3/12 lg:w-2/12 mb-4">
      <div className="flex-col w-full">
        <img
          src={product.src}
          alt={product.alt}
          className="rounded-box object-cover w-full h-48 md:h-64"
        />
        <p className="font-extrabold text-sm mt-1">{product.price}</p>
        <p className="font-light text-xs truncate">{product.name}</p>
      </div>
    </div>
  );

  return (
    <div>
      <div className="mt-28 mb-4 px-6 lg:px-36">
        <h3 className="text-2xl font-bold tracking-wide mb-2">
          Tous Nos Produits
        </h3>

        {/* ZONE DES FILTRES */}
        <div className="flex flex-col gap-y-2">
          <form className="filter">
            <input className="btn" type="radio" name="frameworks" aria-label="T-shirt" />
            <input className="btn" type="radio" name="frameworks" aria-label="La Coste" />
            <input className="btn" type="radio" name="frameworks" aria-label="Pull" />
            <input className="btn" type="radio" name="frameworks" aria-label="Puzzle" />
            <input className="btn" type="radio" name="frameworks" aria-label="Tasse" />
            <input className="btn" type="radio" name="frameworks" aria-label="Casquette" />
            <input className="btn btn-square" type="reset" value="×" />
          </form>

          <form className="filter">
            <input className="btn" type="radio" name="frameworks" aria-label="Burkina" />
            <input className="btn" type="radio" name="frameworks" aria-label="AES" />
            <input className="btn" type="radio" name="frameworks" aria-label="Motivation" />
            <input className="btn" type="radio" name="frameworks" aria-label="Manga" />
            <input className="btn btn-square" type="reset" value="×" />
          </form>
        </div>
      </div>

      {/* CAROUSEL DE PRODUITS */}
      <div className="mb-28 flex flex-col gap-4">

        {/* PREMIÈRE LIGNE (Écoute le scroll) */}
        <div 
          ref={carouselRow1Ref}
          onScroll={() => handleScroll('row1')}
          className="carousel carousel-center gap-4 w-full px-6 lg:px-36 overflow-x-auto scroll-smooth"
        >
          {products.map((prod) => renderProductCard(prod))}
        </div>

        {/* SECONDE LIGNE (Écoute aussi le scroll) */}
        <div 
          ref={carouselRow2Ref}
          onScroll={() => handleScroll('row2')}
          className="carousel carousel-center gap-4 w-full px-6 lg:px-36 overflow-x-auto scroll-smooth"
        >
          {/* J'ai inversé l'ordre initial du tableau pour la ligne 2 pour que le rendu de départ soit sympa ! */}
          {[...products].reverse().map((prod) => renderProductCard(prod))}
        </div>

      </div>
    </div>
  );
}