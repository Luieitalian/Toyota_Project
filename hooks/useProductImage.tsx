import axios from 'axios';
import {useEffect, useState} from 'react';
import {ProductModel} from '../models/ProductModel';

const URLVariations = [
  'https://cdn.getir.com/product/',
  'https://market-product-images-cdn.getirapi.com/product/',
];

const useProductImage = (prod: ProductModel) => {
  const [imageURL, setImageURL] = useState<string>();
  const [loadingImageURL, setLoadingImageURL] = useState<boolean>(true);

  useEffect(() => {
    // try complete url variaton - if response status is 200 then return true or else return false
    const tryVariation = async (completeURL: string): Promise<boolean> => {
      const response = await axios.get(completeURL);

      if (response.status === 200) {
        return true;
      } else {
        console.error(
          `403 - can't get '${prod.name}' image from ${completeURL}`
        );
        return false;
      }
    };

    // try all url variatons with the tryVariation function
    // if tryVariation returns true then the one completeURL that's been sent, is the correct one
    const tryURLVariations = async () => {
      const completeURLVariations = URLVariations.map(
        (URLVariation) => `${URLVariation}${prod.img}`
      );

      completeURLVariations.every(async (variation) => {
        const isCorrectVariation = await tryVariation(variation);
        if (isCorrectVariation === true) {
          setImageURL(variation);
          setLoadingImageURL(false);
          return false; // break from every()
        }
      });
    };
    tryURLVariations();
  }, []);

  return {imageURL, loadingImageURL};
};

export default useProductImage;
