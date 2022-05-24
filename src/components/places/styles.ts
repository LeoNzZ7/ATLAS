import styled from "styled-components";

export const Container = styled.div<{theme: string}>`
    width: 1080px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    div {
        margin-bottom: 20px;
        margin-top: 20px;
        width: 250px;
        height: 325px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        border: 1px solid ${props => props.theme === 'Dark' ? '#FFF' : '#000'};
        border-radius: 20px;
    };

    h1, h3 {
        margin: 0;
        margin-bottom: 20px;
        font-size: 22px;
    };

    img {
        width: 200px;
        height: 120px;
        border: 1px solid #fff;
        box-shadow: 0px 0px 3px ${props => props.theme === 'Dark' ? '#FFF' : '#333'};
        margin: 10px 0px;
    };

    button {
        background-color: #FFA500;
        width: 150px;
        padding: 10px;
        cursor: pointer;
        border-radius: 25px;
        font-weight: bold;
        border: 1px solid #000;
        margin-bottom: 20px;
        color: ${props => props.theme === 'Dark' ? '#000' : '#FFF'};

        &:hover {
            background-color: #EE9400;
        }
    }
`;