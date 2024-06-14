# `useProductImage` Hook Documentation

## Overview

The `useProductImage` hook is a custom React hook used in the HızlıPos React application to fetch and manage product images. It utilizes Axios for HTTP requests and React's state management (useState and useEffect) to handle the image fetching process.

## Dependencies

- `axios`
- `react`

## Hook Definition

```js
import axios from 'axios';
import {useEffect, useState} from 'react';
import {ProductModel} from '@/models/ProductModel';

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
  }, [prod]);

  return {imageURL, loadingImageURL};
};

export default useProductImage;
```

## Usage

### Arguments

- `prod`: A `ProductModel` object representing the product for which the image is fetched.

### Returns

- `imageURL`: A string containing the URL of the product image.
- `loadingImageURL`: A boolean indicating whether the image URL is still being loaded.
