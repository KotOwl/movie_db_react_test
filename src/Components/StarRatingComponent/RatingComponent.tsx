import  {FC} from 'react';
import './Rating.css';

interface RatingProps {
    rating: number; // Зроблено обов'язковим, щоб компонент відображав зірочки
    maxStars?: number;
}

export const RatingComponent:FC<RatingProps> = ({ rating, maxStars = 5 }) => {
    const stars = [];
    const normalizedRating = (rating / 10) * maxStars;
    for (let i = 0; i < maxStars; i++) {
        let className = 'star-rating__star';
        if (normalizedRating >= i + 1) {
            className += ' is-selected';
        } else if (normalizedRating > i && normalizedRating < i + 1) {
            className += ' is-half-selected';
        }
        stars.unshift(
            <label key={i} className={className}>
                ★
            </label>
        );
    }

    return <div className="star-rating">{stars}</div>;
};

