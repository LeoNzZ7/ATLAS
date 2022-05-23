import styled from "styled-components";

export const PageArea = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme === 'Dark' ? '#333' : '#FFF'};
`;

export const HeaderArea = styled.div<{theme: string}>`
    height: 75px;
    background-color: ${props => props.theme === 'Dark' ? '#333' : '#fff'};
    padding-bottom: 1px;
    border-bottom: 1px solid #000;
`;

