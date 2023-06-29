// react-router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// pages
import Home from './pages/Home';
// components
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
// contexts
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const {user} = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={user ? <Home/> : <Navigate to="/signin"/>}
            />
            <Route
              path="/signin"
              element={!user ? <Signin/> : <Navigate to="/"/>}
            />
            <Route
              path="/signup"
              element={!user ? <Signup/> : <Navigate to="/"/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
