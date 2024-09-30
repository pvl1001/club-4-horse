import cn from "classnames";
import {useState} from "react";
import {useWindowResize} from "shared/lib/useWindowResize.ts";
import {SliderButton} from "shared/ui/SliderButton";
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {data} from "../lib/data";
import {PersonCard} from "./PersonCard/PersonCard";
import s from "./Persons.module.scss";


type Props = {}

export function Persons({}: Props) {
    const [slidesPerView, setSlidesPerView] = useState(1);
    const [index, setIndex] = useState(slidesPerView);

    useWindowResize(() => {
        setSlidesPerView(window.innerWidth > 767 ? 3 : 1);
        setIndex(window.innerWidth > 767 ? 3 : 1);
    });

    return (
        <section className={s._}>
            <h2>Участники турнира</h2>

            <div className={s.navigation}>
                <SliderButton prev className={'person-prev'}/>
                <p>{index} <span>/ {data.length}</span></p>
                <SliderButton next className={'person-next'}/>
            </div>

            <div className={s.slider__wrapper}>
                <Swiper
                    onSlideChange={({activeIndex}) => setIndex(activeIndex + slidesPerView)}
                    className={cn(s.slider, s._)}
                    slidesPerView={slidesPerView}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.person-next',
                        prevEl: '.person-prev',
                    }}
                >
                    {data.map((person, i) =>
                        <SwiperSlide key={i} className={s.item}>
                            <PersonCard
                                name={person.name}
                                description={person.description}
                            />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>

        </section>
    );
}
