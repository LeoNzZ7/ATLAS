import { Power } from 'phosphor-react';
import * as c from './styles'

export const ThemeSwitcher = () => {
    return (
        <c.Container>
            <c.Handler>
                <Power size={20} weight="bold" />
            </c.Handler>
        </c.Container>
    );
}