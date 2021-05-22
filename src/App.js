import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";

const App = () => {
  const [as, setFile] = useState('');
  const [data, setData] = useState(null);
  const [ loading, setLoading ] = useState(false);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  }

  const show = async (event) => {
    event.preventDefault();
    setData(null);
    setLoading(true);
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
    setLoading(false);
  }

  const headerStyle = {
    backgroundColor: '#ECF0F1'
  }

  const textStyle = {
    textAlign: 'center',
    color:'red'
  }

  const bodyStyle = {
    color: 'red',
    marginTop: '30px',
    marginLeft: '30px'
  }

  const loaderStyle = {
    marginTop: '30px'
  }

  return (
    <div className="App">
      <div className="youtube-header" style={headerStyle}>
          <h1 style={textStyle}>Youtube History</h1>
      </div>

      <input type='file' name='file' onChange={handleChange}/>
      <button type='submit' onClick={show}>submit</button>
      {console.log(data)}
      {
        data ? (
          <div className='youtube-body' style={bodyStyle}>
            <table>
              <thead>
                <tr>
                  <th>
                    Videos Count
                  </th>
                  <th>
                    Videos Count
                  </th>
                </tr>

              </thead>
          { Object.keys(data).map((ele) => {
              return (
                <tbody>
                  <tr>
                    <td>{ele}</td>
                    <td>{data[ele]}</td>
                  </tr>
                </tbody> )})}
        </table>
          </div>
      )  : null }

    {
      loading ? (
        <div style={loaderStyle}>
        <Loader
          type="Puff"
          color="red"
          height={100}
          width={100}
      />
      </div>
      ) : null
    }

    </div>
  );
}

export default App;
