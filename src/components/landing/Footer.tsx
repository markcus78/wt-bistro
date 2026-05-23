const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8 sm:py-10">
      <div className="container-wt grid sm:grid-cols-2 gap-5 sm:gap-8 items-start">
        <div>
          <div className="text-2xl sm:text-3xl font-black tracking-tight">
            WT <span className="text-primary">Bistro</span>
          </div>
          <p className="font-display text-xl sm:text-2xl text-background/80 mt-1">cibo vero, dove ti alleni</p>
          <p className="text-xs sm:text-sm text-background/70 mt-3 max-w-md">
            Il Bistro di <a href="https://www.wellnesstown.it" className="underline hover:text-background">Wellness Town</a>, Roma EUR.
          </p>
        </div>
        <div className="text-xs sm:text-sm text-background/70 sm:text-right space-y-1.5">
          <div>Via Francesco Giangiacomo 55 · Roma EUR</div>
          <div>Wi-Fi gratuito · paghi alla cassa</div>
          <div>Riconoscimento iscritti con tessera o QR</div>
          <div className="text-[10px] sm:text-xs text-background/50 mt-4">
            © {new Date().getFullYear()} Wellness Town · Tutti i diritti riservati
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
