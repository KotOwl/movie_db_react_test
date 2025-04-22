import "./GeneralMovieInfo.css"
import {FC} from "react";
import {RatingComponent} from "../StarRatingComponent/RatingComponent.tsx";


type movieInfoType = {
    overview: string,
    rating: number
    votes: number
    release_date: string
}


export const GeneralMovieInfoComponent: FC<movieInfoType> = ({overview,release_date,rating,votes}) => {
    return (
        <div className={'info'}>
            <h3 className={"max-h-15 overflow-y-auto text-sm text-gray-700 pr-1"}>{overview}</h3>
            <p>released {release_date}</p>
            <RatingComponent rating={rating}/> votes:{votes}
        </div>
    );
};