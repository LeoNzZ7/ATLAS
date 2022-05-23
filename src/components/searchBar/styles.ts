import styled from "styled-components";

export const Container = styled.div<{searchBar: boolean, theme: string}>`
    max-width: 100vw;
    height: 75px;
    background-color: ${props => props.theme === 'Dark' ? '#333' : '#FFF'};
    position: abosolute;
    padding: 10px 20px;
    transform: translateX(${props => props.searchBar ? '0px' : '-1500px'});
    border-bottom: 2px solid #000;

    form {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;

        input {
            padding: 10px;
            width: 100%;
            outline: 0;
            border-radius: 0px 25px 25px 0px;
            border: 0;
            background-color: transparent;
            border: 1px solid ${props => props.theme === 'Dark' ? '#FFF' : '#333'};
            color: ${props => props.theme === 'Dark' ? '#FFF' : '#000'};
            border-left: 0;

            &::placeholder {
                color: ${props => props.theme === 'Dark' ? '#FFF' : '#000'};
                font-weight: bold;
            }
        };
    };

    button {
        background-color: #FFA500;
        border: 0;
        border: 1px solid  ${props => props.theme === 'Dark' ? '#FFF' : '#333'};
        height: 37px;
        width: 60px;
        border-radius: 25px 0px 0px 25px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    };  

    .icon {
        color:  ${props => props.theme === 'Dark' ? '#FFF' : '#333'};
    };
`;