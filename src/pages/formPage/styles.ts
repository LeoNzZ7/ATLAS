import styled from "styled-components";

export const RegisterPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
`;

export const CreateAccountArea = styled.div<{login: boolean}>`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color ${props => props.login ? '#FFA500' : '#fff'};

    .registerForm {
        width: 500px;
        text-align: center;
        input {
            padding: 10px;
            height: 30px;
            margin-top: 5px;
            margin-bottom: 5px;
            border: 0;
            border-radius: 0px 12px 12px 0px;
            outline: 0;
            background-color: #EEE;
        };

        h1 {
            margin-bottom: 20px;
            font-size: 45px;   
        };
        
        form {
            display: flex;
            flex-direction: column;

        };

        .icon {
            margin-top: 5px;
            width: 30px;
            height: 30px;
            background-color: #EEE;
            border-radius: 12px 0px 0px 12px;
            padding: 5px;
        }

        .userName {
            display: flex;

            input {
                width: 50%;
                margin-right: 10px;
            };

            
            input:last-child {
                margin-right: 0;
            };
        };

        .label {
            display: flex;
            
            input {
                width: 100%;
            }
        }

        .submit {
            height: 50px;
            width: 50%;
            margin: auto;
            margin-top: 20px;
            background-color: #FFA500;
            color: #FFF;
            font-weight: bold;
            border-radius: 25px;
            cursor: pointer;

            &:hover {
                background-color: #EE9400;
            };
        };
    };

    .createAccountLink {
        text-align: center;
        color: #FFF;

         h1 {
            margin: 0;
        };

        p {
            font-size: 20px;
        };

        button {
            padding: 15px 25px;
            border: 1.5px solid #FFF;
            border-radius: 25px;
            color: #FFF;
            font-weight: bold;
            background-color: transparent;
            cursor: pointer;

            &:hover {
                background-color: #EE9400;
            };
        };
    };
`;

export const LoginAccountArea = styled.div<{login: boolean}>`
    background-color: ${props => props.login ? '#FFF' : '#FFA500'};
    width: ${props => props.login ? '550px' : '700px'};
    display: flex;
    padding: 20px;
    justify-content: center;
    align-items: center;

    .registerForm {
        input {
            padding: 10px;
            height: 30px;
            margin-top: 5px;
            margin-bottom: 5px;
            border: 0;
            border-radius: 0px 12px 12px 0px;
            outline: 0;
            background-color: #EEE;
        };
    };

    div {
        text-align: center;

        h1 {
            margin-bottom: ${props => props.login ? '30px' : '0px'};
            color: ${props => props.login ? '#000' : '#FFF'};
            font-size: 45px;   
        };

        p {
            color: #FFF;
            font-size: 20px;
        };

        .label {
            display: flex;
            
            input {
                width: 100%;
            };
        };

        .icon {
            margin-top: 5px;
            width: 30px;
            height: 30px;
            background-color: #EEE;
            border-radius: 12px 0px 0px 12px;
            padding: 5px;
        };

        button {
            padding: 15px 25px;
            border: 1.5px solid #FFF;
            border-radius: 25px;
            color: #FFF;
            font-weight: bold;
            background-color: transparent;
            cursor: pointer;

            &:hover {
                background-color: #EE9400;
            }
        };

        .submit {
            height: 50px;
            width: 50%;
            margin: auto;
            margin-top: 20px;
            background-color: #FFA500;
            color: #FFF;
            font-weight: bold;
            border-radius: 25px;
            cursor: pointer;
            border: 0;

            &:hover {
                background-color: #EE9400;
            };
        };
    };
`;