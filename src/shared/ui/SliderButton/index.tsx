import cn from "classnames";
import {ComponentProps} from "react";
import ArrowIcon from 'shared/assets/svg/arrow.svg?react';
import s from "./SliderButton.module.scss";


type Props = ComponentProps<'button'> & {
    next?: boolean
    prev?: boolean
}

export function SliderButton({className = s.default, next, prev, ...props}: Props) {
    return (
        <button
            type={'button'}
            className={cn(s._, className, {
                'swiper-prev': prev,
                'swiper-next': next,
            })}
            {...props}
        >
            <ArrowIcon/>
        </button>
    );
}
