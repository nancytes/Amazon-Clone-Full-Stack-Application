import { useContext, useEffect } from 'react'
import './App.css'
import { Rounting } from './Rounting'
import { DataContext } from './components/DataProvider/DataProvider'
import { Type } from './utilities/action.type'
import { auth } from './utilities/firebase'


function App() {
  const { state, dispatch } = useContext(DataContext);
  const { user } = state;

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type: Type.SET_USER,
          user: authUser
        })
      } else{
        dispatch({
          type: Type.SET_USER,
          user: null
          })
        }
      

  })}, []);

  return (
    <>
    <Rounting />
    </>
  )
}

export default App
