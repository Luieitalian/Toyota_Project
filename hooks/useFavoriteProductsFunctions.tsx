import {Dispatch, useCallback} from 'react';
import {ProductModel} from '@/models/ProductModel';

const useFavoriteProductsFunctions = (
  setFavorites: Dispatch<React.SetStateAction<string[]>>
) => {
  const removeFromFavorites = useCallback((prod_id: string) => {
    setFavorites((favorites) => {
      if (!favorites.includes(prod_id)) {
        console.log(
          `Product with id '${prod_id}' is not a favorite! No action taken.`
        );
        return favorites;
      } else {
        console.log(
          `Product with id '${prod_id}' is removed from favorite products!`
        );
        return favorites.filter((fav) => fav !== prod_id);
      }
    });
  }, []);

  const addToFavorites = useCallback((prod_id: string) => {
    setFavorites((favorites) => {
      if (favorites === undefined) {
        console.log(`Adding product with id '${prod_id}' to favorites!`);
        return [prod_id];
      } else {
        if (favorites.includes(prod_id)) {
          console.log(
            `Product with id '${prod_id}' is already a favorite! No action taken.`
          );
          return favorites;
        } else {
          console.log(`Adding product with id '${prod_id}' to favorites!`);
          return [...favorites, prod_id];
        }
      }
    });
  }, []);

  return {addToFavorites, removeFromFavorites};
};

export default useFavoriteProductsFunctions;
