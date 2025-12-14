import './styles.scss';

export default function Home(){
    return(
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
                        <btutton className="btn btn--primary">Explorar Jogos</btutton>
                        <btutton className="btn btn--ghost">Ver ofertas</btutton>
                    </div>
                </div>
            </section>
        </main>
    )
}