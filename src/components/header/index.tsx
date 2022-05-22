import * as c from './styles';
import { Link } from 'react-router-dom';

export const Header = () => {
    return(
        <c.Container>
            <c.TitleArea>
                <h1>ATLAS</h1>
            </c.TitleArea>
            <c.LinksArea>
                <ul>
                    <li><Link to='/'>Página Inicial</Link></li>
                </ul>
            </c.LinksArea> 
            <c.MenuArea>

            </c.MenuArea>
        </c.Container>
    );
}