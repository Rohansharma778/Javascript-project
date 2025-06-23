// import transaction from '../../api/models/transactions';
import './App.css';
import {useEffect,useState} from "react";

function App() {
  const [name, setName] = useState('');
  const [datetime,setDatetime] = useState('');
  const[description,setDescription]=useState('');
  const[transactions,setTransactions]=useState([])

  useEffect(()=>{
    getTransactions().then(setTransactions)
  },[]);

  async function getTransactions(){
       const url = process.env.REACT_APP_API_URL+'/transaction';
      const response = await fetch('url')
       return await response.json();
  }
  function addNewTransaction(ev){
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL+'/transaction';
    const price =name.split(' ')[0];
    console.log(url);
    fetch(url , {
      method:'POST',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify({
        price,
        name:name.substring(price.length+1),
        description,
        datetime,
      })
    }).then(response=>
      response.json())
      .then((result)=>{
        setName('');
        setDatetime('')
        setDescription('');   
        console.log('result',result)
      })
  }
  
  return (
  <main>
    <h1>$400<span>.00</span></h1>
    <form onSubmit={addNewTransaction}>
    <div className="basic">    
    <input type="text" 
    value={name}
    onChange={ev=>setName(ev.target.value)}
    placeholder={'+200 new samsung tv'}/>
    <input 
    value={datetime} 
    onChange={ev=>setDatetime(ev.target.value)} 
    type='datetime-local'/>
    </div>
    <div className="description">
      <input 
      type='text'
      value={description}
      onChange={ev=>setDescription(ev.target.value)}
      placeholder = {'Descriptions'}/>
    </div>
    <button type="submit">Add new transaction</button>
    {transactions.length}
    </form>
    <div className="transactions">
      <div className="transaction">
        <div className='left'>
          <div className="Name">New samsung tv</div>
          <div className="description">It was time for new TV</div>
        </div>
        <div className='right'>
          <div className='price red'>-$500</div>
          <div className='dateTime'>2025-7-21  19:56</div>
        </div>
      </div>
           <div className="transaction">
        <div className='left'>
          <div className="Name">New phone</div>
          <div className="description">It was time for new phone</div>
        </div>
        <div className='right'>
          <div className='price red'>-$250</div>
          <div className='dateTime'>2025-9-20  11:50</div>
        </div>
      </div>
      <div className="transaction">
        <div className='left'>
          <div className="Name">salary</div>
          <div className="description">salary arrived</div>
        </div>
        <div className='right'>
          <div className='price green'>+$5046</div>
          <div className='dateTime'>2025-2-5  14:00</div>
        </div>
      </div>
    </div>
  </main>
  );
}

export default App;
