import Button from '../Button/Button';
import Style from './HomePage.module.css';

export default function HomePage(){
        return(
            <>
            <div>
                <main className={Style.Main}>
                    <article className={Style.apresentacao}>
                        <div className={Style.elementos}>
                            <h2>Opa! meu nome é </h2>
                            <h1>Henrique Martins</h1>
                            <p>Desenvolvedor e Freelancer front-end em soluções Web e inovações tecnológica. Estudante de tecnologia.</p>
                            <Button title="Visualizar currículo"/>
                        </div>
                    </article>
                </main>    
            </div>   
            </>
        )
}