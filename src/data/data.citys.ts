import balneario1 from '../images/balneário.images/Balneario1.jpg';
import balneario2 from '../images/balneário.images/Balneario2.jpg';
import balneario3 from '../images/balneário.images/Balneario3.jpg';
import cancun1 from '../images/cancun.images/cancun1.jpg';
import cancun2 from '../images/cancun.images/cancun2.jpg';
import cancun3 from '../images/cancun.images/cancun3.jpg';
import dubai1 from '../images/dubai.images/dubai1.jpg';
import dubai2 from '../images/dubai.images/dubai2.jpg';
import dubai3 from '../images/dubai.images/dubai3.png';
import losageles1 from '../images/losAngles.images/losangeles1.jpg';
import losageles2 from '../images/losAngles.images/losangeles2.jpg';
import losageles3 from '../images/losAngles.images/losangeles3.jpg';
import maldivas1 from '../images/maldivas.images/maldivas1.jpg';
import maldivas2 from '../images/maldivas.images/maldivas2.jpg';
import maldivas3 from '../images/maldivas.images/maldivas3.jpg';
import miami1 from '../images/miami.images/miami1.jpg';
import miami2 from '../images/miami.images/miami2.jpg';
import miami3 from '../images/miami.images/miami3.jpg';
import novaiorque1 from '../images/novaIorque.images/novaiorque1.jpg';
import novaiorque2 from '../images/novaIorque.images/novaiorque2.jpg';
import novaiorque3 from '../images/novaIorque.images/novaiorque3.jpg';
import paris1 from '../images/paris.images/paris1.jpg';
import paris2 from '../images/paris.images/paris2.jpg';
import paris3 from '../images/paris.images/paris3.jpg';

type CytisType = {
    cityName: string;
    country: string;
    img: string[];
}

export const citys: CytisType[] = [
    {cityName: 'Balneário Camboriú', country: 'Brasil', img: [balneario1, balneario2, balneario3]},
    {cityName: 'Cancún', country: 'México', img: [cancun1, cancun2, cancun3]},
    {cityName: 'Dubai', country: 'Emirados Árabes Unidos', img: [dubai1, dubai2, dubai3]},
    {cityName: 'Los Angeles', country: 'Estados Unidos', img: [losageles1, losageles2, losageles3]},
    {cityName: 'Ilhas Maldivas', country: 'Maldivas', img: [maldivas1, maldivas2, maldivas3]},
    {cityName: 'Miami', country: 'Estados Unidos', img: [miami1, miami2, miami3]},
    {cityName: 'Nova Iorque', country: 'Estados Unidos', img: [novaiorque1, novaiorque2, novaiorque3]},
    {cityName: 'Paris', country: 'França', img: [paris1, paris2, paris3]}
];