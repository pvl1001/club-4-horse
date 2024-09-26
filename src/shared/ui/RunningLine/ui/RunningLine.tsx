import cn from "classnames";
import {useLinesCount} from "../lib/useLinesCount.tsx";
import s from "./RunningLine.module.scss";


type Props = {
    className?: string
    data: string[]
}

export function RunningLine({data, className}: Props) {
    const {ref, linesCount} = useLinesCount();

    return (
        <div className={cn(s._, className)}>
            <ol ref={ref}>{data.map((str, i) => <li key={i}>{str}</li>)}</ol>
            {Array(linesCount).fill('').map((_, idx) =>
                <ol key={idx}>{data.map((str, i) => <li key={i}>{str}</li>)}</ol>
            )}
        </div>
    );
}
