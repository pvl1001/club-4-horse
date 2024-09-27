import cn from "classnames";
import players_img from '../img/many_chees_players.webp';
import {tableData} from "../lib/tableData.tsx";
import s from './Session.module.scss';
import {Table} from "./Table/Table.tsx";


type Props = {}

export function Session({}: Props) {
    return (
        <section className={cn(s._, 'wrapper')}>
            <div className={s.content}>
                <p className={s.text}>Чтобы поддержать Международный васюкинский турнир
                    <img className={s.players_img} src={players_img} alt="many_chees_players"/>
                    посетите лекцию на тему: <b className={'text-red'}>«Плодотворная дебютная идея»</b>
                </p>
            </div>

            <div className={s.content2}>
                <div className={s.player_img}/>
                <div className={s.container}>
                    <p className={s.text}>и Сеанс <b className={'text-red'}>одновременной игры в шахматы на 160 досках</b> гроссмейстера О. Бендера</p>
                    <Table data={tableData}/>
                    <a href={'#'} className={cn(s.link, 'link')}>По всем вопросам обращаться в администрацию к К. Михельсону</a>
                </div>
            </div>
        </section>
    );
}
