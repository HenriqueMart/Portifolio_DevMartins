import Style from './Card.module.css';
import Button from '../Button/Button';


export function Card({img, titule, descricao, deploy, code}){
    return(
        <>
            <div className={Style.container}>
                <div className={Style.container_card}>
                    <figure className={Style.card_elements_img}>
                            <img src={img} alt="Primeiro Projeto" />
                    </figure>
                    <div className={Style.titule}>
                            <h1>{titule}</h1>
                            <p>{descricao}</p>
                            
                    </div>
                    <div className={Style.tech}>
                        <p >Tecnologia: </p>
                    </div>
                    <div className={Style.button}>{
                        deploy && (
                            <a href={deploy} target='_blank'>
                                <Button title="Visualizar"/>
                            </a>
                        )}
                        {code && (
                            <a href={code} target='_blank'>
                                <Button title="Código"/>
                            </a>
                            
                        )}
                        
                        
                        
                </div>
                </div>
            </div>
        </>
    )
}