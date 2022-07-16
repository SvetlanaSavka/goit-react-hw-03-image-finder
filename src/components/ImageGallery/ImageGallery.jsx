import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Container } from './ImageGallery.styled';

export const ImageGallery = ({ images, setActiveImage }) => {
  return (
    <Container>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onClick={() => {
            console.log('click');
            setActiveImage(image.largeImageURL);
          }}
        />
      ))}
    </Container>
  );
};
