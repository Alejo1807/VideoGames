import './App.css';
//import { connect } from 'react-redux'
import { useEffect } from 'react'
import { Routes, Route,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Searchbar from './components/Searchbar/Searchbar';
import actions from './redux/actions';
import Nogames from './components/Nogames/Nogames';

function App() {

  const dispatch = useDispatch();

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
      <h1>Henry Videogames</h1>
      <Searchbar/>

      <Routes>
        <Route path='/' element={<Landing goToHome={goToHome}/>}/>
        {!videogames.hasOwnProperty('error')?<Route path='/home' element={<Home videogames={videogames}/>}/>:<Route path='/home' element={<Nogames/>}/>}
      </Routes>


    </div>
  );
}

export default App;
