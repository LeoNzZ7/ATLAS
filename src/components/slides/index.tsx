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
                <c.Slides  currentSlide={currentSlide} >
                    
                </c.Slides>
                <c.Slides  currentSlide={currentSlide} >
                    2
                </c.Slides>
                <c.Slides  currentSlide={currentSlide} >
                    3
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