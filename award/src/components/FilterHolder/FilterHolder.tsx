import styles from './filter_holder.module.scss'
import { Cross } from '../../assets/images/menuIcons/Cross'

type Props = {
    genre: string
    onRemove: (genre: string) => void
}

export const FilterHolder = ({ genre, onRemove }: Props) => {
    return (
        <div className={styles.filter_holder}>
            {genre}
            <div onClick={() => onRemove(genre)}>
                <Cross />
            </div>
        </div>
    )
}
