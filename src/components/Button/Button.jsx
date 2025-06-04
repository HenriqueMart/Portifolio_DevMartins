import Style from './Button.module.css';

export default function Button({title}){
    return(
        <>
            <button className={Style.Button}>{title}</button>
        </>
    )
}