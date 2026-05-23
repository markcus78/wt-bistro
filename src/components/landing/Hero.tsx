const Hero = () => {
  return (
    <section className="relative bg-cream-alt overflow-hidden">
      <div className="container-wt grid lg:grid-cols-2 gap-6 lg:gap-12 py-10 sm:py-14 lg:py-20 items-center">
        <div className="z-10">
          <div className="font-display text-xl sm:text-2xl lg:text-3xl text-primary mb-2">
            da WT cambia il bistro
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight text-foreground leading-none mb-3">
            WT <span className="text-primary">Bistro</span>
          </h1>
          <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink-soft leading-tight mb-5 lg:mb-7">
            cibo vero,<br />dove ti alleni
          </p>
          <div className="space-y-1.5 mb-6 lg:mb-7 text-sm sm:text-base">
            <div className="flex items-baseline gap-3">
              <span className="text-xl sm:text-2xl font-extrabold text-accent">-10%</span>
              <span className="text-foreground">sconto iscritti su tutto il menu</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-xl sm:text-2xl font-extrabold text-accent">+1g</span>
              <span className="text-foreground">di palestra in regalo ogni 10 € spesi</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <a href="#menu" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 sm:px-6 sm:py-3 font-semibold text-sm sm:text-base hover:bg-primary/90 transition">
              Scopri il menu
            </a>
            <a href="#dove" className="inline-flex items-center justify-center rounded-md bg-background border border-border text-foreground px-5 py-2.5 sm:px-6 sm:py-3 font-semibold text-sm sm:text-base hover:bg-secondary transition">
              Vieni a trovarci
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
          <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
            <img src="/hero.jpg" alt="Piatto del Bistro" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg mt-6 sm:mt-8">
            <img src="/hero2.jpg" alt="Piatto del Bistro" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
