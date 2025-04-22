import './HeaderForm.css'
import {useNavigate} from "react-router";
import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../redux/hooks/helpers.tsx";
import {useEffect, useState} from "react";
import {filmResponseActions} from "../../redux/slices/filmResponseStoreSlice.ts";
import {pageActions} from "../../redux/slices/pageStoreSlice.ts";

interface IFormProps {
    movieRequest: string;
}

export const HeaderFormComponent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormProps>();
    const [filmName, setFilmName] = useState<string>('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (filmName.trim()) {


                dispatch(filmResponseActions.addResponse(filmName))
        }
    }, [filmName]);

    const customHandler = (formData: IFormProps) => {
        setFilmName((formData.movieRequest).replace(/ /g, "%20"));
        dispatch(pageActions.changePage(1))
        navigate('/foundedFilm');
    };

    return (
        <form className={'formHeader'} onSubmit={handleSubmit(customHandler)}>
            <input
                className={'custom-input'}
                type="text"
                {...register('movieRequest')}
                placeholder="Enter movie name"
            />
            {errors.movieRequest && <span className="error">Movie name is required</span>}
            <button className={'submitButton'}>
                <img src="src/Img/search.png" alt="search" />
            </button>
        </form>
    );
};
