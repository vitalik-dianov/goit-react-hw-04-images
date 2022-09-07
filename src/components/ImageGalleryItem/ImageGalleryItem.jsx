import React, { useState } from 'react';
import { Image, ImageItem } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ image }) => {
  const [isModal, setIsModal] = useState(false);

  const changeModal = () => {
    setIsModal(state => !state);
  };

  return (
    <div>
      <ImageItem onClick={changeModal}>
        <Image src={image.webformatURL} alt={image.tags} />
      </ImageItem>
      {isModal && (
        <Modal
          src={image.largeImageURL}
          alt={image.tags}
          onClose={changeModal}
        />
      )}
    </div>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }),
};
