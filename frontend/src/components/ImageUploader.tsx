import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import api from '../api/axios';

const ImageUploader: React.FC = () => {
  const [previews, setPreviews] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    setPreviews([]);
    acceptedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviews(prev => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const handleUpload = async () => {
    if (files.length === 0) return;
    setUploading(true);
    setMessage('');

    const formData = new FormData();
    files.forEach(file => formData.append('images', file)); // backend expects 'images'

    try {
      const response = await api.post('/upload', formData);
      setMessage('Upload successful!');
      console.log('Server response:', response.data);
    } catch (error: any) {
      setMessage('Upload failed.');
      console.error('Error uploading:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <div {...getRootProps()} style={{
        border: '2px dashed #aaa',
        padding: '2rem',
        textAlign: 'center',
        background: isDragActive ? '#eee' : '#fafafa',
        cursor: 'pointer',
      }}>
        <input {...getInputProps()} />
        <p>Drag & drop images here, or click to select</p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '1rem' }}>
        {previews.map((src, idx) => (
          <img key={idx} src={src} alt={`preview-${idx}`} style={{ width: '150px', margin: '0.5rem' }} />
        ))}
      </div>

      <button onClick={handleUpload} disabled={uploading || files.length === 0} style={{ marginTop: '1rem' }}>
        {uploading ? 'Uploading...' : 'Upload Images'}
      </button>

      {message && <p style={{ marginTop: '1rem', color: uploading ? 'gray' : 'green' }}>{message}</p>}
    </div>
  );
};

export default ImageUploader;


export default ImageUploader;
