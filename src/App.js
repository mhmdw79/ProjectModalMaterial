import { useState } from 'react';
 import TableList from './components/Table';
 import Modal from './components/Modal';
function App() {
  
  
  

  const [list,setList] = useState([])
  return (
    <>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"10rem"}}>
      <Modal list={list} setList={setList}/>
    <div style={{marginTop:"2rem"}}>
      <TableList list={list}/>
    </div>
    </div>
  
    </>
  );
}

export default App;
