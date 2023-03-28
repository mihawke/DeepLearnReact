import React, { useState, useRef } from 'react';
import axios from './axios.config';
import styles from './styles/imageUploader.module.css';

function ImageUploader() {
  // use State to store selected file
  const [selectedFile, setSelectedFile] = useState(null);
  const hiddenImageinput = useRef(null);

  // The current property of the hiddenImageinput object refers to the actual HTML element that it is referencing.
  // The click() method is called on the current HTML element, which simulates a click event on the input element.
  function handleClick() {
    hiddenImageinput.current.click();
  }

  // The function is defined and takes an event object as a parameter.
  // "event.target" property refers to the element that triggered the event, which in this case is the file upload input field.
  // "files" property of the input field contains an array of the selected files. For selection of one file, we access it using index 0 (i.e., "event.target.files[0]").
  // "setSelectedFile" sets the selected file as the state of the component.
  function handleFileInputChange(event) {
    setSelectedFile(event.target.files[0]);
  }

  // sets selectedFile to null.
  function handleClearButtonClick() {
    setSelectedFile(null);
  }

  // Using the async/await syntax, React components can wait for operations to complete before updating the state of the component or rendering new data.
  // The function is defined with an event parameter.
  async function handleSubmit(event) {
    //  event is used to prevent the default form submission behavior.
    event.preventDefault();
    // The FormData constructor is used to create a new form data object that can be used to append the selected file data to the request.
    const formData = new FormData();
    // The append method is used to add the selected file data to the formData object with the key file.
    formData.append('file', selectedFile);
    try {
      // The axios library is used to make a POST request to the /upload endpoint on the server with the formData object as the data payload.
      // The await keyword is used to wait for the POST request to complete before continuing with the execution of the function.
      await axios.post('/upload', formData, {
        // The headers option is set to 'multipart/form-data' to ensure that the form data is sent in the correct format.
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
