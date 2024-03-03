import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Film } from "../../helpers/filmsTypes";
import { SimilarMovieCard } from "../SimilarMovieCard/SimilarMovieCard";

type Props = {
    film: Film
}

export const SimilarMovieSlider = ({ film }: Props) => {
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {film.similarMovies.map((movie, index) => (
                    <div key={index}>
                        <SimilarMovieCard film={movie} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
