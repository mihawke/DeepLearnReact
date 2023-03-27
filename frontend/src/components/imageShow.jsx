import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageList = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const response = await axios.get('/image');
            setImages(response.data.images);
        };
        fetchImages();
    }, []);

    return (
        <div>
            {images.map((image) => (
                <img key={image._id} src={`data:image/jpeg;base64,${image.data}`} alt={image.filename} />
            ))}
        </div>
    );
};

export default ImageList;
