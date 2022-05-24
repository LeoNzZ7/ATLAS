import { Star, User } from 'phosphor-react';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import * as c from './styles';

export const Feedbacks = () => {
    const themeStatus = useAppSelector(state => state.theme.status);

    return(
        <c.Container theme={themeStatus} >
            <div>
                <User className='icon' size={44} weight="bold" />
                <h1>João</h1>
                <div className='stars' >
                    <Star size={20} weight="bold" />
                    <Star size={20} weight="bold" />
                    <Star size={20} weight="bold" />
                    <Star size={20} weight="bold" />
                    <Star size={20} weight="bold" />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi.
                </p>
            </div>
            <div>
                <User className='icon' size={44} weight="bold" />
                <h1>Pedro</h1>
                <div className='stars' >
                    <Star size={20} weight="bold" />
                    <Star size={20} weight="bold" />
                    <Star size={20} weight="bold" />
                    <Star size={20} weight="bold" />
                    <Star size={20} weight="bold" />
                </div>
                <p>
                    harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! 
                </p>
            </div>
            <div>
                <User className='icon' size={44} weight="bold" />
                <h1>Alícia</h1>
                <div className='stars' >
                    <Star size={20} weight="bold" />
                    <Star size={20} weight="bold" />
                    <Star size={20} weight="bold" />
                    <Star size={20} weight="bold" />
                    <Star size={20} weight="bold" />
                </div>
                <p>
                    harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! 
                </p>
            </div>
        </c.Container>
    );
}