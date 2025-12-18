import { motion } from 'framer-motion';

export const History = () => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-8 text-white">
            Nossa Jornada
          </h2>
          <div className="space-y-8 border-l border-white/10 pl-8">
            <div className="relative">
              <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#0a0a0a]" />
              <span className="text-sm text-purple-400 font-mono mb-2 block">2015</span>
              <p className="text-gray-400 leading-relaxed">
                Tudo começou numa palestra que provou que um único criador poderia dar vida a mundos inteiros.
              </p>
            </div>
            <div className="relative">
              <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-pink-500 border-4 border-[#0a0a0a]" />
              <span className="text-sm text-pink-400 font-mono mb-2 block">2023</span>
              <p className="text-gray-400 leading-relaxed">
                Esse sonho virou a <strong className="text-white font-medium">Apoema</strong>. Do épico espacial Gaia aos Party Games dinâmicos.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel p-10 rounded-3xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/20 transition-colors duration-700" />
          <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed relative z-10">
            "Criamos para quem valoriza o <span className="text-white font-normal">toque físico</span> do tabuleiro unido à <span className="text-white font-normal">liberdade</span> do digital."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
