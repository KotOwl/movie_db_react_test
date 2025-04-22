
import {FC, useEffect, useState} from "react";
import {PosterPreviewComponent} from "../PosterPreviewComponent/PosterPreviewComponent.tsx";
import {GeneralMovieInfoComponent} from "../GeneralMovieInfoComponent/GeneralMovieInfoComponent.tsx";
import {Link} from "react-router";
import {IFoundMovies} from "../../Models/IFoundMovies.ts";
import {GenresBadgeComponent} from "../GenreBadgeComponent/GenresBadgeComponent.tsx";
import {getGenreById} from "../../utils/getGenreById.ts";

type movieProps = { movie: IFoundMovies };
export const FoundedMovieComponent:FC<movieProps> = ({movie}) => {
    const [genres, setGenres] = useState<string[]>([]);

    useEffect(() => {
        if (movie.genre_ids) {
            getGenreById(movie.genre_ids).then(res => setGenres(res));
        } else {
            setGenres(["No genres"]);
        }
    }, []);


        return (
            <Link to={`/movie/${movie.id}`} className="movie-card-link">
                {movie && <div className="movie-card">
                    <div className="relative">
                        <PosterPreviewComponent
                            poster={{
                                title: movie.title,
                                preview: movie.backdrop_path,
                            }}
                        />

                    </div>

                    <div className="movie-content">


                        <GeneralMovieInfoComponent
                            overview={movie.overview}
                            rating={movie.vote_average}
                            votes={movie.vote_count}
                            release_date={movie.release_date}
                        />

                        <ul className="genre-list">
                            {genres.map((genre, index) => (
                                <GenresBadgeComponent key={index} genre={genre} />
                            ))}
                        </ul>
                    </div>
                </div>}
            </Link>
        );

};
