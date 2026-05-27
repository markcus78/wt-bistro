const valori = [
  { titolo: "Coerenza", desc: "quello che servo è in linea con la persona che stai diventando." },
  { titolo: "Onestà", desc: "ingredienti veri, niente super food miracolosi. Se è semplice te lo dico." },
  { titolo: "Accessibilità", desc: "non snob, non hardcore-protein. Entri, leggi e capisci." },
  { titolo: "Velocità", desc: "chi ha 3 minuti si serve in 3 minuti. Take-away o seduto, decidi tu." },
  { titolo: "Comunità", desc: "il posto degli iscritti. Lo staff ti riconosce, sa cosa prendi di solito." },
];

const Valori = () => {
  return (
    <section className="bg-cream-alt py-10 sm:py-14 lg:py-18">
      <div className="container-wt max-w-5xl">
        <div className="text-center mb-6 sm:mb-8">
          <div className="section-eyebrow mb-1 text-xl sm:text-2xl">cosa ci tiene insieme</div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">I nostri cinque valori</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-4">
          {valori.map((v) => (
            <div key={v.titolo} className="bg-card rounded-xl p-3.5 sm:p-5 border border-border text-center">
              <div className="font-extrabold text-primary text-sm sm:text-base uppercase tracking-wider mb-1 sm:mb-2">{v.titolo}</div>
              <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Valori;
