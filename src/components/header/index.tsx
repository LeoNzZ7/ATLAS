import * as c from './styles';
import { Link } from 'react-router-dom';
import { MagnifyingGlass, User } from 'phosphor-react';
import { ThemeSwitcher } from '../themeSwitcher';

export const Header = () => {
    return(
        <c.Container>
            <c.TitleArea>
                <h1>ATLAS</h1>
            </c.TitleArea>
            <c.LinksArea>
                <ul>
                    <li><Link to='/'>Página Inicial</Link></li>
                    <li><Link to='/'>Destinos</Link></li>
                    <li><Link to='/'>Pacotes</Link></li>
                    <li><Link to='/'>Feedbacks</Link></li>
                    <li><Link to='/'>Contato</Link></li>
                </ul>
            </c.LinksArea> 
            <c.MenuArea>
                <MagnifyingGlass className='icon' size={30} weight="bold" />
                <User className='icon' size={30} weight="bold" />
                <ThemeSwitcher />
            </c.MenuArea>
        </c.Container>
    );
}