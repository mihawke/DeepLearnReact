import React, { useState, useEffect } from 'react';
import axios from './axios.config';

const ImageList = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);

  const changeFileName = (event) => {
    setFileName(event.target.value)
  }

  async function handleSubmit(event){
    event.preventDefault();
    try {
      const api = axios.create({
        responseType: 'blob'
      });
      const response = await api.get(`/file/${fileName}`);
      const blob = response.data;
      setFile(URL.createObjectURL(blob));
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  }

  return (
    <div>
      {file && <img src={file} alt="myfile" />}
      <form onSubmit={handleSubmit}>
        <input id='name' type='text' onChange={changeFileName}></input>
        <button type='submit' >Submit</button>
      </form>
    </div>
  );
}

export default ImageList;
