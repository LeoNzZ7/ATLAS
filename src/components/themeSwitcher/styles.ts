import styled from "styled-components";

export const Container = styled.div`
    width: 80px;
    height: 35px;
    background-color: #FFA500;
    border-radius: 20px 20px;
    padding: 10px;
    display: flex;
    align-items: center;
    border: 2px solid #000;
`;

export const Handler = styled.div`
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    border: 3px solid #000;
    background-color: transparent;
    box-shadow: 0px 0px 1px #000;
    transform: translateX(35px)
`;