import {Button} from "shared/ui/Button";
import logo from '../img/logo.webp';
import s from "./Header.module.scss";
import {RunningLine} from "./RunningLine";


type Props = {}

export function Header({}: Props) {
    return (
        <header className={s._}>
            <div className="wrapper">
                <img src={logo} alt="logo" className={s.logo}/>

                <div className={s.content}>
                    <div className={s.head_text}>
                        <p>Превратите уездный город</p>
                        <p>в столицу</p>
                        <p>земного шара</p>
                    </div>

                    <p className={s.description}>
                        Оплатите взнос на телеграммы для организации Международного васюкинского турнира по шахматам
                    </p>

                    <div className={s.buttons}>
                        <Button theme={'black'}>Поддержать <br/> шахматную мысль</Button>
                        <Button theme={'transparent'}>Подробнее <br/> о турнире</Button>
                    </div>
                </div>
            </div>

            <RunningLine className={s.running_line} data={[
                'Дело помощи утопающим — дело рук самих утопающих!',
                'Шахматы двигают вперед не только культуру, но и экономику!',
                'Лед тронулся, господа присяжные заседатели!',
            ]}/>

        </header>
    );
}
