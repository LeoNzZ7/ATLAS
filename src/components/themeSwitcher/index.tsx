import { Power } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { setThemeStatus } from '../../redux/reducers/themeReducer';
import * as c from './styles'

export const ThemeSwitcher = () => {
    const themeStatus = useAppSelector(state => state.theme.status)
    const dispatch = useDispatch();

    const handleThemeSwitcher = () => {
        dispatch(setThemeStatus(themeStatus === 'Dark' ? 'light' : 'Dark'));
    };

    return (
        <c.Container theme={themeStatus} onClick={handleThemeSwitcher} >
            <c.Handler theme={themeStatus} >
                <Power size={20} weight="bold" />
            </c.Handler>
        </c.Container>
    );
}