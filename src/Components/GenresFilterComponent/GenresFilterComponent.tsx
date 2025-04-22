import './GenresFilter.css'
import {IGenres} from "../../Models/IGenres.ts";
import {FC, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/helpers.tsx";
import {genresStoreSliceActions} from "../../redux/slices/genreStoreSlice.ts";
import {pageActions} from "../../redux/slices/pageStoreSlice.ts";

type GenreProps = { genre: IGenres };

export const GenresFilterComponent: FC<GenreProps> = ({genre}) => {
    const dispatch = useAppDispatch();
    const selectedGenres = useAppSelector(state => state.genreFilterSlice.genres);
    const [buttonState, setButtonState] = useState<string>(selectedGenres.includes(genre.id) ? 'active' : 'unactive')

    useEffect(() => {

    }, [buttonState]);

    const handleClick = () => {
        dispatch(pageActions.changePage(1))
        dispatch(genresStoreSliceActions.toggleGenre(genre.id))
        if(buttonState=== 'unactive'){
            setButtonState('active')
        }
        else setButtonState('unactive')
    }
    return (

        <button className={`filterButton ${buttonState}`} onClick={handleClick}>
            {genre.name}
        </button>
    );
};
