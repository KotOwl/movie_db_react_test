import {createBrowserRouter} from "react-router";
import {MainLayout} from "../Layouts/MainLayout.tsx";
import {MoviesPage} from "../Pages/MoviesPage.tsx";
import {MovieIdInfoPage} from "../Pages/MovieIdInfoPage.tsx";
import {MovieByNameInfoPage} from "../Pages/MovieByNameInfoPage.tsx";
import {SorryPage} from "../Pages/SorryPage.tsx";
import {FoundedFilmPage} from "../Pages/FoundedFilmPage.tsx";
import {AuthorizationLayout} from "../Layouts/AuthorizationLayout.tsx";
import {LoginPage} from "../Pages/LoginPage.tsx";

export const routes = createBrowserRouter([{
    path:'/',element:<MainLayout/>,children:[
        {index:true,element:<MoviesPage/>},
        {path:'movie/:id',element:<MovieIdInfoPage/>},
        {path:'movie/:name',element:<MovieByNameInfoPage/>},
        {path:'sorry',element:<SorryPage/>},
        {path:'foundedFilm',element:<FoundedFilmPage/>}
    ]},
    {path: '/authorization',element:<AuthorizationLayout/> ,children:[
            {path: 'login',element: <LoginPage/>},
            // {path: '/singIn',element: <SingInPage/>}
        ]}
])