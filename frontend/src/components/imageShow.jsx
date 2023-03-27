import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageList = () => {
    const [file, setFile] = useState(null);

    useEffect(() => {
        async function fetchFile() {
          try {
            const api = axios.create({
              responseType: 'blob'
            });
            const response = await api.get('/file/Sekiro.jpg');
            const blob = response.data;
            setFile(URL.createObjectURL(blob));
          } catch (error) {
            console.error('Error fetching image:', error);
          }
        }
        fetchFile();
      }, []);
  
    return (
      <div>
        {file && <img src={file} alt="myfile" />}
      </div>
    );
  }

export default ImageList;
