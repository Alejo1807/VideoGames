export default function Landing(props){
    return(
        <div>
            <button onClick={()=>props.goToHome()}>Ir a página princial</button>
        </div>
    )
}