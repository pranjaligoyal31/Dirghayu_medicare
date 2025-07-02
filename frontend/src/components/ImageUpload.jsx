import React, { useState } from 'react';

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const fileInput = document.querySelector('#file');
    const file = fileInput.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file); // must match `.single('image')` in backend

    try {
      setLoading(true);
      const res = await fetch('http://localhost:4000/api/upload', {
        method: 'POST',
        body: formData,
        credentials: 'include', // if using cookies/sessions
      });

      const data = await res.json();
      console.log('Uploaded URL:', data.imageUrl);
      setImageUrl(data.imageUrl);
    } catch (err) {
      console.error('Upload failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Upload Image to Cloudinary</h2>
      <form onSubmit={handleUpload}>
        <input type="file" id="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload'}
        </button>
      </form>

      {preview && <p>Preview:</p>}
      {preview && <img src={preview} alt="Preview" style={{ width: '200px' }} />}

      {imageUrl && (
        <div>
          <p>Uploaded Image:</p>
          <img src={imageUrl} alt="Uploaded" style={{ width: '200px' }} />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
