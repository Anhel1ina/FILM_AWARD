import { useDispatch } from 'react-redux'
import { Arrow } from '../../assets/images/addIcons/Arrow'
import styles from './genres_dropdown.module.scss'
import { useFiltersState } from '../../store/filters/selector'
import { AppDispatch } from '../../store/store'
import { useEffect, useState } from 'react'
import { LoadAllGenres, RemoveFilterForAdd, SetFilterForAdd, SetFilterValue } from '../../store/filters/action'
import { FilterHolder } from '../FilterHolder/FilterHolder'

export const GenresDropdown = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { genres, filterValue, addedGenres } = useFiltersState()
    const genresArray = addedGenres ? Object.values(addedGenres!).map(item => item.genre) : []
    
    useEffect(() => {
        dispatch(LoadAllGenres())
    }, [dispatch])

    const [open, setOpen] = useState<boolean>(false)
    const openList = () => setOpen(true)
    const closeList = () => setOpen(false)

    const getText = (e: React.FormEvent<HTMLInputElement>) => {
        dispatch(SetFilterValue(e.currentTarget.value))
        openList()
    }

    const chooseFilterValue = (value: string) => {
        dispatch(SetFilterValue(value))
        closeList()
    }

    const addFilterValue = (value: string) => {
        dispatch(SetFilterForAdd(value))
        dispatch(SetFilterValue(''))
    }

    const removeAddedFilter = (genre: string) => {
        dispatch(RemoveFilterForAdd(genre))
    }

    return (
        <div className={styles.genres_dropdown}>
            <div className={styles.genres_dropdown__choose_filter}>
                <div className={styles.genres_button}>
                    <input onChange={getText} type='text' value={filterValue || ''} />
                    <div onClick={open ? closeList : openList}  className={`${open ? styles.rotate_arrow : null} `}>
                        <Arrow />
                    </div>
                </div>
                <button onClick={filterValue ? () => addFilterValue(filterValue!) : () => {}} className={styles.genres_dropdown__add_button}>+</button>
            </div>
            {
                open ? (
                    <ul className={styles.genres__list}>
                        {

                            genres!.filter(genre => genre.name.includes(filterValue!))
                            .map((genre, index) => (
                                <li onClick={() => chooseFilterValue(genre.name)} key={index}>{genre.name}</li>
                            ))
                        }
                    </ul>
                ) : null
            }
            <div className={styles.genres_dropdown__filters_holder}>
                {
                    genresArray ? (
                        genresArray.map((genre, index) => (
                            <div key={index}>
                                <FilterHolder onRemove={() => removeAddedFilter(genre)} genre={genre}/>
                            </div>
                        ))
                    ) : null
                }
            </div>
        </div>
    )
}
