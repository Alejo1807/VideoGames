import style from './Loading.module.css'
import { useEffect, useState } from 'react'
import Nogames from '../Nogames/Nogames';

export default function Loading(){

    const [noReturn, setNoReturn] = useState(false);

    useEffect(()=>{
        setTimeout(setNoReturn,4000,true);        
    },[])

    return(
        noReturn?<Nogames/>:<div className={style.contenedor}>
            <div className={style.caja}>
                <div>Loading...</div>
            </div>
        </div>
    )
}