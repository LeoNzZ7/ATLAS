import { MagnifyingGlass } from 'phosphor-react';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import * as c from './styles'

type Props = {
    searchBar: boolean
};

export const SearchBar = ({searchBar}: Props) => {
    const themeStatus = useAppSelector(state => state.theme.status);

    return(
        <c.Container searchBar={searchBar} theme={themeStatus} >
            <form>
                <button>
                    <MagnifyingGlass className='icon' size={20} weight="bold" />
                </button>
                <input type='search' placeholder='Pesquisar'/>
            </form>
        </c.Container>
    );
}