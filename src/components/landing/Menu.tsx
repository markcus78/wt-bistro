import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type Item = { nome: string; desc?: string; prezzo: string; tag?: "veg" | "novità" | "estate" | "ruota" };

const sezioni: { titolo: string; emoji: string; items: Item[] }[] = [
  {
    titolo: "Mattino",
    emoji: "☕",
    items: [
      { nome: "Avocado Toast", desc: "pane integrale di casa, avocado, olio EVO", prezzo: "7,30 €" },
      { nome: "Avocado Toast & Uovo", desc: "+ uovo sodo o in camicia", prezzo: "9,00 €" },
      { nome: "Avocado Toast con Salmone", desc: "pane integrale, avocado, salmone affumicato", prezzo: "12,00 €" },
      { nome: "Yogurt Bowl", desc: "yogurt greco, frutti rossi, banana, granola, semi di chia, miele", prezzo: "7,80 €", tag: "veg" },
      { nome: "Porridge d'avena", desc: "avena, latte vegetale, banana, frutti rossi, miele", prezzo: "7,00 €", tag: "veg" },
      { nome: "Cornetto integrale", desc: "vuoto / marmellata stagionale / crema", prezzo: "1,50 – 1,80 €" },
      { nome: "Biscotti di Fabio", desc: "frollini integrali, d'avena", prezzo: "0,80 € · 6 € hg" },
      { nome: "Crostatina della casa", desc: "marmellata stagionale", prezzo: "3,50 €", tag: "ruota" },
    ],
  },
  {
    titolo: "Pranzo",
    emoji: "🥗",
    items: [
      { nome: "Poke Salmone", desc: "riso o farro, salmone, avocado, cetriolo, carota, edamame, sesamo", prezzo: "12,50 €" },
      { nome: "Poke Pollo", desc: "riso o farro, pollo grigliato, avocado, mais, carota, zucchine", prezzo: "11,00 €" },
      { nome: "Poke Tonno", desc: "riso o farro, tonno, avocado, pomodorini, carota, mais", prezzo: "11,00 €", tag: "novità" },
      { nome: "Poke Veg", desc: "riso o farro, edamame, avocado, carota, zucchine, hummus", prezzo: "10,00 €", tag: "veg" },
      { nome: "Caesar Salad", desc: "insalata, pollo, pomodorini, crostini, grana, dressing parmigiano", prezzo: "12,50 €" },
      { nome: "Salmon Salad", desc: "insalata, salmone, avocado, rucola, lime", prezzo: "13,50 €" },
      { nome: "Bresaola Bowl", desc: "farro tiepido, bresaola, rucola, grana, pomodorini, olio EVO", prezzo: "12,00 €" },
      { nome: "Caprese Bowl", desc: "farro tiepido, mozzarella, pomodorini, rucola, avocado, basilico", prezzo: "11,00 €", tag: "veg" },
      { nome: "Wrap Pollo & Veg", desc: "piadina integrale, pollo, hummus, rucola, pomodorini, zucchine", prezzo: "10,00 €" },
      { nome: "Pizza Margherita", desc: "impasto integrale, pomodoro, mozzarella, basilico", prezzo: "9,00 €", tag: "veg" },
      { nome: "Pizza Pollo & Veg", desc: "pomodoro, mozzarella, pollo grigliato, zucchine, rucola", prezzo: "11,00 €" },
      { nome: "Pizza Bresaola & Grana", desc: "pomodoro, mozzarella, bresaola, grana, rucola", prezzo: "12,00 €" },
      { nome: "Pizza del giorno", desc: "vedi lavagna al banco", prezzo: "10,00 €", tag: "ruota" },
      { nome: "Piatto del giorno", desc: "vellutate d'inverno, gazpacho e zuppe fredde d'estate", prezzo: "9,00 €", tag: "ruota" },
    ],
  },
  {
    titolo: "Post-allenamento · snack",
    emoji: "💪",
    items: [
      { nome: "Smoothie Frutti Rossi", desc: "mirtilli, lamponi, fragole, banana, yogurt, miele, latte", prezzo: "7,00 €" },
      { nome: "Smoothie Tropical", desc: "mango, fragole, ananas, succo mela, datteri", prezzo: "7,00 €", tag: "veg" },
      { nome: "Smoothie Proteico Mocha", desc: "whey, espresso, yogurt, cacao, latte", prezzo: "9,50 €" },
      { nome: "Smoothie Proteico Peanut", desc: "whey, burro arachidi, banana, cacao, yogurt, latte", prezzo: "9,50 €" },
      { nome: "Centrifuga Helper", desc: "carota, mela, ananas, curcuma", prezzo: "7,50 €", tag: "veg" },
      { nome: "Centrifuga Green", desc: "mela, spinacino, cetriolo, sedano, zenzero", prezzo: "7,50 €", tag: "veg" },
      { nome: "Toast Ham & Cheese", desc: "pane di casa, prosciutto cotto, formaggio", prezzo: "5,00 €" },
      { nome: "Toast Bresaola", desc: "pane di casa, bresaola, grana, olio EVO", prezzo: "6,00 €" },
      { nome: "Tramezzino Bresaola & Rucola", desc: "pane integrale morbido di casa", prezzo: "5,50 €" },
      { nome: "Tramezzino Salmone & Avocado", desc: "pane integrale morbido di casa", prezzo: "7,00 €" },
      { nome: "Hummus & Crudités", desc: "hummus, carote, sedano, cetriolo", prezzo: "5,50 €", tag: "veg" },
      { nome: "Quadrato di Pizza", desc: "trancetto della pizza del giorno", prezzo: "2,50 €" },
      { nome: "Macedonia di stagione", desc: "frutta a cubetti tagliata al momento", prezzo: "5,00 €", tag: "veg" },
      { nome: "Sorbetto alla frutta", desc: "limone o frutti rossi", prezzo: "4,00 €", tag: "estate" },
      { nome: "Yogurt gelato", desc: "+ topping a scelta", prezzo: "5,00 €", tag: "estate" },
      { nome: "Patatine classiche", prezzo: "2,50 €" },
      { nome: "Bibite gassate", desc: "Coca-Cola Classic · Aranciata", prezzo: "3,00 €" },
      { nome: "Energy drink", prezzo: "4,00 €" },
      { nome: "Barrette proteiche", desc: "foodspring · Yamamoto", prezzo: "3,50 – 4,00 €" },
    ],
  },
  {
    titolo: "Aperitivo serale",
    emoji: "🍷",
    items: [
      { nome: "Pizza al taglio", desc: "trancio della pizza del giorno", prezzo: "4,00 €" },
      { nome: "Tagliere misto", desc: "bresaola, prosciutto crudo, grana, olive, crostini · per 2", prezzo: "12,00 €" },
      { nome: "Spritz Aperol", prezzo: "6,00 €" },
      { nome: "Hugo", prezzo: "6,00 €" },
      { nome: "Negroni Sbagliato", prezzo: "7,00 €" },
      { nome: "Gin Tonic", prezzo: "7,00 €" },
      { nome: "Mocktail analcolico", desc: "succo + tonica + frutta fresca di stagione", prezzo: "5,00 €" },
      { nome: "Birra alla spina", desc: "0,4 L chiara", prezzo: "5,00 €" },
      { nome: "Vino della casa al calice", desc: "bianco · rosso", prezzo: "4,50 €" },
    ],
  },
  {
    titolo: "Estate · Piscina (giugno – settembre)",
    emoji: "🌊",
    items: [
      { nome: "Insalata di Pasta", desc: "pasta integrale, pomodorini, mozzarella, olive, basilico, olio EVO", prezzo: "10,00 €", tag: "veg" },
      { nome: "Insalata di Pasta con Tonno", prezzo: "11,00 €" },
      { nome: "Insalata di Riso", desc: "riso, pomodorini, tonno, mais, uova sode, olive", prezzo: "10,00 €" },
      { nome: "Caprese piatto", desc: "mozzarella, pomodorini, basilico, olio EVO", prezzo: "9,00 €", tag: "veg" },
      { nome: "Centrifughe in bottiglietta", desc: "Helper · Green, take-away", prezzo: "7,50 €", tag: "veg" },
      { nome: "Macedonia in vaschetta", prezzo: "5,00 €", tag: "veg" },
    ],
  },
];

