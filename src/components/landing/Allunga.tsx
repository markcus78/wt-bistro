const Allunga = () => {
  return (
    <section id="allunga" className="bg-accent text-accent-foreground py-10 sm:py-14 lg:py-20 relative overflow-hidden">
      <div className="container-wt max-w-4xl">
        <div className="text-center mb-8 sm:mb-10">
          <div className="font-display text-xl sm:text-2xl text-accent-foreground/80 mb-1">il programma iscritti</div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-tight">
            Allunga il tuo<br />abbonamento
          </h2>
          <p className="text-base sm:text-lg mt-4 opacity-95 max-w-2xl mx-auto">
            Ogni 10 € spesi al Bistro ti regalano <strong>1 giorno di palestra in più.</strong>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-xl mx-auto">
          <div className="bg-accent-foreground/10 backdrop-blur rounded-xl p-4 sm:p-6 text-center border border-accent-foreground/20">
            <div className="text-4xl sm:text-5xl font-black mb-1">-10%</div>
            <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider opacity-90">sconto iscritti<br />sul listino</div>
          </div>
          <div className="bg-accent-foreground/10 backdrop-blur rounded-xl p-4 sm:p-6 text-center border border-accent-foreground/20">
            <div className="text-4xl sm:text-5xl font-black mb-1">+1g</div>
            <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider opacity-90">di palestra<br />ogni 10 € spesi</div>
          </div>
        </div>

        <div className="bg-accent-foreground/5 rounded-2xl p-5 sm:p-7 border border-accent-foreground/15">
          <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-80 mb-2">come funziona, un esempio</div>
          <p className="text-sm sm:text-base leading-relaxed">
            Il tuo abbonamento scade il <strong>30 giugno</strong>. Da inizio anno hai speso <strong>87 €</strong> al WT Bistro.
            Al rinnovo ti accreditiamo <strong>+8 giorni</strong> sull'abbonamento in corso: scade il <strong>8 luglio</strong>.
          </p>
          <p className="text-xs sm:text-sm opacity-80 mt-3">
            Il calcolo si fa una volta sola, alla scadenza. I giorni allungano l'abbonamento attivo. Compatibile con lo sconto iscritti -10%.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Allunga;
