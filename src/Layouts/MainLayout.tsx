import {Outlet} from "react-router";
import {HeaderComponent} from "../Components/HeaderComponent/HeaderComponent.tsx";
import {FooterComponent} from "../Components/FooterComponent/FooterComponent.tsx";

export const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
};