import style from './Nogames.module.css'

export default function Nogames(){
    return(
            <div className={style.contenedor}>
                <div className={style.caja}>
                    <div>No se han encontrado considencias 😞</div>
                </div>
            </div>
    )
}