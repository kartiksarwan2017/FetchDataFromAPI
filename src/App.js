import { useEffect, useMemo, useState } from 'react';
import Button from 'react-bootstrap/Button';
import List from './List';
import axios from 'axios';
import './App.css';

function App() {

  const [id, setId] = useState(0);
  const [posts, setPosts] = useState([]);

  const fetchDetails = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    setPosts(response.data);
 
  }

  return (
    <div className="App">

      <form onSubmit={(e) => fetchDetails(e)} className='form'>
        <label htmlFor='id' className='form-label'>ENTER ID</label>
        <input type="number" name="id" value={id} onChange={(e) => setId(e.target.value)}  />
        <button className='btn'>Fetch Data</button>
      </form>

     {
      (id !== 0) &&
      <List posts={posts} />
     }

    </div>
  );
}

export default App;
