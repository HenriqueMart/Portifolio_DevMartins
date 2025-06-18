import Style from './Card.module.css';
import Button from '../Button/Button';
import { Tag } from './Tag/Tag';


export function Card({img, titule, descricao, deploy, code, tech = []}){
    console.log(tech);
    
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
                        <p >Tecnologia:</p> 
                        {tech.map((item, index) => ( // Lógica para Tag passada por props por array
                            <Tag key={index} tech={item}/>
                        ))}
                    </div>
                    <div className={Style.button}>{
                        deploy && (
                            
                                <button>
                                    <a 
                                    href={deploy}
                                    target='_blank'>
                                    Visualizar
                                    </a>
                                </button>
                            
                        )}
                        {code && (
                            
                                <button><a 
                                    href={code} 
                                    target='_blank'>
                                    Código
                                    </a>
                                </button>
                            
                            
                        )}
                        
                        
                        
                </div>
                </div>
            </div>
        </>
    )
}