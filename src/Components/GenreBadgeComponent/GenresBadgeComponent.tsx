import {FC} from "react";
type genresProps ={
    genre:string
}

export const GenresBadgeComponent:FC<genresProps> = ({genre}) => {
    return (
        <li>{genre}</li>
    );
};