import './styles.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">

        <div className="footer_brand">
          <h2>
            <span>Black</span>Screen Games
          </h2>
          <p>
            Sua loja digital de jogos. Os melhores títulos,
            as melhores ofertas.
          </p>
        </div>

        <div className="footer_links">
          <h4>Institucional</h4>
          <a href="#">Sobre</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
        </div>

        <div className="footer_links">
          <h4>Ajuda</h4>
          <a href="#">Suporte</a>
          <a href="#">Contato</a>
          <a href="#">FAQ</a>
        </div>

      </div>

      <div className="footer_bottom">
        © {new Date().getFullYear()} BlackScreen Games. Todos os direitos reservados.
      </div>
    </footer>
  );
}
