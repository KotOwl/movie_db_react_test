import './Sorry.css'
import {Link} from "react-router";
export const SorryComponent = () => {
    return (
        <div className={'sorry'}>
            <h2>Sorry this page will come soon </h2>
            <Link className={'homePage'} to={'/'}>Home page</Link>
            <img src="src/Img/sorryPic.png" alt=""/>

        </div>
    );
};