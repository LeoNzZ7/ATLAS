import balneario1 from '../images/balneário.images/Balneario1.jpg'
import cancun1 from '../images/cancun.images/cancun1.jpg'

type CytisType = {
    cityName: string;
    country: string;
    img: string[];
}

export const citys: CytisType[] = [
    {cityName: 'Balneário Camboriú', country: 'Brasil', img: [balneario1]},
    {cityName: 'Cancún', country: 'México', img: [cancun1]},
    {cityName: 'Dubai', country: 'Emirados Árabes Unidos', img: [balneario1]},
    {cityName: 'Los Angeles', country: 'Estados Unidos', img: [balneario1]},
    {cityName: 'Ilhas Maldivas', country: 'Maldivas', img: [balneario1]},
    {cityName: 'Miami', country: 'Estados Unidos', img: [balneario1]},
    {cityName: 'Nova Iorque', country: 'Estados Unidos', img: [balneario1]},
    {cityName: 'Paris', country: 'França', img: [balneario1]}
];