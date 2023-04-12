import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from '../../utils/img/mariosad.png'
import style from './Error.module.css'

export default function Error(){

    const navigate = useNavigate();

    useEffect(()=>{
        navigate('/error')
    },[navigate])

    return(
        <div className={style.error}>

            <img src={image} alt="error.png" />
            <br />
            <div>
                <div>
                    <h1>404</h1>
                    <h2>Opps! Page no found</h2>                     
                </div>
            </div>

        </div>
    )
}