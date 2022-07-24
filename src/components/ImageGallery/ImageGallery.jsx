import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Container } from './ImageGallery.styled';

export const ImageGallery = ({ images, setActiveImage, onClickImage }) => {
  return (
    <Container>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onClick={() => {
            setActiveImage(image.largeImageURL);
            onClickImage();
          }}
        />
      ))}
    </Container>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  setActiveImage: PropTypes.func.isRequired,
  onClickImage: PropTypes.func.isRequired,
};
