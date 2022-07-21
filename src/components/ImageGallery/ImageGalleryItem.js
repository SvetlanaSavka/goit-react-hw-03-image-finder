import PropTypes from 'prop-types';
import { ImageContainer, Image } from './ImageGallery.styled';

export const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <ImageContainer>
      <Image src={image.webformatURL} alt={image.tags} onClick={onClick} />
    </ImageContainer>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
