import './NavBar.css';

const  NavLinks = () => {
    return(
        <nav className='NavLinks'>
            <ul>
                <li>
                   <a href="#">Sobre</a>
                </li>
                <li>
                    <a href="#">Projetos</a>
                </li>
                <li>
                    <a href="#">Servicos</a>
                </li>
                <li>
                    <a href="#">Habilidades</a>
                </li>
                <li>
                    <a href="#">Contato</a>
                </li>
            </ul>
        </nav>
    )

}
export default NavLinks;