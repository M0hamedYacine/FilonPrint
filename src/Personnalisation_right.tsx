const PersonnalisationContent = () => {
  return (
    <div>
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
    </div>
  );
};

export default PersonnalisationContent;
