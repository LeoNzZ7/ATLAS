import { EnvelopeSimple } from 'phosphor-react';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import * as c from './styles';

export const Contact = () => {
    const themeStatus = useAppSelector(state => state.theme.status);

    return (
        <c.Container theme={themeStatus} >
            <form>
                <div>
                    <input type='text'  placeholder='Nome' required/>
                    <input type='email' placeholder='Email' required/>
                </div>
                <input type='text' placeholder='Assunto' required/>
                <textarea placeholder='Digite sua mensagem' required/>
                <button>Enviar</button>
            </form>
        </c.Container>
    );
}