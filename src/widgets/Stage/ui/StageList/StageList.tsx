import cn from "classnames";
import {useSliderSpaceBetween} from "shared/lib/useSliderSpaceBetween.ts";
import {SliderButton} from "shared/ui/SliderButton";
import {Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {data, sliderData} from "../../lib/data.tsx";
import s from "./StageList.module.scss";


type Props = {}

export function StageList({}: Props) {
    let index = 0;
    const pageRem: number = useSliderSpaceBetween(20);

    return (
        <>
            <ul className={s._}>
                {data.map((item, i) =>
                    <li key={i} className={s.item}>
                        <div className={s.item__container}>
                            <div className={s.item__count}>{++i}</div>
                            <p className={s.item__text}>{item}</p>
                        </div>
                    </li>
                )}
            </ul>

            <Swiper
                className={cn(s.slider, s._)}
                spaceBetween={pageRem}
                slidesPerView={1}
                modules={[Navigation, Pagination]}
                pagination={{
                    clickable: true,
                    el: '.' + s.pagination,
                }}
                navigation={{
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev',
                }}
            >
                {sliderData.map((arr, i) =>
                    <SwiperSlide key={i} className={s.item}>
                        {arr.map((item, idx) =>
                            <div key={idx} className={s.item__container}>
                                <div className={s.item__count}>{++index}</div>
                                <p className={s.item__text}>{item}</p>
                            </div>
                        )}
                    </SwiperSlide>
                )}
                <div className={s.navigation}>
                    <SliderButton prev/>
                    <div className={s.pagination}/>
                    <SliderButton next/>
                </div>
            </Swiper>
        </>
    );
}
