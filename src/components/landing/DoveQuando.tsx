const DoveQuando = () => {
  return (
    <section id="dove" className="bg-background py-10 sm:py-14 lg:py-20">
      <div className="container-wt grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start">
        <div>
          <div className="section-eyebrow mb-1 text-xl sm:text-2xl">trovarci</div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 sm:mb-4">Dove e quando</h2>
          <p className="text-base sm:text-lg text-foreground mb-1.5">
            <strong>Wellness Town</strong> · Via Francesco Giangiacomo 55 · Roma EUR
          </p>
          <p className="text-sm sm:text-base text-ink-soft mb-4 sm:mb-5">
            Il WT Bistro è nel corridoio prima dei tornelli — ci passi entrando e uscendo dalla palestra.
          </p>
          <div className="bg-card rounded-xl border border-border p-4 sm:p-5 space-y-2 sm:space-y-3">
            <div className="flex justify-between text-xs sm:text-sm">
              <span className="font-bold flex items-center gap-2">☕ Mattino</span>
              <span className="text-ink-soft">8:00 – 11:30</span>
            </div>
            <div className="flex justify-between text-xs sm:text-sm">
              <span className="font-bold flex items-center gap-2">🥗 Pranzo</span>
              <span className="text-ink-soft">12:00 – 15:00</span>
            </div>
            <div className="flex justify-between text-xs sm:text-sm">
              <span className="font-bold flex items-center gap-2">💪 Snack &amp; post-allenamento</span>
              <span className="text-ink-soft">tutto il giorno</span>
            </div>
            <div className="flex justify-between text-xs sm:text-sm">
              <span className="font-bold flex items-center gap-2">🍷 Aperitivo</span>
              <span className="text-ink-soft">18:00 – 21:00</span>
            </div>
          </div>
          <p className="mt-4 sm:mt-5 text-xs sm:text-sm text-ink-soft">
            Wi-Fi gratuito al WT Bistro. Pagamento alla cassa.
            Riconoscimento iscritti con tessera o QR per applicare lo sconto e tracciare Allunga.
          </p>
        </div>
        <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-border">
          <iframe
            title="WT Bistro — Wellness Town Roma"
            src="https://www.google.com/maps?q=Via+Francesco+Giangiacomo+55,+Roma&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default DoveQuando;
