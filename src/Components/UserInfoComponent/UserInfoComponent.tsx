import './UserInfo.css'
import {useEffect, useState} from "react";
import {Link} from "react-router";

export const UserInfoComponent = () => {
    const [username, setUsername] = useState<string>()
    useEffect(() => {

    const storedLogin = (localStorage.getItem('login'))
    if (storedLogin){
        const parse = JSON.parse(storedLogin)
        setUsername(parse.username)
    }
    }, []);

    return (
        <div className={'userInfo'}>
            <Link to={'/sorry'}><img src="src/Img/gwen.jpg" alt=""/></Link>
            <Link to={'/sorry'}>{username}</Link>
        </div>
    );
};