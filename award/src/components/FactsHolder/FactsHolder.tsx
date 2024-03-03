import { Fact } from '../../helpers/filmsTypes'
import { removeSymbolsFromFact } from '../../helpers/inputsValidation'
import styles from './facts.module.scss'
import { FactCell } from './FactCell'

type Props = {
    facts: Fact[]
}


export const FactsHolder = ({ facts }: Props) => {
    return (
        <div className={styles.facts_holder}>
            {facts.map((item, index) => (
                <div
                    key={index}
                    className={`${styles.facts_holder__item} ${item.spoiler ? styles.spoiler : null}`}
                >
                    <p>#{index + 1} {item.spoiler ? `(spoiler)` : null}</p>
                    {
                        item.spoiler ? (
                            <FactCell value={removeSymbolsFromFact(item.value)} />
                        ) : (
                            <div>
                                {removeSymbolsFromFact(item.value)}
                            </div>
                        )
                    }
                </div>
            ))}
        </div>
    );
}
