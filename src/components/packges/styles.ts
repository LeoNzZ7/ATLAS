import styled from "styled-components";

export const Container = styled.div<{theme: string}>`
    display: flex;
    width: 1080px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: ${props => props.theme === 'Dark' ? '#FFF' : '#000'};

    div {
        flex: 1;
        margin: 0px 20px;
        border: 1px solid ${props => props.theme === 'Dark' ? '#FFF' : '#000'};
        border-radius: 20px;
        padding: 10px;
    };

    h1 {
        margin: 0;
        margin-top: 20px;
        font-size: 40px;
    };

    h4 {
        margin: 0;
        font-size: 20px;
    };

    h1, h4 {
        margin-bottom: 15px;
    };

    button {
        margin-bottom: 20px;
        padding: 10px 60px;
        background-color: #FFA500;
        border-radius: 25px;
        cursor: pointer;
        color: ${props => props.theme === 'Dark' ? '#FFF' : '#000'};
        font-weight: bold;

        &:hover {
            background-color: #EE9400;
        };
    };
`;