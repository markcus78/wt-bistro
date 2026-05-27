const Veloce = () => {
  return (
    <section id="veloce" className="bg-cream py-10 sm:py-14 lg:py-18">
      <div className="container-wt max-w-5xl">
        <div className="text-center mb-7 sm:mb-9">
          <div className="section-eyebrow mb-1 text-xl sm:text-2xl">anche se hai 3 minuti</div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Veloce davvero, <span className="text-primary">senza compromessi</span>
          </h2>
          <p className="text-sm sm:text-base text-ink-soft mt-3 max-w-2xl mx-auto leading-relaxed">
            Anche se entri di corsa, esci con qualcosa di buono. Vetrina pronta al banco,
            take-away di default su tutto il menu, coda dedicata iscritti col tuo sconto e
            <em> Allunga</em> tracciato in automatico.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
          <div className="bg-card rounded-xl p-5 sm:p-6 border border-border text-center">
            <div className="text-4xl sm:text-5xl font-black text-primary mb-2 leading-none">≤3<span className="text-2xl sm:text-3xl"> min</span></div>
            <div className="text-sm sm:text-base font-bold text-foreground mb-1">grab-and-go</div>
            <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
              Smoothie, tramezzini, quadrato di pizza, macedonia, frutta. Già pronti in vetrina.
            </p>
          </div>
          <div className="bg-card rounded-xl p-5 sm:p-6 border border-border text-center">
            <div className="text-4xl sm:text-5xl font-black text-primary mb-2 leading-none">5–7<span className="text-2xl sm:text-3xl"> min</span></div>
            <div className="text-sm sm:text-base font-bold text-foreground mb-1">se ti siedi</div>
            <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
              Poke, bowl, insalate, pizza al piatto. Assemblati al momento sui banchi freddi.
            </p>
          </div>
          <div className="bg-card rounded-xl p-5 sm:p-6 border border-border text-center">
            <div className="text-4xl sm:text-5xl font-black text-primary mb-2 leading-none">−10%</div>
            <div className="text-sm sm:text-base font-bold text-foreground mb-1">coda iscritti</div>
            <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
              Riconoscimento automatico, sconto in cassa e giorni <em>Allunga</em> tracciati senza dover dire nulla.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Veloce;
