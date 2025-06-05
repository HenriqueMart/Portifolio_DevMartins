import Button from '../Button/Button';
import Style from './HomePage.module.css';
import img from '../../img/personagem.webp'

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
                            <div className='section2_elementos_titulo'>
                                <h1>Titulo</h1>
                                <h2>subTitulo</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda laborum velit perspiciatis nesciunt officia iusto vel minima ducimus accusamus libero ipsa explicabo ipsam, nihil id iste, similique vero, dolor incidunt?</p>
                            </div>
                            <figure className={Style.section2_figure}>
                                <img src={img} alt="minha imagens" />
                        </figure>
                        </div>
                    </section>
                </main>    
            </div>   
            </>
        )
}