import React from 'react';
import { fetchImage } from 'services/pixabay-api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends React.Component {
  state = {
    images: [],
    page: 1,
    querry: '',
    isLoading: false,
  };

  componentDidUpdate(_, pState) {
    const prevQuerry = pState.querry.toLowerCase().trim();
    const stateQuerry = this.state.querry.toLowerCase().trim();

    if (prevQuerry !== stateQuerry) {
      this.setState({ images: [] });
    }

    if (pState.images === this.state.images) {
      fetchImage(this.state.querry, this.state.page)
        .then(response => {
          this.setState(prevState => ({
            images: [...prevState.images, ...response.data.hits],
            isLoading: false,
          }));
          return response.data.hits;
        })
        .catch(error => console.log(error));
    }
  }

  onLoadMore = () => {
    this.setState(pState => ({ page: pState.page + 1, isLoading: true }));
  };
  onSubmit = ({ querry }) => {
    if (this.state.querry !== querry) {
      this.setState({ querry: querry, isLoading: true });
      return;
    }
  };
  render() {
    return (
      <div>
        {this.state.isLoading && <Loader />}
        <Searchbar onSubmit={this.onSubmit} />

        {this.state.images.length !== 0 && (
          <div>
            <ImageGallery images={this.state.images} />
            <Button onLoadMore={this.onLoadMore}>LoadMore</Button>
          </div>
        )}
      </div>
    );
  }
}
