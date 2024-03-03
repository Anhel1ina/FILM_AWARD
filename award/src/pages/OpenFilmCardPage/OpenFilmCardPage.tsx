import { CardInnerContentHolder } from '../../components/CardInnerContentHolder/CardInnerContentHolder'
import { GoBackButton } from '../../components/GoBackButton/GoBackButton'
import { useNavigate } from 'react-router-dom'

export const OpenFilmCardPage = () => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)


    return (
        <div>
            <CardInnerContentHolder/>
            <GoBackButton up={true} link={goBack}/>
        </div>
    )
}
