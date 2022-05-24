import styled from "styled-components";

export const Container = styled.div<{theme: string}>`
    width: 1080px;
    font-size: 30px;
    margin: auto;
    display: flex;
    padding: 20px 0px;
    justify-content: center;

    form {
        display: flex;  
        flex-direction: column;
        width: 50%;
        
        input {
            width: 100%;
            border: 0;
            border-bottom: 1px solid ${props => props.theme === 'Dark' ? '#FFF' : '#000'};
            margin: 30px 0px;
            background-color: transparent;
            outline: 0;
            color: ${props => props.theme === 'Dark' ? '#FFF' : '#000'};

            &::placeholder {
                color: ${props => props.theme === 'Dark' ? '#FFF' : '#000'};
            }
        };

        textarea {
            min-height: 200px;
            max-height: 200px;
            margin-top: 30px;
            border: 1px solid ${props => props.theme === 'Dark' ? '#FFF' : '#000'};
            max-width: 100%;
            min-width: 100%;
            border-radius: 10px;
            padding: 10px;
            background-color: transparent;
            color: ${props => props.theme === 'Dark' ? '#FFF' : '#000'};
            outline: 0;

            &::placeholder {
                color: ${props => props.theme === 'Dark' ? '#FFF' : '#000'};
            }
        };

        button {
            padding: 10px 0px;
            margin: auto;
            margin-top: 20px;
            width: 50%;
            background-color: #FFA500;
            cursor: pointer;
            border-radius: 25px;
            font-weight: bold;

            &:hover {
                background-color: #EE9400;
            }
        };
    };
`;