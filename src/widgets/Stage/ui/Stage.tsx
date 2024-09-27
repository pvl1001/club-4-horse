import cn from "classnames";
import s from "./Stage.module.scss";
import {StageList} from "./StageList/StageList.tsx";


type Props = {}

export function Stage({}: Props) {
    return (
        <div className={cn(s._, 'wrapper')}>
            <h2 className={s.title}>
                <span>Этапы преображения Васюков</span>
                <a href={'/'} className={cn(s.link, 'link')}>
                    Будущие источники <br/> обогащения васюкинцев
                </a>
            </h2>

            <StageList/>
        </div>
    );
}
