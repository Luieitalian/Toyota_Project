import {useEffect, useState} from 'react';
import {ProductModel} from '../models/ProductModel';

const useSearch = (
  products: ProductModel[],
  submittedText: string,
  loadingProducts: boolean
) => {
  const [filteredProducts, setFilteredProducts] = useState<ProductModel[]>([]);
  const [isLoadingFilteredProducts, setIsLoadingFilteredProducts] =
    useState<boolean>(true);

  useEffect(() => {
    if (loadingProducts === true) {
      console.log('loadingProducts === true');
      setIsLoadingFilteredProducts(true);
    } else {
      const filteredProds: ProductModel[] = [];
      products.forEach((prod: ProductModel) => {
        if (
          prod.name
            .trim()
            .toLocaleLowerCase('tr')
            .includes(submittedText.trim().toLocaleLowerCase('tr'))
        ) {
          filteredProds.push(prod);
        }
      });

      setFilteredProducts(filteredProds);
      setIsLoadingFilteredProducts(false);
    }
  }, [loadingProducts, submittedText]);

  return {filteredProducts, isLoadingFilteredProducts};
};

export default useSearch;
