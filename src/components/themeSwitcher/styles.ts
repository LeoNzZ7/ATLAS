import styled from "styled-components";

export const Container = styled.div<{theme: string}>`
    width: 75px;
    height: 30px;
    background-color: ${props => props.theme === 'Dark' ? '#FFA500' : '#FFF'};
    border-radius: 20px 20px;
    padding: 15px 5px;
    display: flex;
    align-items: center;
    border: 2px solid #000;
`;

export const Handler = styled.div<{theme: string}>`
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    border: 3px solid #000;
    background-color: transparent;
    box-shadow: 0px 0px 1px #000;
    transform: translateX(${props => props.theme === 'Dark' ? '0px' : '37px'});
`;