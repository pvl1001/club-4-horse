import cn from 'classnames';
import {ComponentProps, PropsWithChildren} from "react";
import s from "./Button.module.scss";


type Props = ComponentProps<'button'> & {
    theme: "black" | "transparent"
}

export function Button({children, theme, ...props}: PropsWithChildren<Props>) {
    return (
        <button className={cn(s._, props?.className, s[theme])} {...props}>
            {children}
        </button>
    );
}

