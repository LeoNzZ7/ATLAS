import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1080px;
    margin: auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;

    h1 {
        margin: 0;
    };
`;

export const TitleArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFA500;
    flex: 1;
`;

export const LinksArea = styled.div<{theme: string}>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 30px;

    ul {
        list-style: none;
        display: flex;
        padding: 0px;
        
        li {
            padding: 0px 10px;
            
            a { 
                color: ${props => props.theme === 'Dark' ? '#FFF' : '#000'};
                text-decoration: none;
                font-weight: bold;
                border-bottom: 5px solid ${props => props.theme === 'Dark' ? '#333' : '#FFF'};
                padding-bottom: 24px;
                text-transform: uppercase;
                font-size: 14px;

                &:hover {
                    border-bottom: 5px solid #FFA500;
                    color: ${props => props.theme === 'Dark' ? '#CCC' : '#777'};
                };
            };
        };
    };
`;

export const MenuArea = styled.div<{theme: string}>`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex: 1;
    cursor: pointer;

    .icon {
        color: ${props => props.theme === 'Dark' ? '#FFF' : '#000'};
    };
`;


