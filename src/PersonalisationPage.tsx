const PersonalisationPage = () => {
  return (
    <div className="w-full flex flex-col gap-24 my-14 bg-base-100 text-base-content">
      {/* INTRO HERO DE LA PAGE */}
      <div className="w-full px-6 lg:px-36 flex flex-col gap-12 border-b pb-24 border-b-gray-300">
        {/* INTRO HERO DE LA PAGE */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight uppercase">
            Atelier de Personnalisation
          </h1>
          <p className="text-sm font-light text-base-content/70 leading-relaxed">
            Donnez vie à vos projets. Sélectionnez votre support textile ou
            objet, découvrez nos techniques de marquage de pointe faites
            localement dans notre atelier, et lancez votre commande en toute
            simplicité.
          </p>
        </div>

        {/* =========================================================
      SECTION PROCESSUS DE PERSONNALISATION
     ========================================================= */}
        <div className="bg-base-200/50 rounded-3xl p-6 lg:p-10 border border-base-300/60 shadow-sm">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase text-center mb-8">
            Comment ça marche ?
          </h2>

          {/* Grille de processus : 1 colonne sur mobile, 3 colonnes sur PC */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
            {/* Étape 1 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 px-4 relative group">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl lg:text-5xl font-black tracking-tight text-primary/20 group-hover:text-primary transition-colors">
                  01
                </span>
                <h3 className="font-bold text-base md:text-lg">Le Support</h3>
              </div>
              <p className="text-xs font-light text-base-content/60 max-w-60 md:max-w-none">
                Sélectionnez l'article que vous souhaitez personnaliser dans
                notre catalogue (T-shirt, Mug, Casquette...).
              </p>
            </div>

            {/* Étape 2 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 px-4 relative group border-t md:border-t-0 md:border-l border-base-300/80 pt-6 md:pt-0">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl lg:text-5xl font-black tracking-tight text-success/20 group-hover:text-success transition-colors">
                  02
                </span>
                <h3 className="font-bold text-base md:text-lg">La Technique</h3>
              </div>
              <p className="text-xs font-light text-base-content/60 max-w-60 md:max-w-none">
                Choisissez la méthode de marquage adaptée à votre visuel (DTF,
                Sublimation, Broderie...) ou laissez-nous vous guider.
              </p>
            </div>

            {/* Étape 3 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 px-4 relative group border-t md:border-t-0 md:border-l border-base-300/80 pt-6 md:pt-0">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl lg:text-5xl font-black tracking-tight text-info/20 group-hover:text-info transition-colors">
                  03
                </span>
                <h3 className="font-bold text-base md:text-lg">
                  La Validation
                </h3>
              </div>
              <p className="text-xs font-light text-base-content/60 max-w-60 md:max-w-none">
                Basculez sur WhatsApp en un clic pour nous envoyer votre visuel,
                valider la Maquette final et confirmer votre commande.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full flex flex-col gap-24 mb-14 bg-base-100 text-base-content">

      {/* =========================================================
          SECTION 1 : LES ARTICLES PERSONALISABLES (Grille de supports)
         ========================================================= */}
      <div className="px-6 lg:px-36">
        <h2 className="text-xl lg:text-2xl font-extrabold tracking-tight uppercase mb-8 border-l-4 border-primary pl-3">
          1. Choisissez votre support
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Support 1 : T-shirt */}
          <div className="group bg-base-200 rounded-2xl overflow-hidden border border-base-300 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col">
            <div className="aspect-square bg-base-300 overflow-hidden">
              <img src="/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Bleu_KX1246_000_plp_model.webp" alt="T-shirts" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-4 flex flex-col grow justify-between items-start">
              <div>
                <h3 className="font-bold text-sm md:text-base">T-shirts Premium</h3>
                <p className="text-xs font-light text-base-content/60 mt-0.5">Col rond, col V, coton lourd</p>
              </div>
              <button className="btn btn-primary btn-xs mt-3 rounded-lg">Sélectionner</button>
            </div>
          </div>

          {/* Support 2 : Pull / Sweat */}
          <div className="group bg-base-200 rounded-2xl overflow-hidden border border-base-300 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col">
            <div className="aspect-square bg-base-300 overflow-hidden">
              <img src="/src/assets/MAILLOT_DETE_Bleu_KX1258_000_plp_model.webp" alt="Sweats & Hoodies" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-4 flex flex-col grow justify-between items-start">
              <div>
                <h3 className="font-bold text-sm md:text-base">Sweats & Hoodies</h3>
                <p className="text-xs font-light text-base-content/60 mt-0.5">Idéal pour entreprises et clubs</p>
              </div>
              <button className="btn btn-primary btn-xs mt-3 rounded-lg">Sélectionner</button>
            </div>
          </div>

          {/* Support 3 : Mugs / Tasses */}
          <div className="group bg-base-200 rounded-2xl overflow-hidden border border-base-300 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col">
            <div className="aspect-square bg-base-300 overflow-hidden">
              <img src="/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Bleu_KX1246_000_plp_model.webp" alt="Mugs & Gourdes" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-4 flex flex-col grow justify-between items-start">
              <div>
                <h3 className="font-bold text-sm md:text-base">Mugs & Gourdes</h3>
                <p className="text-xs font-light text-base-content/60 mt-0.5">Céramique et acier inoxydable</p>
              </div>
              <button className="btn btn-primary btn-xs mt-3 rounded-lg">Sélectionner</button>
            </div>
          </div>

          {/* Support 4 : Casquettes / Accessoires */}
          <div className="group bg-base-200 rounded-2xl overflow-hidden border border-base-300 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col">
            <div className="aspect-square bg-base-300 overflow-hidden">
              <img src="/src/assets/MAILLOT_DETE_Bleu_KX1258_000_plp_model.webp" alt="Casquettes & Sacs" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-4 flex flex-col grow justify-between items-start">
              <div>
                <h3 className="font-bold text-sm md:text-base">Casquettes & Sacs</h3>
                <p className="text-xs font-light text-base-content/60 mt-0.5">Totebags, casquettes filet...</p>
              </div>
              <button className="btn btn-primary btn-xs mt-3 rounded-lg">Sélectionner</button>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          SECTION 2 : LES METHODES DE PERSONALISATION (L'expertise technique)
         ========================================================= */}
      <div className="px-6 lg:px-36">
        <h2 className="text-xl lg:text-2xl font-extrabold tracking-tight uppercase mb-8 border-l-4 border-success pl-3">
          2. Nos techniques de marquage
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Technique 1 : DTF */}
          <div className="p-5 bg-base-200 border border-base-300 rounded-2xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="badge badge-error text-white font-bold text-xs uppercase tracking-wider">DTF Printing</span>
                <span className="text-xs font-semibold text-error">Haute Précision</span>
              </div>
              <h3 className="font-bold text-base mb-1">Direct to Film</h3>
              <p className="text-xs font-light text-base-content/70 leading-relaxed">
                Idéal pour les logos complexes, multicolores et les détails très fins sur les t-shirts en coton lourd. Rendu souple et ultra-résistant au lavage.
              </p>
            </div>
             <div className="text-red-400 border-t border-base-300/60 mt-4 pt-3 text-[11px] font-medium ">
               Minimun pcs : <span className="font-bold text-red-600">1 pièce</span>
            </div>
          </div>

          {/* Technique 2 : Sublimation */}
          <div className="p-5 bg-base-200 border border-base-300 rounded-2xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="badge badge-info text-white font-bold text-xs uppercase tracking-wider">Sublimation</span>
                <span className="text-xs font-semibold text-info">Incrustation totale</span>
              </div>
              <h3 className="font-bold text-base mb-1">Sublimation</h3>
              <p className="text-xs font-light text-base-content/70 leading-relaxed">
                L'encre fusionne directement avec la matière. Parfait pour les tasses (mugs) et les maillots de sport en polyester. Texture invisible au toucher.
              </p>
            </div>
            <div className="text-blue-400 border-t border-base-300/60 mt-4 pt-3 text-[11px] font-medium ">
               Minimun pcs : <span className="text-blue-600 font-bold ">1 pièce</span>
            </div>
          </div>

          {/* Technique 3 : Broderie */}
          <div className="p-5 bg-base-200 border border-base-300 rounded-2xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="badge badge-warning text-warning-content font-bold text-xs uppercase tracking-wider">Broderie</span>
                <span className="text-xs font-semibold text-warning">Luxe & Relief</span>
              </div>
              <h3 className="font-bold text-base mb-1">Broderie Machine</h3>
              <p className="text-xs font-light text-base-content/70 leading-relaxed">
                Le marquage haut de gamme par excellence. Donne un relief unique et une durabilité éternelle sur vos polos, casquettes et sweats d'entreprise.
              </p>
            </div>
            <div className="text-amber-400 border-t border-base-300/60 mt-4 pt-3 text-[11px] font-medium">
              Minimun pcs  : <span className="text-amber-600 font-bold">10 pièces</span>
            </div>
          </div>

          {/* Technique 4 : Sérigraphie */}
          <div className="p-5 bg-base-200 border border-base-300 rounded-2xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="badge badge-neutral text-neutral-content font-bold text-xs uppercase tracking-wider">Sérigraphie</span>
                <span className="text-xs font-semibold text-base-content/60">Grandes Séries</span>
              </div>
              <h3 className="font-bold text-base mb-1">Sérigraphie Traditionnelle</h3>
              <p className="text-xs font-light text-base-content/70 leading-relaxed">
                Idéal pour les grandes commandes (événements, uniformes d'écoles ou de chantiers). Prix ultra-dégressif et excellente opacité des encres.
              </p>
            </div>
            <div className="border-t border-base-300/60 mt-4 pt-3 text-[11px] font-medium text-gray-700">
              Minimun pcs : <span className="text-black font-bold">50 pièces</span>
            </div>
          </div>

        </div>
      </div>



 {/* =========================================================
          SECTION 3 : NOUS CONTACTER SUR WHATSAPP
         ========================================================= */}
      <div className="px-6 lg:px-36">
        <h2 className="text-xl lg:text-2xl font-extrabold tracking-tight uppercase mb-8 border-l-4 border-error pl-3">
          3. Maquette & Validation
        </h2>

         <div className="bg-base-200 rounded-3xl overflow-hidden border border-base-300 shadow-sm grid grid-cols-1 lg:grid-cols-12">
        
        {/* =========================================================
            GAUCHE : APERÇU VISUEL DU SUPPORT SELECTIONNÉ
           ========================================================= */}
        <div className="lg:col-span-5 bg-base-300 min-h-75 lg:min-h-112.5 relative group overflow-hidden">
          <img 
            src="/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Bleu_KX1246_000_plp_model.webp" 
            alt="Votre support sélectionné" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm uppercase tracking-wider">
            Votre Sélection
          </div>
        </div>

        {/* =========================================================
            DROITE : RÉCAPITULATIF ET OPTIONS RASSURANTES
           ========================================================= */}
        <div className="lg:col-span-7 p-6 lg:p-10 flex flex-col justify-between gap-6">
          
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-success mb-2 block">
              Prêt à imprimer
            </span>
            <h2 className="text-2xl lg:text-3xl font-black tracking-tight uppercase text-base-content mb-4">
              Votre Configuration
            </h2>
            
            {/* Récapitulatif des choix */}
            <div className="flex flex-col gap-3 mt-4">
              <div className="flex items-center justify-between border-b border-base-300/80 pb-3">
                <div className="flex flex-col">
                  <span className="text-xs font-light text-base-content/50 uppercase">Article choisi</span>
                  <span className="font-bold text-sm md:text-base">T-shirt Premium Coton</span>
                </div>
                
              </div>

              <div className="flex items-center justify-between border-b border-base-300/80 pb-3">
                <div className="flex flex-col">
                  <span className="text-xs font-light text-base-content/50 uppercase">Technique d'impression</span>
                  <span className="font-bold text-sm md:text-base">Direct to Film (DTF Printing)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
            <a 
              href="https://wa.me/226XXXXXXXX?text=Bonjour%20!%20Je%20viens%20de%20configurer%20mon%20projet%20sur%20votre%20site.%20Je%20souhaite%20personnaliser%20le%20T-shirt%20Premium%20Coton%20avec%20la%20technique%20DTF.%20Comment%20procéder%20pour%20le%20visuel%20?"
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-success btn-block lg:w-auto px-8 text-white font-black tracking-wide shadow-lg hover:scale-[1.02] active:scale-95 transition-all bg-[#25D366] border-none rounded-xl text-sm md:text-base h-14 min-h-14 animate-pulse hover:animate-none"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 fill-current mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.451 5.42 1.453 5.334 0 9.673-4.34 9.677-9.684.002-2.588-1.002-5.022-2.827-6.849-1.826-1.826-4.26-2.827-6.85-2.828-5.344 0-9.682 4.34-9.687 9.686-.001 1.955.509 3.864 1.48 5.519l-.97 3.543 3.633-.953z"/>
              </svg>
              Envoyer ma configuration par WhatsApp
            </a>
          </div>

            {/* =========================================================
                NOUVEAU BLOC : LES GARANTIES ET INFOS CLIENTS
               ========================================================= */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-2">
              
              {/* Délai de réalisation */}
              <div className="flex gap-3 md:flex-col items-start bg-base-100 p-3 rounded-xl border border-base-300/60 shadow-2xs">
                <div className="p-2 rounded-lg bg-primary/10 text-primary text-lg">
                  ⏳
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wide">Délai Rapide</h4>
                  <p className="text-[11px] font-light text-base-content/70 mt-0.5">
                    Prêt en 24h à 48h selon les quantités.
                  </p>
                </div>
              </div>

              {/* Livraison / Retrait Boutique */}
              <div className="flex gap-3 md:flex-col items-start bg-base-100 p-3 rounded-xl border border-base-300/60 shadow-2xs">
                <div className="p-2 rounded-lg bg-success/10 text-success text-lg">
                  🛵
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wide">Retrait & Livraison</h4>
                  <p className="text-[11px] font-light text-base-content/70 mt-0.5">
                    Livraison à Ouaga ou retrait gratuit en boutique.
                  </p>
                </div>
              </div>

              {/* Validation humaine */}
              <div className="flex gap-3 md:flex-col items-start bg-base-100 p-3 rounded-xl border border-base-300/60 shadow-2xs">
                <div className="p-2 rounded-lg bg-info/10 text-info text-lg">
                  ✅
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wide">Maquette Gratuite</h4>
                  <p className="text-[11px] font-light text-base-content/70 mt-0.5">
                    Validation visuelle sur WhatsApp avant impression.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* =========================================================
              BOUTON DE REDIRECTION WHATSAPP FINAL
             ========================================================= */}
          

        </div>

      </div>

        
      </div>
      

    </div>









    </div>
  );
};

export default PersonalisationPage;
