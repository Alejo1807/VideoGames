import style from './Landing.module.css'

export default function Landing(props){
    return(
        <div className={style.main}>
            <div className={style.div}> <span>Bienvenido a Henry Videogames!</span> </div>
            <div className={style.sub_btm}>
                <button onClick={()=>props.goToHome()} className={style.btm}>Ir a página princial</button>
            </div>
        </div>
    )
}