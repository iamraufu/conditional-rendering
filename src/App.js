import { useState } from 'react';
import './App.css';
import User from './components/User/User';

function App() {
  const [friend, setFriend] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <h2>Is Friend: {friend.toString()}</h2>
        <button onClick={()=>setFriend(!friend)}>Toggle</button>
       <User friend={friend}></User>
      </header>
    </div>
  );
}

export default App;
