import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { SUC,ERO,REQUEST } from './action/userAction';

function App() {

  const dis = useDispatch();

  const data= useSelector(y=>y.user);

  console.log(data);

  useEffect(()=>{

    dis(REQUEST())

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(y=>y.json())
    .then(y=>{

      dis( SUC(y))
      
    }).catch(y=> {


      dis(ERO(y))
    })

  },[])
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
