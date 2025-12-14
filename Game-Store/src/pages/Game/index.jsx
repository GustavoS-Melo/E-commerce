import { useParams } from 'react-router-dom';
import './styles.scss';

const games = [
    {
        id: 1,
        title: 'Grand Theft Auto V',
        price: '199,90',
        image: '/images/games/gtav.jpg',
        description: 'Explore o mundo aberto de Los Santos com ação intensa, missões épicas e uma história envolvente. Grand Theft Auto V (GTA V) é um aclamado jogo de ação e aventura em mundo aberto desenvolvido pela Rockstar Games e ambientado no estado fictício de San Andreas. ',
    },
    {
        id: 2,
        title: 'Elden Ring',
        price: '249,90',
        image: '/images/games/elden-ring.jpg',
        description: 'Elden Ring é um RPG de ação em um vasto mundo aberto de fantasia medieval, criado pela FromSoftware com a colaboração de Hidetaka Miyazaki e George R. R. Martin, conhecido por sua exploração livre, combate desafiador e rica lore, onde o jogador explora as "Terras Intermédias" como um "Semi-Deus" para se tornar o Senhor do Anel. ',
    },
    {
        id: 3,
        title: 'God of War',
        price: '299,90',
        image: '/images/games/gowr.jpg',
        description: 'God of War Ragnarök é um jogo de ação e aventura em terceira pessoa que continua a saga de Kratos e seu filho Atreus pelos Nove Reinos nórdicos, focando em impedir o temido Ragnarök (o fim do mundo), enquanto exploram o destino, a profecia e a complexa relação pai e filho, com combates viscerais usando Machado Leviatã e Lâminas do Caos, quebra-cabeças e uma narrativa profunda',
    },
    {
        id: 4,
        title: 'Red Dead Redemption 2',
        price: '159,90',
        image: '/images/games/rdr2.jpg',
        description: 'Red Dead Redemption 2 (RDR2) é um jogo de ação e aventura em mundo aberto desenvolvido pela Rockstar Games, lançado originalmente em 2018 e que permanece em 2025 como um dos títulos mais aclamados e tecnicamente avançados da indústria. ',
    },
];

export default function Game() {
    const { id } = useParams();
    const game = games.find(g => g.id === Number(id));

    if (!game) {
        return <p className='not-found'>Jogo não encontrado</p>;
    }

    return (
        <section className="game-details">
            <div className="game-details_container">

                <div className="game-details_image">
                    <img src={game.image} alt={game.title} />
                </div>

                <div className="game-details_info">
                    <h1>{game.title}</h1>
                    <span className="price">R$ {game.price}</span>
                    <p>{game.description}</p>

                    <button className="btn btn-primary">
                        Comprar agora
                    </button>
                </div>

            </div>
        </section>
    );
}