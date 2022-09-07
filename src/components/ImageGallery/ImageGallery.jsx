import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImagesList } from './ImageGallery.styled';
export const ImageGallery = ({ images }) => {
  return (
    <ImagesList>
      {images.map(image => {
        return <ImageGalleryItem key={image.id} image={image} />;
      })}
    </ImagesList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
