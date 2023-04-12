import './App.css';
import { useEffect } from 'react'
import { Routes, Route,useNavigate,useLocation } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import actions from './redux/actions';
import Nogames from './components/Nogames/Nogames';
import Detail from './components/Detail/Detail';
import Nav from './components/Nav/Nav';
import Error from './components/Error/Error';
import Form from './components/Form/Form';


function App() {

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(()=>{
    dispatch(actions.getGame())
  },[dispatch])

  const navigate=useNavigate();
  const videogames = useSelector(state => state.videogamesFiltered)
  
  console.log(videogames)

function goToHome () {
  navigate('/home')
};

  return (
    <div className="App">

      {location.pathname!=="/"&&location.pathname!=="/error"?<Nav/>:""}

      <Routes>
        <Route path='/' element={<Landing goToHome={goToHome}/>}/>
        <Route path='/home' element={<Home videogames={videogames}/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/form'element={<Form/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>


    </div>
  );
}

export default App;
