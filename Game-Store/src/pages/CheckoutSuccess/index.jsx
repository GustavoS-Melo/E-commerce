import { Link } from 'react-router-dom'
import './styles.scss'

export default function CheckoutSuccess(){
    return (
        <div className="checkout container">
            <h2>Compra realizada com sucesso!</h2>
            <p>Seu pagamento foi processado.</p>

            <Link to='/' className='btn btn--primary'>
            Voltar ao Inicio
            </Link>
        </div>
    );
}