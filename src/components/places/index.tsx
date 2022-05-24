import * as c from './styles';
import { citys } from '../../data/data.citys';
import { useAppSelector } from '../../redux/hooks/useAppSelector';

export const Place = () => {
    const themeStatus = useAppSelector(state => state.theme.status);

    return (
        <c.Container theme={themeStatus} >
            {citys.map((item, index) => (
                <div key={index} >
                    <h1>{item.cityName}</h1>
                    <img src={item.img[1]} />
                    <h3>{item.country}</h3>
                    <button>Veja mais</button>
                </div>
            ))}
        </c.Container>
    );
}