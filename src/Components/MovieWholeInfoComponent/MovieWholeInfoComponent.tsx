import {FC} from "react";
import {IOneMovie} from "../../Models/IOneMovie.ts";
import './MovieWholeInfoComponent.css'

import {Link} from "react-router";

interface MovieDetailsProps {
    movie: IOneMovie;
}

export const MovieWholeInfoComponent: FC<MovieDetailsProps> = ({movie}) => {
    return (
        <div className="movieDetailsContainer">

            <div className="movieContentWrapper">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}

                    className="moviePoster"
                />

                <div className="movieInfo">

                    <h1 className="movieTitle">{movie.title}</h1>

                    <p className="movieTagline">{movie.tagline}</p>

                    <p><strong>Original Title:</strong> {movie.original_title}</p>
                    <p><strong>Release Date:</strong> {movie.release_date}</p>
                    <p><strong>Runtime:</strong> {movie.runtime} min</p>
                    <p><strong>Status:</strong> {movie.status}</p>
                    <p><strong>Budget:</strong> ${movie.budget > 0 ? movie.budget.toLocaleString() : 'N/A'}</p>
                    <p><strong>Revenue:</strong> ${movie.revenue > 0 ? movie.revenue.toLocaleString() : 'N/A'}</p>
                    <p><strong>Popularity:</strong> {movie.popularity}</p>
                    <p><strong>Vote:</strong> {movie.vote_average} / 10 ({movie.vote_count} votes)</p>
                    <p><strong>Genres:</strong> {movie.genres.map(g => g.name).join(", ")}</p>
                    <p><strong>Overview:</strong> {movie.overview}</p>
                </div>
            </div>


            <div className={"movieExtraDetails"}>

                <div className="detailSection">

                    <h2 className="sectionTitle">Spoken Languages:</h2>

                    <ul className="detailList">
                        {movie.spoken_languages.map((lang, idx) => (
                            <li key={idx}>{lang.english_name} ({lang.iso_639_1})</li>
                        ))}
                    </ul>
                </div>

                <div className="detailSection">
                    <h2 className="sectionTitle">Production Companies:</h2>
                    <ul className="detailList">
                        {movie.production_companies.map(company => (
                            <li key={company.id}>
                                {company.name} ({company.origin_country})
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="detailSection">
                    <h2 className="sectionTitle">Production Countries:</h2>
                    <ul className="detailList">
                        {movie.production_countries.map((country, idx) => (
                            <li key={idx}>{country.name}</li>
                        ))}
                    </ul>
                </div>


                <a
                    href={movie.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="movieHomepageLink"
                >
                    Visit Homepage
                </a>
            </div>

            <Link to={'/'} className="backLink"> Back to home page</Link>
        </div>
    );
};