const tagStyle: Record<string, string> = {
  veg: "bg-primary/10 text-primary",
  "novità": "bg-accent text-accent-foreground",
  estate: "bg-accent/10 text-accent border border-accent/30",
  ruota: "bg-secondary text-foreground border border-border",
};

const Menu = () => {
  return (
    <section id="menu" className="bg-background py-10 sm:py-14 lg:py-20">
      <div className="container-wt max-w-4xl">
        <div className="text-center mb-8 sm:mb-10">
          <div className="section-eyebrow mb-1 text-xl sm:text-2xl">il menu completo</div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">Cosa trovi al banco</h2>
          <p className="text-sm sm:text-base text-ink-soft mt-2 max-w-xl mx-auto">Apri ogni sezione per voci, ingredienti e prezzi.</p>
        </div>

        <Accordion type="multiple" defaultValue={["sezione-0"]} className="space-y-2 sm:space-y-3">
          {sezioni.map((s, i) => (
            <AccordionItem key={s.titolo} value={`sezione-${i}`} className="bg-card rounded-xl border border-border px-4 sm:px-6 shadow-sm">
              <AccordionTrigger className="text-base sm:text-lg lg:text-xl font-bold hover:no-underline py-3.5 sm:py-4">
                <span className="flex items-center gap-2 sm:gap-3 text-left">
                  <span className="text-xl sm:text-2xl">{s.emoji}</span> {s.titolo}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-0 pb-4">
                <ul className="divide-y divide-border">
                  {s.items.map((it) => (
                    <li key={it.nome} className="py-2.5 sm:py-3 flex gap-3 sm:gap-4 justify-between items-start">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline gap-1.5 sm:gap-2">
                          <span className="font-semibold text-sm sm:text-base text-foreground">{it.nome}</span>
                          {it.tag && (
                            <span className={`text-[9px] sm:text-[10px] font-bold tracking-wider uppercase px-1.5 sm:px-2 py-0.5 rounded ${tagStyle[it.tag]}`}>
                              {it.tag}
                            </span>
                          )}
                        </div>
                        {it.desc && <div className="text-xs sm:text-sm text-ink-soft mt-0.5">{it.desc}</div>}
                      </div>
                      <div className="text-sm sm:text-base font-bold text-foreground whitespace-nowrap">{it.prezzo}</div>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-6 sm:mt-8 text-[11px] sm:text-xs text-ink-soft">
          Pane prodotto internamente con farina a basso indice glicemico. Allergeni e dettagli al banco.
        </div>
      </div>
    </section>
  );
};

export default Menu;
