import React, { useState, useRef } from 'react';
import axios from 'axios';
import styles from './imageUploader.module.css';

function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const hiddenImageinput = useRef(null);

  function handleClick() {
    hiddenImageinput.current.click();
  }

  function handleFileInputChange(event) {
    setSelectedFile(event.target.files[0]);
  }

  function handleClearButtonClick() {
    setSelectedFile(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);
    try {
      await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <div className={styles.previewContainer}>
          {selectedFile ? (
            <img
              className={styles.previewImage}
              src={URL.createObjectURL(selectedFile)}
              alt="Preview"
            />
          ) : (
            <span className={styles.previewPlaceholder}>No image selected</span>
          )}
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.clearButton} onClick={handleClick}>
            Choose Image
          </button>
          <label className={styles.chooseFileButton} style={{ display: "none" }} ref={hiddenImageinput}>
            <input
              type="file"
              className={styles.fileInput}
              onChange={handleFileInputChange}
            />
          </label>
          <button className={styles.clearButton} onClick={handleClearButtonClick}>
            Clear Image
          </button>
          <button type="submit" className={styles.submitButton}>
            Upload Image
          </button>
        </div>
      </div>
    </form>
  );
}

export default ImageUploader;
