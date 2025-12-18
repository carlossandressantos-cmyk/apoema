import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const GameCard = ({ 
  title, 
  description, 
  tag, 
  image, 
  link, 
  delay 
}: { 
  title: string; 
  description: string; 
  tag: string; 
  image: string; 
  link: string; 
  delay: number;
}) => (
  <motion.a 
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: delay * 0.1, duration: 0.8 }}
    className="group relative block aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden bg-gray-900"
  >
    <div className="absolute inset-0">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
    </div>

    <div className="absolute inset-0 p-8 flex flex-col justify-end">
      <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
        <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md rounded-full text-white border border-white/10">
          {tag}
        </span>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm md:text-base font-light line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {description}
        </p>
      </div>
      
      <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
        <ArrowUpRight className="text-white" size={20} />
      </div>
    </div>
  </motion.a>
);

export const GamesGrid = () => {
  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-3xl md:text-4xl font-medium text-white">Nossos Jogos</h2>
        <span className="hidden md:block text-sm text-gray-500">Explore o catálogo</span>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <GameCard 
          title="Arquivo Morto"
          description="Mergulhe em evidências reais. Um jogo de investigação onde seu raciocínio é a única saída."
          tag="Best Seller"
          image="https://images.unsplash.com/photo-1495576596703-e0063a132b6e?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb"
          link="http://arquivomortogame.com.br"
          delay={1}
        />
        <GameCard 
          title="Glitch"
          description="O sistema falhou. Encontre a lógica no caos neste Party Game eletrizante."
          tag="Dinâmico"
          image="https://images.unsplash.com/photo-1764258057610-be7ca21a0978?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb"
          link="https://glitchogame.netlify.app"
          delay={2}
        />
      </div>
    </section>
  );
};
