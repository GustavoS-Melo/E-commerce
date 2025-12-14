import './styles.scss';
import { getAllGames } from '../../services/gamesService';
import GameCard from '../../components/GameCard';
import { useRef } from 'react'

export default function Home() {

    const games = getAllGames();
    const gamesRef = useRef(null);

    return (
        <main className="home">
            <section className="hero">
                <div className="hero_content">
                    <h1>
                        Jogos Digitais <br />
                        <span>Sem Limites</span>
                    </h1>

                    <p>
                        Descubra, compre e jogue os melhores títulos para PC, PlayStation e Xbox em um só lugar
                    </p>

                    <div className="hero_actions">
                        <button 
                            className="btn btn--primary" onClick={() => {
                                gamesRef.current?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}>
                            Explorar Jogos
                        </button>
                        <button className="btn btn--ghost">Ver ofertas</button>
                    </div>
                </div>
            </section>

            <section className="games">
                <h2 ref={gamesRef}>Jogos em destaque</h2>

                <div className="games_grid">
                    {games.map(game => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </div>
            </section>
        </main>
    );
}