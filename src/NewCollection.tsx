

const NewCollectionContent = () => {

    return (
        <div>
            {/* Quatre Produits avec CTA d'achat genre 1t-shirt, 1e tasse, un bic, un bloc note, un tapis, une broderie precision ici on ne met pas le prix du produits*/}
        <div className="w-full mx-36 mb-16 mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
            {/* Produit 1 */}
            <div className="group flex flex-col bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
              <div className="overflow-hidden bg-gray-50 aspect-3/4">
                <img
                  src="/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Bleu_KX1246_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-3 flex flex-col grow">
                <p className="font-bold text-lg text-black">Nom du produit</p>
                <p className="text-sm font-medium text-zinc-800 line-clamp-2 grow">
                  Description du produits
                </p>
                <button className="btn  border-2 border-green-200 btn-success btn-soft mt-4 mb-2">
                  Acheter
                </button>
              </div>
            </div>

            {/* Produit 2 */}
            <div className="group flex flex-col bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
              <div className="overflow-hidden bg-gray-50 aspect-3/4">
                <img
                  src="/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Bleu_KX1246_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-3 flex flex-col grow">
                <p className="font-bold text-lg text-black">Nom du produit</p>
                <p className="text-sm font-medium text-zinc-800 line-clamp-2 grow">
                  Description du produits
                </p>
                <button className="btn  border-2 border-green-200 btn-success btn-soft mt-4 mb-2">
                  Acheter
                </button>
              </div>
            </div>

            {/* Produit 3 */}
            <div className="group flex flex-col bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
              <div className="overflow-hidden bg-gray-50 aspect-3/4">
                <img
                  src="/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Bleu_KX1246_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-3 flex flex-col grow">
                <p className="font-bold text-lg text-black">Nom du produit</p>
                <p className="text-sm font-medium text-zinc-800 line-clamp-2 grow">
                  Description du produits
                </p>
                <button className="btn  border-2 border-green-200 btn-success btn-soft mt-4 mb-2">
                  Acheter
                </button>
              </div>
            </div>

            {/* Produit 4 */}
            <div className="group flex flex-col bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
              <div className="overflow-hidden bg-gray-50 aspect-3/4">
                <img
                  src="/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Bleu_KX1246_000_plp_model.webp"
                  alt="SHORT WAFFLE KNIT SPRINTER"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-3 flex flex-col grow">
                <p className="font-bold text-lg text-black">Nom du produit</p>
                <p className="text-sm font-medium text-zinc-800 line-clamp-2 grow">
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
    )
}

export default NewCollectionContent