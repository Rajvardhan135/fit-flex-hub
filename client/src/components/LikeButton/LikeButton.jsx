import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { likeExercise, unlikeExercise } from '../../utils/django/django.utils'
import { selectCurrentUser } from '../../store/user/user.selector'
import { useSelector } from 'react-redux'
import { useState } from 'react';

const LikeButton = ({ exerciseId }) => {
    const currentUser = useSelector(selectCurrentUser)
    const onClickHandler = () => {
        setIsSelected(!isSelected);
    }
    const [isSelected, setIsSelected] = useState(false)
    return <div onClick={onClickHandler}>
        {isSelected ? <div onClick={() => unlikeExercise(exerciseId, currentUser)}><FavoriteIcon sx={{ color: 'red' }} /></div> : <div onClick={() => likeExercise(exerciseId, currentUser)}><FavoriteBorderIcon sx={{ color: 'white' }} /></div>}
    </div>
}

export default LikeButton