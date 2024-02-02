import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddPublication from './pages/AddPublication';
import UpdatePublication from './pages/UpdatePublication';
import AddUser from './pages/AddUser';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/addPublication' element={<AddPublication />}></Route>
          <Route path='/updatePublication/:pid' element={<UpdatePublication />}></Route>
          <Route path='/addUser' element={<AddUser />}></Route>
        </Routes>  
      </div>
    </Router>
    
  );
}

export default App;
