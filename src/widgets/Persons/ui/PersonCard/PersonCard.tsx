import {Person} from "widgets/Persons/types.ts";
import s from "./PersonCard.module.scss";


export function PersonCard({name, description}: Person) {
    return (
        <article className={s._}>
            <div className={s.img}/>
            <p className={s.name}>{name}</p>
            <p className={s.description}>{description}</p>

            <button type="button" className={s.button}>
                Подробнее
            </button>
        </article>
    );
}
