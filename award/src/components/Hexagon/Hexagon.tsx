import { NextButtonIcon } from '../PagesButtons/NextButtonIcon'
import { PrevButtonIcon } from '../PagesButtons/PrevButtonIcon'
import styles from './hexagon.module.scss'

type Props = {
    pos: React.CSSProperties
}

export const Hexagon = ({pos}: Props) => {
    return (
        <div id='hexagon' style={pos} className={styles.hexagon}>
            <PrevButtonIcon/>
            <NextButtonIcon/>
        </div>
    )
}
