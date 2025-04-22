import './PosterPreview.css'
import {FC} from "react";

type posterType = {
    preview:string
    title:string
}
type previewProps={
    poster:posterType
}
export const PosterPreviewComponent: FC<previewProps> = ({poster}) => {
    return (
        <div className={'poster'}>
            {poster.preview ?<img src={"https://image.tmdb.org/t/p/w300" +poster.preview} alt={poster.title}/>:
                <img className={'noPic'} src="src/Img/question.png" alt=""/>}
            <p className={'title'}>{poster.title}</p>
        </div>
    );
};