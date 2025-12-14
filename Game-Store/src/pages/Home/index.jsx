import './styles.scss';
import GameCard from '../../components/GameCard';

const games = [
    {
        id: 1,
        title: 'Grand Theft Auto V',
        price: '199,90',
        image: '/images/games/gtav.jpg',
    },
    {
        id: 2,
        title: 'Elden Ring',
        price: '249,90',
        image: '/images/games/elden-ring.jpg',
    },
    {
        id: 3,
        title: 'God of War Ragnarök',
        price: '299,90',
        image: '/images/games/gowr.jpg',
    },
    {
        id: 4,
        title: 'Red Dead Redemption 2',
        price: '159,90',
        image: '/images/games/rdr2.jpg',
    },
];

export default function Home() {
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
                        <button className="btn btn--primary">Explorar Jogos</button>
                        <button className="btn btn--ghost">Ver ofertas</button>
                    </div>
                </div>
            </section>

            <section className="games">
                <h2>Jogos em destaque</h2>

                <div className="games_grid">
                    {games.map(game => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </div>
            </section>
        </main>
    );
}