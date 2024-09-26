import {useLayoutEffect, useRef, useState} from "react";


export function useLinesCount() {
    const ref = useRef<HTMLOListElement>(null);
    const [linesCount, setLinesCount] = useState(1);

    useLayoutEffect(() => {
        setLinesCount(Math.ceil(window.innerWidth / (ref.current?.offsetWidth ?? 1)));
    }, []);

    return {linesCount, ref};
}

