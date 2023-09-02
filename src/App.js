import React, { useState } from 'react'
import Products from './Products';
import './App.css';

const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const YOUR_APP_ID = "9ed05f41";
  const YOUR_APP_KEY = "6484c88f3b7a9e9f9990d83ff7c7e44c";
  const submitHandler = e => {
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      data => setData(data.hits)
    )
  }
  return (
    <div className='bg'>
      <center>
        <div className='Titlename'>
          <h2><i>YOUR DELICIOUS FOOD HERE</i></h2><br />
        </div>
        <form onSubmit={submitHandler} className='for-btn'>
            <input type="text" className='totext' value={search} onChange={(e) => setSearch(e.target.value)} /><br /><br />
            <input type="submit" className="btn btn-primary" value="Search" /><br /><br />
          </form>
          {data.length >= 1 ? <Products data={data} /> : null}
      </center>
      
    </div>
  )
}

export default App;
