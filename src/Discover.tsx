 
const Discover = () => {

    return (
        <div>
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
        </div>
    );
}

export default Discover