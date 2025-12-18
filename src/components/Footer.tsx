export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 hover:opacity-60 transition-opacity">
        <p className="text-xs tracking-[0.2em] uppercase">
          Apoema Studio &copy; {new Date().getFullYear()}
        </p>
        <p className="text-xs tracking-[0.2em] uppercase">
          Design Artesanal & Estratégia
        </p>
      </div>
    </footer>
  );
};
