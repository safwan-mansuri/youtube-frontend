import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [as, setFile] = useState('');
  const [data, setData] = useState(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  }

  const show = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', as, as.name);
    const url = 'https://youtube-backends.herokuapp.com/upload';

    const resp2 = await axios.post(url, formData, {headers: {
      'Content-Type': 'multipart/form-data',
    }});

    const datas = JSON.parse(resp2.data.body)
    console.log(datas)
    setData(datas);
    console.log(data);
  }

  return (
    <div className="App">
      <input type='file' name='file' onChange={handleChange}/>
      <button type='submit' onClick={show}>submit</button>
      {console.log(data)}
      {
        data ? (
          <div>
          {
            Object.keys(data).map((ele) => {
              return <h1><span>{ele}: </span>{data[ele]}</h1>
            })
          }
          </div>
      ) 
        : (<h1>not there</h1>)
      }
    </div>
  );
}

export default App;
