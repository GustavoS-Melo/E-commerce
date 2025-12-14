import { Link } from 'react-router-dom'
import './styles.scss'

export default function CheckoutError(){
    return(
        <div className="checkout container">
            <h2>Houve um erro no pagamento</h2>
            <p>Tente novamente</p>

            <Link to='/cart' className="btn btn--ghost">
                Voltar ao carrinho
            </Link>
        </div>
    );
}