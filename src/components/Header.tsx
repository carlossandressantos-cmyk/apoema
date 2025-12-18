import { motion } from 'framer-motion';
import { ShoppingBag, Gamepad2, Store } from 'lucide-react';

export const Header = () => {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference text-white"
    >
      <motion.img 
        whileHover={{ scale: 1.05 }}
        src="https://github.com/carlossandressantos-cmyk/jogoarquivomorto01/blob/main/IMG_0823.png?raw=true" 
        alt="Apoema Logo" 
        className="h-8 md:h-10 cursor-pointer opacity-90 hover:opacity-100 transition-opacity"
      />

      <nav className="hidden md:flex gap-8 text-xs font-medium uppercase tracking-widest text-gray-300">
        <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
          <Store size={14} /> Loja Oficial
        </a>
        <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
          <Gamepad2 size={14} /> Steam (Breve)
        </a>
        <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
          <ShoppingBag size={14} /> Marketplace
        </a>
      </nav>
    </motion.header>
  );
};
