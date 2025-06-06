import Button from '../Button/Button';
import Style from './HomePage.module.css';
import img from '../../img/personagem.webp';

export default function HomePage(){
    const url = 'https://drive.google.com/file/d/1aDriHBRkWsnkzxjwSpVypfxemdQD0Lr0/view?usp=drive_link';

    return(
            <>
            <div>
                <main className={Style.Main}>
                    <article className={Style.Main_apresentacao}>
                        <div className={Style.Main_apresentacao_elementos}>
                            <h2>Opa! meu nome é </h2>
                            <h1>Henrique Martins</h1>
                            <p>Desenvolvedor e Freelancer front-end em soluções Web e inovações tecnológica. Estudante de tecnologia.</p>
                            <a href={url} target='_blank'>
                                <Button title="Visualizar currículo"/>
                            </a>
                        </div>
                    </article>
                    <section className={Style.section2} >
                        <div className={Style.section2_elementos}>
                            <figure className={Style.section2_figure}>
                                <img src={img} alt="minha imagens" />
                        </figure>
                            <div className={Style.section2_elementos_titulo}>
                                <h1>Sobre</h1>
                                <h2>Quem é Henrique Martins?</h2>
                                <p>Sou cristão, tenho 22 anos e sou apaixonado por tecnologia e como ela pode transformar e contribuir na evolução da nossa sociedade. Buscando resolver diversos problemas do cotidiano.</p>
                                <p>Tenho experiência no desenvolvimento web como freelancer e no desenvolvimento do projeto Cidade Inteligente com a parceria da Prefeitura e IFBA que atuo atualmente. Nesse projeto atuo como Analista e mapeador de processo e desenvolvedor Web. Sempre encontrando soluções e propondo novas abordagem por meio da tecnologia.</p>
                                <p>Na programação, atualmente utilizo e estudo tecnologia como JavaScript e React, Java com Spring Boot, HTML e CSS. Utilizando essas tecnologias para aplicações e site. Wordpress para Paginas institucional. Utilizando metodologia ágil.</p>
                                <p>Sempre evoluindo e aprendendo novas abordagem para propor novas soluções por meio da tecnologia.</p>
                            </div>
                            
                        </div>
                    </section>
                </main>    
            </div>   
            </>
        )
}