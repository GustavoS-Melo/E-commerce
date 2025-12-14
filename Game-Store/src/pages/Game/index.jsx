import { useParams } from 'react-router-dom';
import './styles.scss';
import { getGameById } from '../../services/gamesService'

export default function Game() {
    const { id } = useParams();
    const game = getGameById(id);

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
                    <span className="price">
                        R$ {game.price.toFixed(2).replace('.', ',')}
                    </span>
                    <p>{game.description}</p>

                    <button className="btn btn-primary">
                        Comprar agora
                    </button>
                </div>

            </div>
        </section>
    );
}