import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getOneMovie, searchMoviesByName} from "../../services/getMovies.ts";
import {ErrorComponent} from "../ErrorComponent/ErrorComponent.tsx";
import {MovieWholeInfoComponent} from "../MovieWholeInfoComponent/MovieWholeInfoComponent.tsx";
import {IOneMovie} from "../../Models/IOneMovie.ts";

export const MovieInfoComponent = () => {
    const {id} = useParams<{id:string}>();
    console.log(id);
    const [movie, setMovie] = useState<IOneMovie>()
    useEffect(() => {
        const promise = searchMoviesByName("Fight%20Club");
        console.log(promise);

        if(id){
        getOneMovie(id).then(res=> setMovie(res))}
        console.log(movie);
    }, []);
    return (
        <div>
            {movie? <MovieWholeInfoComponent movie={movie}/>: <ErrorComponent/>}
        </div>
    );
};