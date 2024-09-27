import cn from "classnames";
import s from "./Stage.module.scss";
import {StageList} from "./StageList/StageList.tsx";


type Props = {}

export function Stage({}: Props) {
    return (
        <div className={cn(s._, 'wrapper')}>
            <div className={s.title}>
                <h2>Этапы преображения Васюков</h2>
                <a href={'/'} className={cn(s.link, 'link')}>
                    Будущие источники <br/> обогащения васюкинцев
                </a>
            </div>

            <StageList/>
        </div>
    );
}
