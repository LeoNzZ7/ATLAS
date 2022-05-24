import styled from "styled-components";

export const PageArea = styled.div<{theme: string}>`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme === 'Dark' ? '#333' : '#FFF'};
`;

export const HeaderArea = styled.div<{theme: string}>`
    height: 75px;
    background-color: ${props => props.theme === 'Dark' ? '#333' : '#FFF'};
    padding-bottom: 1px;
    border-bottom: 1px solid #000;
`;

export const PlacesArea = styled.div<{theme: string}>`
    text-align: center;
    color: ${props => props.theme === 'Dark' ? '#FFF' : '#000'};

    h1 {
        margin: 20px 0px;
    };

    h3 {
        margin: 0px;
        margin-bottom: 20px;
    };
`;

export const PackgeArea = styled.div<{theme: string}>`
    text-align: center;
    color: ${props => props.theme === 'Dark' ? '#FFF' : '#333'};

    h1 {
        margin: 20px 0px;
    };

    h3 {
        margin: 0px;
        margin-bottom: 40px;
    };
`;

export const FeedbacksArea = styled.div<{theme: string}>`
    text-align: center;
    color: ${props => props.theme === 'Dark' ? '#FFF' : '#333'};

    h1 {
        margin: 20px 0px;
    };

    h3 {
        margin: 0px;
        margin-bottom: 20px;
    };
`;

export const Contact = styled.div`
    background-color: ${props => props.theme === 'Dark' ? '#333' : '#FFF'};
`;
