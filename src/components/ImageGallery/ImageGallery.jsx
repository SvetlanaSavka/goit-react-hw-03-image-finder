import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
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
  images: PropTypes.string.isRequired,
  setActiveImage: PropTypes.string.isRequired,
  onClickImage: PropTypes.func.isRequired,
};
