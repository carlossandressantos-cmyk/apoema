import { Background } from './components/Background';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { History } from './components/History';
import { GamesGrid } from './components/GamesGrid';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-pink-500 selection:text-white">
      <Background />
      <Header />
      <main>
        <Hero />
        <History />
        <GamesGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
