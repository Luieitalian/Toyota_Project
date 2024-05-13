import axios from 'axios';
import {useEffect, useState} from 'react';
import {ProductModel} from '../models/ProductModel';

const useProductImage = (prod: ProductModel) => {
  const [imageURL, setImageURL] = useState<string>();
  const [loadingImageURL, setLoadingImageURL] = useState<boolean>(true);

  useEffect(() => {
    const getSetImageURL = async () => {
      await axios
        .get(prod.img)
        .then(() => {
          setImageURL(prod.img);
          setLoadingImageURL(false);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getSetImageURL();
  }, [prod]);

  return {imageURL, loadingImageURL};
};

export default useProductImage;
