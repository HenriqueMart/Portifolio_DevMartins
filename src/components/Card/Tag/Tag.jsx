import style from './Tag.module.css'

export function Tag({tech}){

    return(
        <div className={style.tag}>
            <p>{tech}</p>
        </div>
    )
}