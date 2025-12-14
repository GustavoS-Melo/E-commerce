import './styles.scss';

export default function GameCard({game}){
    return(
        <div className="game-card">
            <div className="game-card_image">
                <img src={game.image} alt={game.title} />
            </div>

            <div className="game-card_content">
                <h3>{game.title}</h3>
                <span className="game-card_price">R$ {game.price}</span>

                <button className="btn btn-primary">Comprar</button>
            </div>
        </div>
    );
}