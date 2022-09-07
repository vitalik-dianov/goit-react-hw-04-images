import React, { useEffect, useState } from 'react';
import { fetchImage } from 'services/pixabay-api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [querry, setQuerry] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (querry) {
      setIsLoading(true);
      fetchImage(querry, page)
        .then(response => {
          setImages(state => [...state, ...response.data.hits]);
          setIsLoading(false);
          return response.data.hits;
        })
        .catch(error => {
          setIsLoading(false);
          console.log(error);
        });
    }
  }, [page, querry]);

  const onLoadMore = () => {
    setPage(state => state + 1);
  };
  const onSubmit = ({ querryInput }) => {
    const optimizedQuerry = querry.toLowerCase().trim();
    const optimizedQuerryInput = querryInput.toLowerCase().trim();
    if (optimizedQuerry !== optimizedQuerryInput) {
      setImages([]);
      setPage(1);
      setQuerry(querryInput);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <Searchbar onSubmit={onSubmit} />

      {images.length !== 0 && (
        <>
          <ImageGallery images={images} />
          <Button onLoadMore={onLoadMore}>LoadMore</Button>
        </>
      )}
    </>
  );
};
