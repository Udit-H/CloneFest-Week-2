import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUploader: React.FC = () => {
  const [previews, setPreviews] = useState<string[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newPreviews = acceptedFiles.map(file => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPreviews(prev => [...prev, reader.result as string]);
      };
      return URL.createObjectURL(file); // fallback preview
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/webp': [],
      'image/avif': [],
    },
    multiple: true,
  });

  return (
    <div {...getRootProps()} style={{
      border: '2px dashed #aaa',
      padding: '2rem',
      textAlign: 'center',
      background: isDragActive ? '#eee' : '#fafafa',
      cursor: 'pointer',
    }}>
      <input {...getInputProps()} />
      <p>Drag & drop images here, or click to select</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '1rem' }}>
        {previews.map((src, idx) => (
          <img key={idx} src={src} alt={`preview-${idx}`} style={{ width: '150px', margin: '0.5rem' }} />
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
