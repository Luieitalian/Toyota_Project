import axios from 'axios';
import {useEffect, useState} from 'react';
import {ProductModel} from '../models/ProductModel';

const useProductImage = (prod: ProductModel) => {
  const [imageURL, setImageURL] = useState<string>();
  const [loadingImageURL, setLoadingImageURL] = useState<boolean>(true);

  const getSetImageURL = async () => {
    await axios
      .get(prod.img)
      .then(() => {
        setImageURL(prod.img);
        setLoadingImageURL(false);
      })
      .catch((e) => {
        console.log(`Can't get '${prod.name}' from '${prod.img}'`);
      });
  };

  useEffect(() => {
    getSetImageURL();
  }, []);

  return {imageURL, loadingImageURL};
};

export default useProductImage;
