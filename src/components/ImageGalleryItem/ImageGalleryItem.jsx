import React from 'react';
import { Image, ImageItem } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
export class ImageGalleryItem extends React.Component {
  state = {
    isModal: false,
  };

  changeModal = () => {
    this.setState(pState => ({
      isModal: !pState.isModal,
    }));
  };

  render() {
    const { image } = this.props;
    return (
      <div>
        <ImageItem onClick={this.changeModal}>
          <Image src={image.webformatURL} alt={image.tags} />
        </ImageItem>
        {this.state.isModal && (
          <Modal
            src={image.largeImageURL}
            alt={image.tags}
            onClose={this.changeModal}
          />
        )}
      </div>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }),
};
