import './Login.css'
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router";

export const LoginComponent = () => {
    type FormPropsType ={
        username:string
        password:number
    }
    const navigate = useNavigate();

    const {register,handleSubmit} =useForm<FormPropsType>();
    const customSubmit = (FormData:FormPropsType) => {
      localStorage.setItem('login',JSON.stringify({username:FormData.username, password:FormData.password, login:1}))
        navigate('/')
    }

    return (
        <div className={'login'}>
            <Link to={'/'}>Home</Link>
            <form className={'loginForm'} onSubmit={handleSubmit(customSubmit)}>
                <div><input type="text" {...register('username',{required:true})}
                placeholder={'enter your username'}/>
                <input type="password" {...register('password',{required:true})}
                placeholder={'enter your password'}/>
                </div>
                <button>Login</button>
            </form>
        </div>
    );
};