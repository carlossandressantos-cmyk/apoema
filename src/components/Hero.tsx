import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 max-w-4xl"
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="inline-block mb-6 text-xs md:text-sm font-medium tracking-[0.3em] text-purple-400 uppercase"
        >
          Crafting Legends
        </motion.span>
        
        <h1 className="text-5xl md:text-8xl font-semibold tracking-tighter text-white mb-8 leading-[0.9]">
          APOEMA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 opacity-90">
            STUDIO
          </span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-light text-balance">
          Criamos experiências artesanais onde o toque físico do tabuleiro encontra a liberdade do digital.
        </p>
      </motion.div>

      {/* Subtle scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};
