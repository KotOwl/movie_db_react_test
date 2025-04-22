import { FC, useEffect, useState } from "react";
import { IMovies } from "../../Models/IMovies.ts";
import { PosterPreviewComponent } from "../PosterPreviewComponent/PosterPreviewComponent.tsx";
import { GeneralMovieInfoComponent } from "../GeneralMovieInfoComponent/GeneralMovieInfoComponent.tsx";
import { getGenreById } from "../../utils/getGenreById.ts";
import { GenresBadgeComponent } from "../GenreBadgeComponent/GenresBadgeComponent.tsx";
import { Link } from "react-router";

import "./MovieListCard.css";

type movieProps = { movie: IMovies };

export const MovieListCardComponent: FC<movieProps> = ({ movie }) => {
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
            <div className="movie-card">
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
            </div>
        </Link>
    );
};
