import cn from "classnames";
import s from "./RunningLine.module.scss";


type Props = {
    className?: string
    data: string[]
}

export function RunningLine({data, className}: Props) {
    return (
        <div className={cn(s._, className)}>
            <ol>{data.map((str, i) => <li key={i}>{str}</li>)}</ol>
            <ol>{data.map((str, i) => <li key={i}>{str}</li>)}</ol>
        </div>
    );
}
