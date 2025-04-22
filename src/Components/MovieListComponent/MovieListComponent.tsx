import './MovieList.css'
import {useEffect, useState} from "react";
import {getMovies} from "../../services/getMovies.ts";
import {IMovies} from "../../Models/IMovies.ts";
import {MovieListCardComponent} from "../MovieListCardComponent/MovieListCardComponent.tsx";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/helpers.tsx";
import {GenresFilterComponent} from "../GenresFilterComponent/GenresFilterComponent.tsx";
import {genresNameActions} from "../../redux/slices/genreNameStoreSlice.ts";
import {ErrorComponent} from "../ErrorComponent/ErrorComponent.tsx";
import {PagesButtonComponent} from "../PagesButtonsComponent/PagesButtonComponent.tsx";

export const MovieListComponent = () => {
    const [movies, setMovies] = useState<IMovies[]>([])
    const [filterButtonsState, setFilterButtonsState] = useState<string>('filterButtonsActive')
    const page = useAppSelector(state => state.pageSlice.page)

    const dispatch = useAppDispatch();
    const genres = useAppSelector(state => state.genreNameSlice.genres)
    const filteredGenres = useAppSelector(state => state.genreFilterSlice.genres)
    console.log(page);
    useEffect(() => {
        dispatch(genresNameActions.loadGenres())

    }, []);

    useEffect(() => {
        console.log(filteredGenres)
        console.log(page);
        getMovies(JSON.stringify(page), filteredGenres).then(res => setMovies(res))
    }, [page, filteredGenres]);
    return (
        <div className={'movieList'}>

            <div className={'filters-wrapper'}>
                <button className={'filters'} onClick={() => {
                    if (filterButtonsState === 'filterButtonsActive') {
                        setFilterButtonsState('filterButtonsUnactive')
                    } else setFilterButtonsState('filterButtonsActive')
                }}
                >filters
                </button>


            </div>

            <div className={filterButtonsState}>
                {
                    genres.map((genre, index) => <GenresFilterComponent key={index} genre={genre}/>)
                }
                <PagesButtonComponent/>
            </div>
            <div className={"movieListCards"}>
                {(movies.length > 0) ? movies.map(movie => <MovieListCardComponent key={movie.id} movie={movie}/>) :
                    <ErrorComponent/>}
            </div>
           <PagesButtonComponent/>
        </div>
    )
        ;
};