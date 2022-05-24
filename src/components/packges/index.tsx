import { AirplaneTilt } from 'phosphor-react';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import * as c from './styles';

export const Packges = () => {
    const themeStatus = useAppSelector(state => state.theme.status);

    return(
        <c.Container theme={themeStatus} >
            <div>
                <h1>Standart</h1>
                <AirplaneTilt size={100} weight="bold" />
                <h4>Voos de classe B</h4>
                <h4>Acesso a áreas exclusivas em aeroportos</h4>
                <h4>Descontos em hoteis parceiros</h4>
                 <h4>2% Cashback</h4>
                <button>Assinar</button>
            </div>
            <div>
                <h1>Premium</h1>
                <AirplaneTilt size={100} weight="bold" />
                <h4>Voos de classe A</h4>
                <h4>Acesso a áreas vips em aeroportos</h4>
                <h4>Descontos em hoteis parceiros</h4>
                <h4>4% Cashback</h4>
                <button>Assinar</button>
            </div>
            <div>
                <h1>Plus Premium</h1>
                <AirplaneTilt size={100} weight="bold" />
                <h4>Voos de classe A executiva</h4>
                <h4>Acesso a áreas vips e executivas em aeroportos</h4>
                <h4>Descontos em hoteis parceiros</h4>
                <h4>8% Cashback</h4>
                <button>Assinar</button>
            </div>
        </c.Container>
    );
}