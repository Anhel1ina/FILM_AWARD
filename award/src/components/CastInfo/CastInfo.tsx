import { Person } from '../../helpers/filmsTypes'
import styles from './cast_info.module.scss'

type Props = {
    persons: Person[]
}

export const CastInfo = ({persons = []}: Props) => {
    return (
        <div className={styles.cast}>
            <div className={styles.cast__container}>
                {persons.slice(0, 10).map((person, index) => (
                    <div key={index} className={styles.cast__container__item}>
                        <img src={person.photo} alt="" />
                        <span>{person.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
