/*Components  */
import Button from '../../components/Button/Button';
import Style from './HomePage.module.css';
import {Card} from '../../components/Card/Card.jsx';

/*Imagens */
import img from '../../img/personagem.webp';
import freelancerCard1 from '../../img/cards/freelancerCard1.webp';
import atakadoCard2 from '../../img/cards/atakadoCard2.webp';
import movePastCard3 from '../../img/cards/movePastCard3.webp';
import f1FrontCard4 from '../../img/cards/f1FrontEndCard4.webp';
import f1BackCard5 from '../../img/cards/f1BackCard5.webp';
import igniteFeedCard6 from '../../img/cards/igniteFeed.webp';

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
                    <section className={Style.section3}>
                        <div className={Style.section3_elementos}>
                            <div className={Style.section3_elementos_titulo}>
                                <h1>Projetos</h1>
                            </div>
                            <div className={Style.section3_elementos_card}>
                                    <Card 
                                        img={freelancerCard1}
                                        titule="Contabilidade - Freelancer"
                                        descricao="Criação de um site institucional profissional, com foco na apresentação da empresa, sua história, missão, valores e todos os serviços oferecidos. O projeto tem como objetivo fortalecer a presença digital, ampliar a visibilidade da marca e funcionar como um cartão de visita online. O site foi desenvolvido utilizando WordPress, garantindo facilidade na gestão de conteúdos, escalabilidade e excelente desempenho."
                                        deploy="https://queirozecarvalho.com/"
                                        tech={['Wordpress','CSS', 'SEO', 'Domínio & Hospedagem']}
                                        
                                    />
                                    <Card 
                                        img={atakadoCard2}
                                        titule="Estoque Atakado"
                                        descricao="Sistema de Gestão de Produto em estoque para mercado. Permitindo um controle e detalhe dos itens armazenando. Com todas as operações básica, salvar, atualizar, listar e excluir. Sendo uma aplicação completa do Front-end ao Back-end."
                                        code="https://github.com/HenriqueMart/estoqueAtakado"
                                        deploy="https://henriquemart.github.io/estoqueAtakado/"
                                        tech={['React','JavaScript', 'HTML & CSS']}
                                        
                                    />
                                    <Card 
                                        img={movePastCard3}
                                        titule="MOVEPAST"
                                        descricao="Script desenvolvido para automatizar a transferência de arquivos PDF de diversas pastas para uma única pasta centralizada. Ele foi criado para resolver um problema enfrentado no ambiente corporativo, onde a dispersão de arquivos PDF em múltiplas pastas dificultava a organização e o gerenciamento desses documentos, gerando desafios operacionais."
                                        code="https://github.com/HenriqueMart/Automacao-MovePast"
                                        tech={['Python', 'Automação']}
                                    />
                                    <Card 
                                        img={f1FrontCard4}
                                        titule="Formula 1 | Front-End"
                                        descricao="O F1 é um projeto web desenvolvido ao longo da disciplina de Desenvolvimento Web em 2024, com o propósito de oferecer aos fãs de Fórmula 1 uma experiência interativa de acompanhamento de pilotos, equipes e resultados de corridas. Construído como projeto de aprendizado, o sistema integra front‑end responsivo e um back‑end para o login na página."
                                        code="https://github.com/HenriqueMart/projeto-web"
                                        deploy="https://henriquemart.github.io/projeto-web/infraestrutura/page/Home/f1/f1.html"
                                        tech={['HTML & CSS', 'JavaScript']}
                                    />
                                    <Card 
                                        img={f1BackCard5}
                                        titule="Formula 1 | Back-End"
                                        descricao="API para login do Front-end Formula 1. Permitindo controle de acesso entre o usuário. Projeto desenvolvido para o aprendizado da matéria de Web."
                                        code="https://github.com/HenriqueMart/api-formula-1"
                                        tech={['Java', 'Spring boot']}
                                    />
                                    <Card 
                                        img={igniteFeedCard6}
                                        titule="igniteFeed"
                                        descricao="Feed de Rede Social Projeto desenvolvido em React com foco no aprendizado dos principais conceitos da biblioteca, como componentização, gerenciamento de estado, comunicação entre componentes (pai e filho) e rotas.
                                        O sistema simula um feed de rede social, permitindo interações e atualizações dinâmicas, seguindo boas práticas de desenvolvimento e organização de código."
                                        code="https://github.com/HenriqueMart/igniteFeed"
                                        tech={['React', 'HTML & CSS']}
                                    />
                            </div>
                        </div>
                    </section>
                    <section className={Style.section4}>
                        <div>
                            <div className={Style.section4}>
                                <h1>Serviços</h1>
                            </div>
                        </div>
                    </section>
                    <section className={Style.section5}>
                        <div>
                            <div className={Style.section5}>
                                <h1>Habilidade</h1>
                            </div>
                        </div>
                    </section>
                    <section className={Style.section5}>
                        <div>
                            <div className={Style.section5}>
                                <h1>Contato</h1>
                            </div>
                        </div>
                    </section>
                </main>    
            </div>   
            </>
        )
}