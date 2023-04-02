import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Error(){

    const navigate = useNavigate();

    useEffect(()=>{
        navigate('/error')
    },[navigate])

    return(
        <div>
            <div>404</div>
            <div>Opps! Page no found</div>
        </div>
    )
}