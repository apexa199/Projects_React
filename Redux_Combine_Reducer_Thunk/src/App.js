import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserList } from './asyncaction/userAsynAction';

function App() {

  const dis = useDispatch();

  const data= useSelector(y=>y.user);

  console.log(data);

  useEffect(()=>{

    dis(getUserList(1))

  },[])

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
