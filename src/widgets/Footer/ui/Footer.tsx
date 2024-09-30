import s from "./Footer.module.scss";


type Props = {}

export function Footer({}: Props) {
    return (
        <footer className={s._}>
            <div className="wrapper">
                <p className={s.text}>Все персонажи, события и цитаты являются вымышленными и не принадлежат создателям сайта. С подробностями можно познакомиться в главе XXXIV романа Ильи Ильфа и Евгения Петрова «Двенадцать стульев».</p>
            </div>
        </footer>
    );
}
