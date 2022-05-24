import styled from "styled-components";

export const Container = styled.div<{theme: string}>`
    display: flex;
    width: 1080px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;

    h1 {
        margin: 0;
    }

    div {
        flex: 1;
        border: 1px solid #000;
        margin: 0px 20px;
        padding: 20px;
        border-radius: 20px;
        height: 325px;
    };

    .icon {
        width: 150px;
        height: 150px;
        background-color: ${props => props.theme === 'Dark' ? '#000' : '#FFF'};
        border-radius: 100%;
        color: ${props => props.theme === 'Dark' ? '#FFF' : '#000'};
        border: 1px solid #000;
    };

    .stars {
        height: 25px;
        border: 0;
        padding: 0;
        color: ${props => props.theme === 'Dark' ? '#FFF' : '#000'};
    };

    p {
        margin: 0;
        margin: 0px 0px
    };
`;