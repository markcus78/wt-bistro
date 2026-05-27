const Manifesto = () => {
  return (
    <section className="bg-background py-10 sm:py-14 lg:py-18 border-y border-border">
      <div className="container-wt max-w-3xl text-center">
        <div className="font-display text-xl sm:text-2xl text-primary mb-3">il cambio di direzione</div>
        <p className="text-lg sm:text-xl lg:text-2xl text-foreground leading-relaxed font-medium">
          Da Wellness Town cambia il Bistro. Cucina più semplice, ingredienti veri,
          niente prodotti industriali nei piatti freschi.
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-ink-soft leading-relaxed mt-4 sm:mt-5">
          Coerente con il motivo per cui sei venuto qui:
          allenarti, e <em>stare bene</em> anche quando mangi —
          che tu abbia 3 minuti o un'ora.
        </p>
      </div>
    </section>
  );
};

export default Manifesto;
