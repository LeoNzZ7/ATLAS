import styled from "styled-components";
import balneario from '../../images/balneário.images/balneario1.jpg'
import cancun from '../../images/cancun.images/cancun1.jpg'
import maldivas from '../../images/maldivas.images/maldivas1.jpg'

export const Container = styled.div<{searchBar: boolean}>`
    height: calc(100vh - 75px);
    margin-top: ${props => props.searchBar ? '73px' : '0px'};
`;

export const SlideArea = styled.div`
    height: 550px;
    width: 300vw;
    display: flex;
`;

export const Slides = styled.div<{currentSlide: 1 | 2 | 3, theme: string}>`
    height: 100%;
    padding: 30px;
    width: 100vw;
    background-position: center;
    background-size: cover;
    
    &:first-child {
        transform: translateX(${props => props.currentSlide === 1 ? '0px' : '-100vw'});
        background-image: url(${balneario})
    };

    &:nth-child(2) {
        transform: translateX(${props => props.currentSlide === 2 ? '-100vw' : '-200vw'});
        background-image: url(${cancun})
    };

    &:last-child {
        transform: translateX(${props => props.currentSlide === 3 ? '-200vw' : '-300vw'});
        background-image: url(${maldivas})
    };

    div {
        color: #FFF;

        h1 {
            font-size: 50px;
        };

        h3 {
            margin-bottom: 40px;
        }
        
        button {
            width: 300px;
            height: 50px;
            background-color: #FFA500;
            border-radius: 30px;
            border: 1px solid ${props => props.theme === 'Dark' ? '#333' : '#FFF'};
            cursor: pointer;
            color: ${props => props.theme === 'Dark' ? '#333' : '#FFF'};
            font-weight: bold;

            &:hover {
                background-color: #EE9400;
            }
        };
    };
`;

export const slidesControlArea = styled.div<{searchBar: boolean}>`
    position: absolute;
    top: ${props => props.searchBar ? '625px' :  '550px'};
    width: 100%;
    background-image: url();
`;

export const slidesControl = styled.div<{theme: string}>`
    width: 125px;
    padding: 5px;
    background-color: transparent;
    border: 2px solid ${props => props.theme === 'Dark' ? '#111' : '#FFF'};
    margin: auto;
    border-radius: 25px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0px 0px 5px #000;

    div {
        width: 25px;
        height: 25px;
        background-color: transparent;
        border: 2px solid ${props => props.theme === 'Dark' ? '#111' : '#FFF'};
        border-radius: 100%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 0px 3px #000;

        .active {
            background-color: ${props => props.theme === 'Dark' ? '#111' : '#FFF'};
            width: 15px;
            height: 15px;
        }
    }
`;