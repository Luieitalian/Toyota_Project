import React, {useMemo} from 'react';
import {Categories} from '@/globals/categories';
import {ProductModel} from '@/models/ProductModel';

type useFilteredProductsProps = {
  products: ProductModel[];
  favorites: string[];
  submittedText: string | undefined;
  category: string;
};

const useFilteredProducts = ({
  submittedText,
  products,
  favorites,
  category,
}: useFilteredProductsProps) => {
  const categoryAndProducts = useMemo(() => {
    let categoryAndProducts = {} as {[x: string]: ProductModel[]};
    Categories.forEach((category: string) => {
      if (category === 'show_all') {
        categoryAndProducts = Object.assign(categoryAndProducts, {
          [category]: products,
        });
      } else if (category === 'favorites') {
        categoryAndProducts = Object.assign(categoryAndProducts, {
          [category]: products.filter((prod: ProductModel) =>
            favorites.includes(prod.id)
          ),
        });
      } else {
        categoryAndProducts = Object.assign(categoryAndProducts, {
          [category]: products.filter(
            (prod: ProductModel) => prod.category === category
          ),
        });
      }
    });
    return categoryAndProducts;
  }, [favorites, products]);

  const filteredProducts = useMemo(() => {
    let filteredProducts = categoryAndProducts[category];

    console.log('favorites: ', favorites);

    if (submittedText !== undefined) {
      filteredProducts = filteredProducts.filter((prod: ProductModel) =>
        prod.name
          .trim()
          .toLocaleLowerCase('tr')
          .includes(submittedText.trim().toLocaleLowerCase('tr'))
      );
    }

    console.log('category: ', category);
    console.log('submittedText: ', submittedText);

    return filteredProducts;
  }, [favorites, category, submittedText, categoryAndProducts]);

  return filteredProducts;
};

export default useFilteredProducts;
