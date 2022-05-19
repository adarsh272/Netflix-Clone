import React, { useEffect } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import ProfileScreen from './components/ProfileScreen';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './components/Login';
import { auth } from './components/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(                                    //a listener that listens to any auhtentication state change
    (userAuth) => {
      if(userAuth){
        dispatch(
          login({
              uid: userAuth.uid,
              email: userAuth.email
          })
        )
      }else{
        dispatch(logout())
      }

      return unsubscribe
    }); }, [])

    

  return (
    <div className='App'>
        <BrowserRouter>
        {!user ? <Login/> : <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/profile' element={<ProfileScreen/>}/>
          </Routes>}
          
        </BrowserRouter>
    </div>
    
  );
}

export default App;
