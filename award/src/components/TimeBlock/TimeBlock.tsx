import styles from './time_block.module.scss'

type Props = {
    time: number
}

export const TimeBlock = ({time}: Props) => {
    return (
        <div className={`${styles.time_block}`}>
            <span>{`${time} мин`}</span>
        </div>
    )
}
