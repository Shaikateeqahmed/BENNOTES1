import './App.css';
import {Routes,Route} from "react-router-dom"
import Signup from './componets/signup';
import Login from './componets/login';
import Notes from './componets/Notes';
import Navbar from './componets/navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
     <Routes>
      <Route path='/' element={<h1>HOME PAGE</h1>}/>
      <Route path='/signup' element={< Signup />}/>
      <Route path='/login' element={< Login />}/>
      <Route path='/notes' element={<Notes />}/>
      <Route path='*' element={<h1>PAGE NOT FOUND</h1>}/>
     </Routes>
    </div>
  );
}

export default App;
