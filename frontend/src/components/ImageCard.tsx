type ImageCardProps = {
  imageUrl: string;
  caption: string;
};

const ImageCard = ({ imageUrl, caption }: ImageCardProps) => {
  const cardStyles: React.CSSProperties = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
  };

  const imgStyles: React.CSSProperties = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  return (
    <div style={cardStyles}>
      <img src={imageUrl} alt={caption} style={imgStyles} />
      <p style={{ padding: '10px' }}>{caption}</p>
    </div>
  );
};

export default ImageCard;