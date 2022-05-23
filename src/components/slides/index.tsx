import { useState } from 'react'
import { useAppSelector } from '../../redux/hooks/useAppSelector'
import * as c from './styles'

type Props = {
    searchBar: boolean
}

export const Slides = ({searchBar}: Props) => {
    const themeStatus = useAppSelector(state => state.theme.status);

    const [currentSlide, setCurrentSlide] = useState<1 | 2 | 3>(1);

    return (
        <c.Container searchBar={searchBar}>
            <c.SlideArea>
                <c.Slides  theme={themeStatus} currentSlide={currentSlide} >
                    <div>
                        <h1>Balneário Camboriú</h1>
                        <h3>Conheça Balneário Camboriú umas das melhores e mais bonitas cidades do Brasil.</h3>
                        <button>Saiba mais</button>
                    </div>
                </c.Slides>
                <c.Slides theme={themeStatus} currentSlide={currentSlide} >
                    <div>
                        <h1>Cancún</h1>
                        <h3>Conheça Cancún uma das cidades mais bonitas do México e banhada pelo mar do Caribe.</h3>
                        <button>Saiba mais</button>
                    </div>
                </c.Slides>
                <c.Slides theme={themeStatus} currentSlide={currentSlide} >
                    <div>
                        <h1>Ilhas Maldivas</h1>
                        <h3>Conheça as Maldivas e suas incriveis praias</h3>
                        <button>Saiba mais</button>
                    </div>
                </c.Slides>
            </c.SlideArea>
            <c.slidesControlArea theme={themeStatus} searchBar={searchBar}>
                <c.slidesControl theme={themeStatus}>
                    <div onClick={e => setCurrentSlide(1)} >
                        {currentSlide === 1 &&
                            <div className='active'></div>
                        }
                    </div>
                    <div onClick={e => setCurrentSlide(2)} >
                        {currentSlide === 2 &&
                            <div className='active'></div>
                        }
                    </div>
                    <div onClick={e => setCurrentSlide(3)} >
                        {currentSlide === 3 &&
                            <div className='active'></div>
                        }
                    </div>
                </c.slidesControl>
            </c.slidesControlArea>
        </c.Container>
    );
}