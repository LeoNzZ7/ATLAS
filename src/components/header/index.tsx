import * as c from './styles';
import { Link } from 'react-router-dom';
import { MagnifyingGlass, User } from 'phosphor-react';
import { ThemeSwitcher } from '../themeSwitcher';
import {useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { SearchBar } from '../searchBar';
import { useState } from 'react';

export const Header = () => {
    const navigate = useNavigate();
    const themeStatus = useAppSelector(state => state.theme.status);

    const [searchBar, setSearchaBar] = useState(false);

    return(
        <>
        <c.Container>
            <c.TitleArea>
                <h1>ATLAS</h1>
            </c.TitleArea>
            <c.LinksArea theme={themeStatus}>
                <ul>
                    <li><Link to='/'>Página Inicial</Link></li>
                    <li><Link to='/'>Destinos</Link></li>
                    <li><Link to='/'>Pacotes</Link></li>
                    <li><Link to='/'>Feedbacks</Link></li>
                    <li><Link to='/'>Contato</Link></li>
                </ul>
            </c.LinksArea> 
            <c.MenuArea theme={themeStatus}>
                <MagnifyingGlass className='icon' onClick={e => setSearchaBar(!searchBar)} size={25} weight="bold" />
                <User className='icon' onClick={e => navigate('/form')} size={25} weight="bold" />
                <ThemeSwitcher/>
            </c.MenuArea>
        </c.Container>
        <SearchBar searchBar={searchBar}/>
        </>
    );
}