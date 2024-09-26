import s from "./Table.module.scss";


type Props = {
    data: Record<string, string | JSX.Element>
}

export function Table({data}: Props) {
    return (
        <ul className={s._}>
            {Object.keys(data).map(key => {
                const value = data[key as keyof typeof data];
                return (
                    <li key={key} className={s.row}>
                        <p className={s.key}>{key}</p>
                        <p className={s.value}>{value}</p>
                    </li>
                );
            })}
        </ul>
    );
}
