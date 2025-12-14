import './styles.scss';
import { Link } from 'react-router-dom';

export default function GameCard({game}){
    return(
    <Link to={`/game/${game.id}`} className="game-card">
            <div className="game-card_image">
                <img src={game.image} alt={game.title} />
            </div>

            <div className="game-card_content">
                <h3>{game.title}</h3>
                <span className="game-card_price">
                    R$ {game.price.toFixed(2).replace('.', ',')}
                </span>

                <button className="btn btn-primary"  onClick={(e) => e.preventDefault()}>Comprar</button>
            </div>
        </Link>
    );
}