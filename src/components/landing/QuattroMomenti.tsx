const momenti = [
  {
    icon: "☕",
    nome: "Mattino",
    orario: "8 – 11:30",
    img: "/mattino.jpg",
    desc: "Colazione vera: cornetti integrali, avocado toast, yogurt bowl, porridge. I dolci di Fabio in vetrina.",
    voci: ["Avocado Toast", "Yogurt Bowl", "Cornetti integrali", "Biscotti e crostatine di Fabio"],
    range: "da 1,50 € a 12,00 €",
  },
  {
    icon: "🥗",
    nome: "Pranzo",
    orario: "12 – 15",
    img: "/pranzo.jpg",
    desc: "Poke, insalate, pizze impasto integrale, wrap. Menu fisso, ingredienti veri.",
    voci: ["Poke Salmone / Pollo / Tonno / Veg", "Caesar · Salmon · Bresaola Bowl", "Caprese Bowl · Wrap", "3 Pizze integrali"],
    range: "da 9,00 € a 13,50 €",
  },
  {
    icon: "💪",
    nome: "Post-allenamento",
    orario: "tutto il giorno",
    img: "/post.jpg",
    desc: "Smoothie proteici e di frutta, centrifughe, toast, tramezzini, snack veloci, macedonia.",
    voci: ["Smoothie proteico", "Centrifughe", "Toast e tramezzini", "Macedonia di stagione", "Quadrato di pizza"],
    range: "da 2,50 € a 9,50 €",
  },
  {
    icon: "🍷",
    nome: "Aperitivo",
    orario: "18 – 21",
    img: "/aperitivo.jpg",
    desc: "Pizza al taglio dal forno a legna, tagliere, cocktail base, birra alla spina, vino della casa.",
    voci: ["Pizza al taglio", "Tagliere misto", "Spritz · Hugo · Negroni Sbagliato · Gin Tonic", "Mocktail analcolico"],
    range: "da 4,00 € a 12,00 €",
  },
];

const QuattroMomenti = () => {
  return (
    <section id="momenti" className="bg-cream py-10 sm:py-14 lg:py-20">
      <div className="container-wt">
        <div className="text-center mb-8 sm:mb-10">
          <div className="section-eyebrow mb-1 text-xl sm:text-2xl">tutto il giorno</div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">Quattro momenti, una casa</h2>
          <p className="text-sm sm:text-base text-ink-soft mt-2 max-w-xl mx-auto">Lo stesso Bistro cambia ritmo durante la giornata. Tutte le voci sono <strong>anche da portar via</strong>.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-5 lg:gap-7">
          {momenti.map((m) => (
            <article key={m.nome} className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition">
              <div className="aspect-[16/9] overflow-hidden bg-secondary">
                <img src={m.img} alt={m.nome} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-baseline justify-between mb-1.5">
                  <h3 className="text-xl sm:text-2xl font-extrabold flex items-center gap-2">
                    <span>{m.icon}</span> {m.nome}
                  </h3>
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-ink-soft">{m.orario}</span>
                </div>
                <p className="text-sm sm:text-base text-foreground mb-2.5">{m.desc}</p>
                <ul className="text-xs sm:text-sm text-ink-soft space-y-0.5 mb-2.5">
                  {m.voci.map((v) => <li key={v}>· {v}</li>)}
                </ul>
                <div className="text-xs sm:text-sm font-bold text-primary">{m.range}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuattroMomenti;
