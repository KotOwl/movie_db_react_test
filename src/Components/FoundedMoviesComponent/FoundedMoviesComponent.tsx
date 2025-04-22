import './FoundedMovies.css'
import {useAppSelector} from "../../redux/hooks/helpers.tsx";
import {FoundedMovieComponent} from "../FoundedMovieComponent/FoundedMovieComponent.tsx";
import {useNavigate} from "react-router";
import {ErrorComponent} from "../ErrorComponent/ErrorComponent.tsx";
import {PagesButtonComponent} from "../PagesButtonsComponent/PagesButtonComponent.tsx";
import {useEffect, useState} from "react";
import {IFoundMovies} from "../../Models/IFoundMovies.ts";
import {searchMoviesByName} from "../../services/getMovies.ts";

export const FoundedMoviesComponent = () => {

    const request = useAppSelector(state => state.filmSlice.result);
    const page = useAppSelector(state => state.pageSlice.page);
    const [films, setFilms] = useState<IFoundMovies[]>([])
    useEffect(() => {
        searchMoviesByName(request,page).then(res=>setFilms(res))
    }, [page,request]);
    const navigate = useNavigate();
    return (
        <div className={'movieList'}>
            <button className={'toHome'} onClick={()=>{
                navigate('/')
            }}>Home</button>
        <div className={'movieListCards'}>
            { (films.length>0)?
                films.filter(Boolean).map((movie) =><FoundedMovieComponent key={movie.id} movie={movie}/>): <ErrorComponent/>
            }
        </div>
            <PagesButtonComponent/>
        </div>
    );
};