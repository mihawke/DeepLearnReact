import React, { useState } from 'react';
import styles from './styles/imageUpload.module.css'

const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const hiddenImageinput = React.useRef(null);

    const handleClick = event => {
        hiddenImageinput.current.click();
    };

    const handleFileInputChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleClearButtonClick = () => {
        setSelectedFile(null);
    };

    return (
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
            </div>
        </div>
    );
};

export default ImageUpload;