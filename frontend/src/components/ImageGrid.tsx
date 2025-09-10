import ImageCard from './ImageCard';

// This is mock data. Later, it will come from your backend API.
const mockImages = [
  { id: 1, url: 'https://via.placeholder.com/300', caption: 'Castle in the sky' },
  { id: 2, url: 'https://via.placeholder.com/300', caption: 'A quiet forest' },
  { id: 3, url: 'https://via.placeholder.com/300', caption: 'City at night' },
];

const ImageGrid = () => {
  const gridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  };

  return (
    <div style={gridStyles}>
      {mockImages.map(image => (
        <ImageCard key={image.id} imageUrl={image.url} caption={image.caption} />
      ))}
    </div>
  );
};

export default ImageGrid;