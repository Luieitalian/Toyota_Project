import {Dispatch, useCallback} from 'react';

type useFavoriteProductsFunctionsArgs = {
  favorites: string[];
  setFavorites: Dispatch<React.SetStateAction<string[]>>;
};

const useFavoriteProductsFunctions = ({
  favorites,
  setFavorites,
}: useFavoriteProductsFunctionsArgs) => {
  const removeFromFavorites = useCallback(
    (prod_id: string) => {
      if (!favorites.includes(prod_id)) {
        console.log(
          `Product with id '${prod_id}' is not a favorite! No action taken.`
        );
      } else {
        setFavorites((favs) => favs.filter((fav) => fav !== prod_id));
        console.log(
          `Product with id '${prod_id}' is removed from favorite products!`
        );
      }
    },
    [favorites, setFavorites]
  );

  const addToFavorites = useCallback(
    (prod_id: string) => {
      if (favorites.includes(prod_id)) {
        console.log(
          `Product with id '${prod_id}' is already a favorite! No action taken.`
        );
      } else {
        setFavorites((favs) => [...favs, prod_id]);
      }
    },
    [favorites, setFavorites]
  );

  return {addToFavorites, removeFromFavorites};
};

export default useFavoriteProductsFunctions;
