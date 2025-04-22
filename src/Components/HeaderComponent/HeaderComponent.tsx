import './mainHeader.css';

import {HeaderFormComponent} from "../HeaderFormComponent/HeaderFormComponent.tsx";
import {useEffect, useState} from "react";
import {Link} from "react-router";
import {UserInfoComponent} from "../UserInfoComponent/UserInfoComponent.tsx";

export const HeaderComponent = () => {
    const [loginAccess, setLoginAccess] = useState<number>(0);

    useEffect(() => {
        const storedLogin = localStorage.getItem('login');
        if (storedLogin) {
            try {
                const parsed = JSON.parse(storedLogin);
                setLoginAccess(parsed.login);
            } catch (e) {
                console.error("Invalid login data", e);
            }
        }
    }, []);

    return (
        <header>
            <div className="leftHeaderComponent">
                <Link to={'/'}>
                    <img className={"gwenHeader"} src="src/Img/gwenIcon.png" alt=""/></Link>
                <HeaderFormComponent/>
                <ul>
                    <li><Link to="/">Home</Link></li>

                    <li><Link to="/sorry">Favourite</Link></li>
                    <li><Link to="/sorry">Contacts</Link></li>
                    <li><Link to="/sorry">About Us</Link></li>

                </ul>
            </div>
            <div className="rightHeaderComponent">
                {!loginAccess ? (
                    <ul className={'loginHeader'}>
                        <li><Link to="/authorization/login">Sing in</Link></li>
                        <li><Link to="/authorization/login">Login</Link></li>
                    </ul>
                ) : <UserInfoComponent/>}
            </div>
        </header>
    );
};
