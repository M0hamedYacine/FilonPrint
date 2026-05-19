import { useState, useRef, useEffect } from "react";

const products = [
  { id: 1, name: "SHORT WAFFLE KNIT SPRINTER", price: "50$", category: "originals", img: "/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Bleu_KX1246_000_plp_model.webp" },
  { id: 2, name: "VESTE LÉGÈRE RUNNER", price: "75$", category: "sport", img: "/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Bleu_KX1246_000_plp_model.webp" },
  { id: 3, name: "PANTALON TECH STRETCH", price: "60$", category: "originals", img: "/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Bleu_KX1246_000_plp_model.webp" },
  { id: 4, name: "BASKET FOAM ULTRA BOOST", price: "90$", category: "performance", img: "/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Bleu_KX1246_000_plp_model.webp" },
  { id: 5, name: "TEE PREMIUM COTON LOURD", price: "45$", category: "essentials", img: "/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Bleu_KX1246_000_plp_model.webp" },
  { id: 6, name: "CASQUETTE LOGO BRODÉ", price: "30$", category: "accessoires", img: "/src/assets/SHORT_WAFFLE_KNIT_SPRINTER_Bleu_KX1246_000_plp_model.webp" },
];

const VISIBLE = 4;

export default function ProductCarousel() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);
  const maxIndex = products.length - VISIBLE;

  const goTo = (index: number) => {
    setCurrent(Math.max(0, Math.min(index, maxIndex)));
  };

  const getOffset = () => {
    if (!trackRef.current) return 0;
    const trackW = trackRef.current.offsetWidth;
    const cardW = (trackW - (VISIBLE - 1) * 12) / VISIBLE;
    return current * (cardW + 12);
  };

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset(getOffset());
  }, [current]);

  useEffect(() => {
    const handleResize = () => setOffset(getOffset());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [current]);

  return (
    <div className="">
      {/* Track + arrows */}
      <div className="flex items-center gap-2">
        {/* Prev */}
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          className="flex-shrink-0 w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-gray-50 disabled:opacity-30 transition-opacity"
          aria-label="Précédent"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Carousel */}
        <div ref={trackRef} className="overflow-hidden flex-1">
          <div
            className="flex gap-3 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="group flex-shrink-0 flex flex-col bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
                style={{ width: `calc(${100 / VISIBLE}% - ${(12 * (VISIBLE - 1)) / VISIBLE}px)` }}
              >
                <div className="overflow-hidden bg-gray-50 aspect-[3/4]">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 flex flex-col grow">
                  <p className="font-bold font-mono text-lg text-black">{product.price}</p>
                  <p className="text-sm font-medium text-zinc-800 line-clamp-2 grow">{product.name}</p>
                  <p className="text-xs uppercase tracking-wider text-gray-400 mt-1">{product.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next */}
        <button
          onClick={() => goTo(current + 1)}
          disabled={current === maxIndex}
          className="flex-shrink-0 w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-gray-50 disabled:opacity-30 transition-opacity"
          aria-label="Suivant"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Aller à la position ${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              i === current ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}