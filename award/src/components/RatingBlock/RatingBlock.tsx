import styles from './rating_block.module.scss'

type Props = {
    rating: number
}

export const RatingBlock = ({rating}: Props) => {
    return (
        <div className={`${styles.rating_block} ${rating >= 7 ? styles.big_rating: rating >= 5 && rating < 7 ? styles.medium_rating : styles.small_rating}`}>
            <span>{rating}</span>
        </div>
    )
}
