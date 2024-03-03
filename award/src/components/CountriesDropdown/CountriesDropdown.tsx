import { useEffect, useState } from 'react'
import { Arrow } from '../../assets/images/addIcons/Arrow'
import styles from './countries.module.scss'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { LoadAllCountries, SetCountryValue } from '../../store/filters/action'
import { useFiltersState } from '../../store/filters/selector'

export const CountriesDropdown = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [open, setOpen] = useState<boolean>(false)
    const { countries, countryValue } = useFiltersState()
    const openList = () => setOpen(true)
    const closeList = () => setOpen(false)

    const setCountry = (value: string) => {
        dispatch(SetCountryValue(value))
        closeList()
    }

    const getText = (e: React.FormEvent<HTMLInputElement>) => {
        dispatch(SetCountryValue(e.currentTarget.value))
        openList()
    }

    useEffect(() => {
        dispatch(LoadAllCountries())
    }, [dispatch])

    return (
        <div className={styles.countries_dropdown}>
            <div className={styles.genres_dropdown__choose_filter}>
                <div className={styles.countries_button}>
                    <input onChange={getText} type='text' value={countryValue || ''} />
                    <div onClick={open ? closeList : openList} className={`${open ? styles.rotate_arrow : null} `}>
                        <Arrow />
                    </div>
                </div>
            </div>
            {
                open ? (
                    <ul className={styles.countries__list}>
                        {

                            countries!
                                .filter(country => country.name.toLowerCase().includes(countryValue?.toLowerCase()!))
                                .map((country, index) => (
                                    <li onClick={() => setCountry(country.name)} key={index}>{country.name}</li>
                                ))
                        }
                    </ul>
                ) : null
            }
        </div>
    )
}
